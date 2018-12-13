import React, { Component } from 'react';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppContainer />
      </View>
    );
  }
}
