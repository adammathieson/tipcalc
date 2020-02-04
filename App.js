import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Hello from './Hello'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [tipPercent, setTipPercent] = useState('')

  const updateCustomTip = customTip => {
    if (customTip) {
      setTipPercent(parseFloat(customTip) / 100)
    } else {
      setTipPercent(0)
    }
  }

  let tip = 0.00
  if (inputValue) {
    tip = parseFloat(inputValue) * tipPercent
    tip = (Math.round(tip * 100) / 100).toFixed(2)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <Button
          title='10%'
          onPress={() => setTipPercent(.1)}
        />
        <Button 
          title='15%'
          onPress={() => setTipPercent(.15)}
        />
        <Button 
          title="20%"
          onPress={() => setTipPercent(.2)}
        />
        <TextInput
          value={(tipPercent * 100).toString()}
          style={styles.customTip}
          placeholder='0.00'
          keyboardType='numeric'
          onChangeText={customTip => updateCustomTip(customTip)}
        />
      </View>
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
  },
  buttonGroup: {
    flexDirection: 'row',
    padding: 10,
  },
  customTip: {
    height: 30,
    width: 60,
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  }
});

