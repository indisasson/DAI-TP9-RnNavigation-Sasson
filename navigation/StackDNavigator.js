import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenD1 from '../screens/ScreenD1';
import ScreenD2 from '../screens/ScreenD2';

const Stack = createNativeStackNavigator();

export default function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CONFIRGURACION" component={ScreenD1} />
      <Stack.Screen name="ACERCA DE LA APP" component={ScreenD2} />
    </Stack.Navigator>
  );
}