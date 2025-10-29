import { TextInput, Text, View, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/Game/Title'
import Card from '../components/ui/Card'

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function confirmInputHandler() {
    console.log(enteredNumber)
    const chosenNumber = parseInt(enteredNumber)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ])
      console.log(enteredNumber)
      return
    }

    onPickNumber(chosenNumber)
  }

  function resetInputHandler() {
    setEnteredNumber('')
    console.log(enteredNumber)
  }

  return (
    <View>
      <View style={styles.titleContainer}>
        <Title>Guess My Number</Title>
      </View>
      <View style={styles.inputContainer}>
        <Card>
          <Text style={styles.boxtitleText}>Enter a Number</Text>

          <TextInput
            style={styles.textInputStyle}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            onChangeText={numberInputHandler}
            autoCorrect={false}
            value={enteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <PrimaryButton text={'Reset'} onPress={resetInputHandler} />
            <PrimaryButton text={'confirm'} onPress={confirmInputHandler} />
          </View>
        </Card>
      </View>
    </View>
  )
}

export default StartGameScreen
const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  boxtitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500, // or '#ddb52f' if you prefer inline
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  titleContainer: {
    marginTop: 140,
    alignItems: 'center',
  },

  textInputStyle: {
    height: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontSize: 24,
    marginVertical: 8,
    fontWeight: 'bold',
    width: 50,
  },
  buttonContainer: {},
})
