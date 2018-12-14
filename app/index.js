import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AppNavigator from './navigation/AppNavigator';

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

const AppContainer = createAppContainer(AppNavigator);

EStyleSheet.build();

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    );
  }
}
