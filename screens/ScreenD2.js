import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenD2() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text style={styles.titulo}>ACERCA DE LA APP</Text>
        <Text style={styles.texto}>Aplicación desarrollada en React Native por Indiana S. (5IB).</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    ViewColor: {
      flex: 1,
      backgroundColor: "#FFE4E1", // rosa claro
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#C71585' // rosa fuerte
    },
    texto: {
      fontSize: 18,
      color: '#8B008B', // violeta-rosado oscuro
      textAlign: 'center'
    }
  });
  