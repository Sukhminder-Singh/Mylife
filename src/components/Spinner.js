import React from 'react';
import {View, ActivityIndicator, Image} from 'react-native';

import Colors from '../style/Colors';

const WaveSpinner = () => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={36} type="Wave" color={Colors.primary} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
    backgroundColor: '#F5FCFF88',
  },
};

export default WaveSpinner;
