import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC1 from '../screens/ScreenC1';
import ScreenC2 from '../screens/ScreenC2';

const Stack = createNativeStackNavigator();

export default function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AYUDA" component={ScreenC1} />
      <Stack.Screen name="CONSEJOS" component={ScreenC2} />
    </Stack.Navigator>
  );
}