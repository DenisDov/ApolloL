import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import FlashMessage from 'react-native-flash-message';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AppNavigator from './navigation/AppNavigator';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cji1nnnyw8hia0115y4ro03xr',
});

const AppContainer = createAppContainer(AppNavigator);

EStyleSheet.build();

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
        <FlashMessage icon="auto" duration={300} />
      </ApolloProvider>
    );
  }
}
