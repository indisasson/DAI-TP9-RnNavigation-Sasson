import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenC2() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text style={styles.titulo}>Consejos para el cliente</Text>
        <Text style={styles.texto1}>Asegurate de tener una conexión a internet estable para evitar problemas de carga.</Text>
        <Text style={styles.texto1}>Mantén la app actualizada para disfrutar de las últimas funciones y mejoras.</Text>
        <Text style={styles.texto1}>Guarda tus datos personales con cuidado y no los compartas con terceros.</Text>
        <Text style={styles.texto1}>Usa contraseñas seguras para proteger tu cuenta.</Text>
        <Text style={styles.texto1}>Si encontrás algún error, cerrá y volvé a abrir la app o contactá al soporte.</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    ViewColor: {
      flex: 1,
      backgroundColor: "#FDECEA", // rojo muy claro y suave para el fondo
      padding: 20,
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#444', // rojo oscuro para el título
      marginBottom: 20,
      textAlign: 'center',
    },
    texto1: {
      fontSize: 16,
      color: '#800000', // rojo vino oscuro para los textos
      marginBottom: 12,
      lineHeight: 22,
    }
  });
  