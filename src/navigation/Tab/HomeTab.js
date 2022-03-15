import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {tabName} from '../../configs/navigationConstants';
import Screen from '../../screens';
import {COLORS} from '../../themes';
const BottomTab = createBottomTabNavigator();
const tabBarIcon = () => {
  return <Text></Text>;
};
const screenOptions = () => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.lightBack,
    borderTopColor: COLORS.lightBack,
  },
  // tabBarIcon: tabBarIcon,
});
export default class HomeTab extends Component {
  render() {
    return (
      <BottomTab.Navigator screenOptions={screenOptions}>
        <BottomTab.Screen
          name={tabName.homeTab}
          component={Screen.HomeScreen}
        />
        <BottomTab.Screen
          name={tabName.streamTab}
          component={Screen.StreamScreens}
        />
        <BottomTab.Screen
          name={tabName.profileTab}
          component={Screen.ProfileScreen}
        />
      </BottomTab.Navigator>
    );
  }
}
