import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenC1() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text>HOME</Text>
        <Text>Estás en ScreenC1. Tocá el botón para ir a ScreenC2.</Text>
        <Button title="Ir A ScreenC2" onPress={() => navigation.navigate('ScreenC2')} />
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    ViewColor: {
      backgroundColor: "red"
    }
  })