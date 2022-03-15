import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from 'react-native-vector-icons/Entypo';
import {tabName} from '../../configs/navigationConstants';
import Screen from '../../screens';
import {COLORS} from '../../themes';
const BottomTab = createBottomTabNavigator();
const tabBarIcon = ({route: {name}, size, focused}) => {
  const icons = {
    HomeTab: 'home',
    StreamTab: 'game-controller',
    ProfileTab: 'user',
  };
  const backgroundColor = focused ? COLORS.lightPurple : 'transparent';
  return (
    <View style={[{backgroundColor}, styles.tabBarIcon]}>
      <IconButton name={icons[name]} size={size} color={COLORS.opacityWhite} />
    </View>
  );
};
const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: {
    backgroundColor: COLORS.lightBack,
    borderTopColor: COLORS.lightBack,
  },
  tabBarIcon: params => tabBarIcon({...params, route}),
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

const styles = StyleSheet.create({
  tabBarIcon: {
    width: '50%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
});
