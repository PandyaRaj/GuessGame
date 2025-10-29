import { Text, StyleSheet, View, Alert, FlatList } from 'react-native'
import { useState, useEffect, use } from 'react'
import Title from '../components/Game/Title'
import NumberComponent from '../components/Game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'
import Card from '../components/ui/Card'
import GuessLogItem from '../components/Game/guesslogitem'
let minBoundry = 1
let maxBoundry = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentguess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const guessRoundListLength = guessRounds.length
  useEffect(() => {
    minBoundry = 1
    maxBoundry = 100
  }, [])
  useEffect(() => {
    if (currentGuess === userNumber) {
      console.log('correct')
      onGameOver(guessRoundListLength)
    }
  }, [currentGuess, userNumber, onGameOver])
  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude)
    } else {
      return rndNum
    }
  }
  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }
    if (direction === 'lower') {
      maxBoundry = currentGuess
    } else {
      minBoundry = currentGuess + 1
    }
    console.log(minBoundry, maxBoundry)
    const newRndNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess)
    setCurrentguess(newRndNumber)
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
  }
  return (
    <View style={styles.screen}>
      <Title>Opponenent </Title>
      <Card style={styles.cardContainer}>
        <NumberComponent>{currentGuess}</NumberComponent>

        <View style={styles.buttonsContainer}>
          <PrimaryButton text='Lower' onPress={() => nextGuessHandler('lower')} />
          <PrimaryButton text='Greater' onPress={() => nextGuessHandler('greater')} />
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={(itemdata) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - itemdata.index}
              guess={itemdata.item}
            ></GuessLogItem>
          )}
        ></FlatList>
      </View>
    </View>
  )
}
export default GameScreen

const styles = StyleSheet.create({
  screen: {
    marginTop: 150,
    color: 'white',
  },
  cardContainer: {},
  buttonsContainer: {
    flexDirection: 'row',
    margin: 2,
  },
  listContent: {
    flexGrow: 1, // ensures FlatList expands properly
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 20,
  },
})
