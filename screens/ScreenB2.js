import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenB2({ route }) {
    const { foto } = route.params;
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text style={styles.texto}>La foto que quedará en tu perfil es:</Text>
        <Image style={styles.imagen} source={{ uri: foto }} />

      </View>
    );
  }

  const styles = StyleSheet.create({
    ViewColor: {
      flex: 1,
      backgroundColor: '#FFF4E0', // naranja muy claro para fondo
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    texto: {
      fontSize: 20,
      color: '#D2691E', // chocolate/naranja oscuro para texto
      fontWeight: '600',
      marginBottom: 15,
      textAlign: 'center',
    },
    imagen: {
      width: 250,
      height: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: '#FF8C00', // naranja fuerte para el borde
    }
  });
  