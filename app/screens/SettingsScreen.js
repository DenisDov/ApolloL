import React, { Component } from 'react';
import { View } from 'react-native';

import { LoaderInset } from '../components/Loader';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoaderInset />
      </View>
    );
  }
}

export default SettingsScreen;
