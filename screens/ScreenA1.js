import * as React from 'react'; 
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 

export default function ScreenA1() {
  const navigation = useNavigation();
  const [nombre, setNombre] = React.useState('');
  const [numeroTelefono, setNumeroTelefono] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de contacto</Text>
      <Text style={styles.texto}>Complete la siguiente información:</Text>
      
      <TextInput 
        placeholder='Ingrese su nombre' 
        style={styles.input} 
        onChangeText={setNombre} 
        placeholderTextColor="#999"
      />
      <TextInput 
        placeholder='Ingrese su teléfono' 
        style={styles.input} 
        onChangeText={setNumeroTelefono} 
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />
      
      <TouchableOpacity 
        style={styles.boton} 
        onPress={() => {navigation.navigate('INFORMACIÓN DEL CLIENTE', { nombre: nombre, telefono: numeroTelefono });}} 
      >
        <Text style={styles.botonTexto}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEA",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444'
  },
  texto: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    maxWidth: 300,
    borderWidth: 2,
    borderColor: '#FAD34F',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16
  },
  boton: {
    backgroundColor: '#FAD34F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 3, // sombra en Android
    shadowColor: '#000', // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 10
  },
  botonTexto: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600'
  }
});
