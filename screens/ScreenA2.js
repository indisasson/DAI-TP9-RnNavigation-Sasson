import * as React from 'react'; 
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'; 
import { useNavigation } from '@react-navigation/native'; 

export default function ScreenA2({ route }) {
  const { nombre, telefono } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.greeting}>Hola, <Text style={styles.highlight}>{nombre}</Text>!</Text>
      <Text style={styles.info}>Tu número de teléfono es:</Text>
      <Text style={styles.phone}>{telefono}</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('PERFIL DEL CLIENTE')}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEA',  // amarillo claro
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#333',  // negro suave
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    color: '#333',
  },
  highlight: {
    color: '#F9E076',  // amarillo oscuro para destacar
    fontWeight: '600',
  },
  info: {
    fontSize: 18,
    marginTop: 15,
    color: '#333',
  },
  phone: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9E076',  // amarillo oscuro para destacar
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FDE992',  // amarillo medio
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    borderColor: '#F9E076',  // amarillo oscuro borde
    borderWidth: 1.5,
    elevation: 3, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#333',  // texto negro
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
});
