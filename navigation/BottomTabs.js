import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import StackANavigator from './StackANavigator';
import StackBNavigator from './StackBNavigator';
import StackCNavigator from './StackCNavigator';


export default function BottomTabs(){
    const Tab = createBottomTabNavigator();
    console.log("LLEGO")
    return (

        
        <Tab.Navigator>
        <Tab.Screen name="StackA" component={StackANavigator} options={{tabBarIcon: () => (<Ionicons name="person" size={24} color="yellow" />),}}/>
        <Tab.Screen name="StackB" component={StackBNavigator} options={{tabBarIcon: () => (<Ionicons name="person" size={24} color="orange" />),}}/>
        <Tab.Screen name="StackC" component={StackCNavigator}  options={{tabBarIcon: () => (<Ionicons name="person" size={24} color="red" />),}}/>
        </Tab.Navigator>
            )
    
}

