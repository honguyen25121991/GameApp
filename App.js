import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from './src/navigation/rootNavigation';
import store from './src/redux/rootStore';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
