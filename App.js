import { Button, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import GameOverScreen from './screens/GameOverScreen'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import GameScreen from './screens/GameScreen'
import { use, useState } from 'react'
import Colors from './constants/colors'
export default function App() {
  let screen = <StartGameScreen onPickNumber={PickedNumberHandler} />
  const [userNumber, setUserNumber] = useState()
  const [gameisOver, setGameisOver] = useState(true)
  const [guessRoundNum, setGuessRoundNum] = useState(0)
  if (userNumber && !gameisOver) {
    // When we have a number and game not over → show GameScreen
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  } else if (userNumber && gameisOver) {
    // When game is over and we have userNumber → s
    // how GameOverScreen
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        RoundNumber={guessRoundNum}
        onRestart={setRoundHandler}
      />
    )
  }
  function gameOverHandler(numberofRounds) {
    setGameisOver(true)
    setGuessRoundNum(numberofRounds)
  }

  function setRoundHandler() {
    setGuessRoundNum(0)
    setUserNumber(null)
  }
  function PickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameisOver(false)
    console.log(userNumber)
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.LinearGradientStyle}
    >
      <ImageBackground
        source={require('./assets/back.jpg')}
        resizeMode='cover'
        style={styles.LinearGradientStyle}
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView style={styles.screen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  LinearGradientStyle: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 12,
  },
})
