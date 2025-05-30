import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenB1() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text>HOME</Text>
        <Text >Estás en ScreenB1. Tocá el botón para ir a ScreenB2.</Text>
        <Button title="Ir A ScreenB2" onPress={() => navigation.navigate('ScreenB2')} />
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    ViewColor: {
      backgroundColor: "orange"
    }
  })