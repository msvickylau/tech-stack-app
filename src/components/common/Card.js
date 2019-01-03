import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.constainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadious: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shaowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
