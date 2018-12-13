import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

const LoaderInset = ({ ...props }) => (
  <View style={styles.modalBackground}>
    <View style={styles.activityIndicatorWrapper}>
      <ActivityIndicator {...props} />
    </View>
    <Text style={styles.loaderText}>Loading</Text>
  </View>
);

export default LoaderInset;
