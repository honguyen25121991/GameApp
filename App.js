import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/rootStore';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View>
          <Text>Ap11111p</Text>
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
