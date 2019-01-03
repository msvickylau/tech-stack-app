import React from 'react';
import { View, ActivityIndicator } from 'react-native';

//this is a presentational component so that it does not have anything to do with state
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnterStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnterStyle: {
    flex: 1, //take full width
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export { Spinner };
