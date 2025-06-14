import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenB1 from '../screens/ScreenB1';
import ScreenB2 from '../screens/ScreenB2';

const Stack = createNativeStackNavigator();

export default function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PERFIL" component={ScreenB1} />
      <Stack.Screen name="FOTO" component={ScreenB2} />
    </Stack.Navigator>
  );
}