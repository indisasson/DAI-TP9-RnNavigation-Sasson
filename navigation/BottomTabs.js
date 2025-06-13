import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import StackANavigator from './StackANavigator';
import StackBNavigator from './StackBNavigator';
import StackCNavigator from './StackCNavigator';
import StackDNavigator from './StackDNavigator';


export default function BottomTabs(){
    const Tab = createBottomTabNavigator();
    console.log("LLEGO")
    return (

        
        <Tab.Navigator>
        <Tab.Screen name="Contacto" component={StackANavigator} options={{tabBarIcon: () => (<AntDesign name="phone" size={24} color="yellow" />),}}/>
        <Tab.Screen name="Foto" component={StackBNavigator} options={{tabBarIcon: () => (<AntDesign name="picture" size={24} color="orange" />),}}/>
        <Tab.Screen name="StackC" component={StackCNavigator}  options={{tabBarIcon: () => (<Feather name="help-circle" size={24} color="red" />),}}/>
        <Tab.Screen name="Confirguración" component={StackDNavigator}  options={{tabBarIcon: () => (<AntDesign name="setting" size={24} color="pink" />),}}/>
        </Tab.Navigator>
            )
    
}

