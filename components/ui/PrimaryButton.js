import { View, Text, Pressable, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const PrimaryButton = ({ text, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={styles.buttonInnerContainer}
        android_ripple={{ color: '#74b124ff' }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Colors.primary900,
    borderRadius: 28,
    margin: 3,
    paddingVertical: 8,
    flex: 1,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary900,
    borderRadius: 28,
    margin: 3,
    paddingVertical: 8,

    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  pressed: {
    opacity: 0.75,
  },
})
