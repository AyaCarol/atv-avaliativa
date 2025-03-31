import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';

const Login = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('userName', name);
    navigate('/form');
  };

  return (
    
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Bem vindo!
        </Text>
        <Text style={styles.subheading}>
          Por favor, insira seu nome para continuar:
        </Text>
    
      </View>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subheading:{
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 20,
  },
  input: {
    display: 'flex',
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '85%',
    borderStyle: 'solid',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 15,
  },
  inputs:{
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#0582CA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '60%',
    borderRadius: 15,
  },
  buttonText:{
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
  },
});

export default Login;