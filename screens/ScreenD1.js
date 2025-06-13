import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenD1() {
    const navigation = useNavigation();
    return (
      <View style={styles.ViewColor}>
        <Text style={styles.titulo}>Configuración</Text>
        <Text style={styles.texto}>Esta es la configuración de la app</Text>

        <TouchableOpacity 
        style={styles.boton} 
        onPress={() => {navigation.navigate('ACERCA DE LA APP');}} 
        >
          <Text style={styles.botonTexto}>Acerca de la app</Text>
        </TouchableOpacity>
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    ViewColor: {
      flex: 1,
      backgroundColor: "#FFE4E1", // rosa claro (misty rose)
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#444' // rosa fuerte para resaltar
    },
    texto: {
      fontSize: 18,
      marginBottom: 10,
      color: '#8B008B', // un tono violeta-rosado oscuro
      textAlign: 'center'
    },
    boton: {
      backgroundColor: '#FF69B4', // hot pink
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginTop: 10
    },
    botonTexto: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
      fontWeight: '600'
    }
  });
  