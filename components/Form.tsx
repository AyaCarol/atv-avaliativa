import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';

const Form = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  const handleSave = () => {
    localStorage.setItem('userEmail', email);
    navigate('/summary');
  };

  return (
    <View style={styles.container}>
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
});

export default Form;