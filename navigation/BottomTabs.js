import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackANavigator from './StackANavigator';
import StackBNavigator from './StackBNavigator';
import StackCNavigator from './StackCNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabs(){
    <Tab.Navigator>
        <Tab.Screen name="StackA" component={StackANavigator}/>
        <Tab.Screen name="StackB" component={StackBNavigator}/>
        <Tab.Screen name="StackC" component={StackCNavigator}  options={{tabBarIcon: ({ color }) => (<Ionicons name="person" size={24} color={color} />),}}/>
    </Tab.Navigator>
}

