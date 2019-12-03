import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [enteredName, setEnteredName] = useState('');
  
  //guardar nombre de input con cada "click"
  const nameInputHandler = (enteredName) => {
    setEnteredName(enteredName);
  };
  
  //usar el nombre ingresado con el boton de "comenzar a jugar"
  const loginGameHandler = () => {
    console.log(enteredName);
  };
  
  return (
    <View style={styles.screen}>
      <Text style={{fontSize:20, textAlign: 'center'}}>¡Bienvenido a Battleship! </Text>
      <Text style={{marginBottom:20, textAlign: 'center'}}>Antes de empezar ingresa tu nombre</Text>
      <View>
        <TextInput 
          placeholder="Ingresa tu nombre"
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <Button
          title="Comenzar a jugar"
          style={{color: 'black'}}
          onPress={loginGameHandler}
      />
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40, 
    flex: 1, 
    justifyContent: "center", 
    alignItems: 'center'
  },
  
  input: {
    width: '100%',
    margin: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10
  }
});