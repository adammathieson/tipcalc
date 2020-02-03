import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Hello from './Hello'

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
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

