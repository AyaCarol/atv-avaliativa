import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';

const Summary = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Aqui estão seus dados, {userName}</Text>
        <Text style={styles.subheading}>Para editá-los, volte ao formulário através do botão abaixo.</Text>
      </View>

      <View style={styles.list}>
        <Text style={styles.listlabel}>Nome: </Text><Text style={styles.info}>{userName}</Text>
        <Text style={styles.listlabel}>E-mail: </Text><Text style={styles.info}>{userEmail}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigate('/form')}>
            <Text style={styles.buttonText}>Voltar ao Formulário</Text>
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
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subheading:{
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16,
    paddingBottom: 20,
  },
  button:{
    backgroundColor: '#0582CA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '30%',
    borderRadius: 15,

  },
  buttonText:{
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
  },  
  list:{
    backgroundColor: '#F0F0F0',
    width: '40%',
    borderRadius: 15,
    alignItems: 'flex-start',
    marginBottom: 20,
    padding: 20,

  },
  listlabel:{
    fontSize: 16,
    
  },
  info:{
    fontSize: 17,
    fontWeight: 'bold',
  }
});

export default Summary;