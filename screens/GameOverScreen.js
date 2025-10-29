import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/Game/Title'

function GameOverScreen({ RoundNumber, userNumber, onRestart }) {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Game Over</Title>

      <Image style={styles.image} source={require('../assets/success.png')} />
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{RoundNumber}</Text> rounds to guess the
        number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>

      <View style={styles.buttonContainer}>
        <PrimaryButton text='Start New Game' onPress={onRestart} />
      </View>
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
    color: 'white',
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: '#ddb52f',
  },
  screen: {
    marginTop: 150,
    color: 'white',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: Colors.primary500,
    padding: 24,
    borderRadius: 20,
    elevation: 8,
    shadowColor: 'black',
    marginTop: 20,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    marginHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 240,
    borderWidth: 3,
    borderColor: 'black',
    marginVertical: 20,
  },
  summaryText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 20,
  },
  highlight: {
    color: Colors.accent500,
    fontWeight: 'bold',
  },
})
