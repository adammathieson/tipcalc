import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Hello from './Hello'

export default function App() {
  const [inputValue, setInputValue] = useState('')

  let tip = 0.00
  if(inputValue) {
    tip = parseFloat(inputValue) * .2
    tip = (Math.round(tip * 100) /100).toFixed(2)
  }

  return (
    <View style={styles.container}>
      <Text>${tip}</Text>
      <TextInput
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        style={styles.input}
        keyboardType='numeric'
        placeholder='0.00'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderBottomWidth: 1,
    padding: 5,
  }
});

