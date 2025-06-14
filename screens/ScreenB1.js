import * as React from 'react'; 
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native'; 

export default function ScreenB1() {
    const navigation = useNavigation();
    const [foto, setFoto] = React.useState('');
    return (
      <View style={styles.ViewColor}>
        <Text style={styles.titulo}>Perfil</Text>
        <Text style={styles.texto}>Nombre: Indiana Sasson</Text>
        <Text style={styles.texto}>Mail: 48043270@est.ort.edu.ar</Text>

        <TextInput 
          placeholder='Ingrese el url de tu foto' 
          style={styles.input} 
          onChangeText={setFoto} 
          placeholderTextColor="#999"
        />
        <TouchableOpacity 
        style={styles.boton} 
        onPress={() => {navigation.navigate('FOTO', { foto: foto});}} 
        >
          <Text style={styles.botonTexto}>Ver Foto</Text>
        </TouchableOpacity>
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    ViewColor: {
      flex: 1,
      backgroundColor: "#FFE5B4", // naranja claro
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    titulo: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 15,
      color: '#444' // naranja un poco más oscuro para destacar
    },
    texto: {
      fontSize: 18,
      marginBottom: 8,
      color: '#444',
      textAlign: 'center'
    },
    input: {
      width: '100%',
      maxWidth: 300,
      borderWidth: 2,
      borderColor: '#FFA500', // naranja para el borde
      backgroundColor: '#FFF',
      borderRadius: 10,
      padding: 12,
      marginBottom: 15,
      fontSize: 16
    },
    boton: {
      backgroundColor: '#FFA500', // naranja vivo
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
  
  
  