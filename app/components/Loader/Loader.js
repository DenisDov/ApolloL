import React from 'react';
import {
  View, Text, Modal, ActivityIndicator,
} from 'react-native';

import styles from './styles';

const Loader = ({ ...props }) => (
  <Modal transparent animationType="none" visible onRequestClose={() => null}>
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator {...props} />
      </View>
      <Text style={styles.loaderText}>Loading</Text>
    </View>
  </Modal>
);

export default Loader;
