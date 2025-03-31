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
      <View style={styles.box}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#240046',
  },
  box:{
    backgroundColor: '#eee9f0',
    width: '50%',
    borderRadius: 30,
    alignItems: 'center',
    height: '40%',
    justifyContent: 'center',
  },
  title:{
    fontSize: 28,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subheading:{
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 17,
    paddingBottom: 20,
  },
  input: {
    display: 'flex',
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'white',
  },
  inputs:{
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    backgroundColor: '#5a189a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '90%',
    borderRadius: 10,
  },
  buttonText:{
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
  },
});

export default Login;