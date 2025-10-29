import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'

function NumberComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.NumberText}>{children}</Text>
    </View>
  )
}
export default NumberComponent

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 14,
    marginTop: 26,
    borderWidth: 2,
    borderColor: Colors.accent500,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  NumberText: {
    color: Colors.accent500,
    fontSize: 22,
    textAlign: 'center',
  },
})
