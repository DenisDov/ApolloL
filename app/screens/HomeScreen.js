import React from 'react';
import { View, Text, FlatList } from 'react-native';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  ExchangeRates = () => (
    <Query
      query={gql`
        {
          rates(currency: "USD") {
            currency
            rate
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        console.log('data: ', data);
        if (loading) return <Text>Loading...</Text>;
        if (error) return <Text>Error :(</Text>;
        return (
          <FlatList
            data={data.rates}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
                <Text>{`${item.currency}: ${item.rate}`}</Text>
              </View>
            )}
            keyExtractor={item => item.currency}
          />
        );
      }}
    </Query>
  );

  render() {
    return <View>{this.ExchangeRates()}</View>;
  }
}

export default HomeScreen;
