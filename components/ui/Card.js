import { View, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function Card({ children, style }) {
  return <View style={[styles.inputContainer, style]}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
    padding: 14,
    marginHorizontal: 10,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
})
