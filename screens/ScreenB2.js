import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenB2() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text>HOME 2</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    ViewColor: {
      backgroundColor: "orange"
    }
  })