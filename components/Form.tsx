import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';

const Form = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const [warning, setWarning] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSave = () => {

    if(validateEmail(email)){
      localStorage.setItem('userEmail', email);
      navigate('/summary');
    }else{
      setWarning("Por favor, insira um e-mail válido");
    }

    
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
        <Text style={styles.title}>
          Olá, {userName}
        </Text>
        <Text style={styles.subheading}>
          Preencha os dados abaixo:
        </Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
       {warning ? <Text style={[styles.warning]}>{warning}</Text> : null}
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
    width: '80%',
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
  },
  warning:{
    padding: 10,
    color: 'red',
  },
  subheading:{
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 17,
    padding: 20,
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

export default Form;