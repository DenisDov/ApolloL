import React from 'react';
import {
  ScrollView, View, Text, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text>smnvbsd,mnvs,mnv.s</Text>
        </View>
      </ScrollView>
    );
  }
}
