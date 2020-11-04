import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { colors } from '../config';
import { CardsScreen, HomeScreen, SendRequestScreen } from '../screens';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        safeAreaInsets: {
          bottom: 8,
        },
        style: {
          backgroundColor: colors.dark,
          borderTopColor: colors.dark,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SendRequest"
        component={SendRequestScreen}
        options={{
          tabBarLabel: 'Send & Request',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="send" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          tabBarLabel: 'My Cards',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="credit-card-multiple-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
