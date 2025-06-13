import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenC1() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text style={styles.titulo}>Ayuda al cliente</Text>
        <Text style={styles.texto}>Si necesitas ayuda configurando la app</Text>

        <TouchableOpacity 
        style={styles.boton} 
        onPress={() => {navigation.navigate('CONSEJOS');}} 
        >
          <Text style={styles.botonTexto}>Encuentre consejos</Text>
        </TouchableOpacity>
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    ViewColor: {
      flex: 1,
      backgroundColor: "#FDECEA", // rojo muy claro, suave para fondo
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#444' // rojo oscuro para destacar el título
    },
    texto: {
      fontSize: 18,
      color: '#800000', // rojo vino oscuro para el texto
      marginBottom: 20,
      textAlign: 'center'
    },
    boton: {
      backgroundColor: '#B22222', // rojo oscuro para el botón
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    botonTexto: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
      textAlign: 'center'
    }
  });
  