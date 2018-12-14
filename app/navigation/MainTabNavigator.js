/* eslint-disable react/prop-types */
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import Colors from '../constants/Colors';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={`${ICON_PREFIX}-information-circle`} />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={`${ICON_PREFIX}-link`} />,
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={`${ICON_PREFIX}-options`} />,
};

export default createMaterialBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack,
  },
  {
    activeColor: Colors.tabIconSelected,
    barStyle: {
      backgroundColor: Colors.tabBar,
      ...Platform.select({
        ios: { borderTopWidth: 1, borderTopColor: '#dfdfdf' },
      }),
    },
  },
);
