import React from 'react';
import {
  View, Text, FlatList, Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Touchable from 'react-native-platform-touchable';
import { showMessage } from 'react-native-flash-message';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { LoaderInset } from '../components/Loader';

const styles = EStyleSheet.create({
  post: {
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 16,
    marginBottom: 0,
    '@media ios': {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    '@media android': {
      elevation: 2,
    },
  },
});

const GET_RATES = gql`
  {
    allPosts {
      id
      date
      title
      imgUrl
      description
    }
  }
`;

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _handleRefresh = async (callback) => {
    await callback();
    await showMessage({
      message: 'Stories updated',
      type: 'success',
    });
  };

  ExchangeRates = () => (
    <Query query={GET_RATES}>
      {({
        loading, error, data, refetch,
      }) => {
        console.log('data: ', data);
        if (loading) return <LoaderInset />;
        if (error) return <Text>Something was wrong...</Text>;
        return (
          <FlatList
            data={data.allPosts}
            onRefresh={() => this._handleRefresh(refetch)}
            refreshing={loading}
            renderItem={({ item }) => (
              <Touchable style={styles.post}>
                <View>
                  <Text style={{ fontSize: 12, color: '#617886' }}>{item.date}</Text>
                  <Image source={{ uri: item.imgUrl }} style={{ height: 200 }} resizeMode="cover" />
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
                </View>
              </Touchable>
            )}
            keyExtractor={item => item.id}
          />
        );
      }}
    </Query>
  );

  render() {
    return <View style={{ flex: 1 }}>{this.ExchangeRates()}</View>;
  }
}

export default HomeScreen;
