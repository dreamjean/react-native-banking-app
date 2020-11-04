import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { PinScreen, TouchScreen } from '../screens';
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Touch" component={TouchScreen} />
    <Stack.Screen name="Pin" component={PinScreen} />
    <Stack.Screen name="Tabs" component={AppNavigator} />
  </Stack.Navigator>
);

export default AuthNavigator;
