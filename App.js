import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Hello from './Hello'

export default function App() {
  const [inputValue, setInputValue] = useState('Hi')

  return (
    <View style={styles.container}>
      <Text>{inputValue}</Text>
      <TextInput
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        style={styles.input}
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

