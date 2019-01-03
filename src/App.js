import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; //provider is jsx, works together with the store. 
import { createStore } from 'redux'; // store is what holds our appliucation state. 
import reducers from './reducers';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
