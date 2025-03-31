import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-native';

const Summary = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  return (
    <View style={styles.container}>
      <View style={styles.box}>
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
    height: '50%',
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
  list:{
    backgroundColor: 'white',
    width: '90%',
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