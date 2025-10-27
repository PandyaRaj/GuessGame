import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  return(
<View style = {styles.container}>
    <StartGameScreen></StartGameScreen>
</View>
  )

}



const styles = StyleSheet.create({
 container:{

  backgroundColor: '#72063c', 
    alignItems: 'center',
    justifyContent: 'center',
 }
});

