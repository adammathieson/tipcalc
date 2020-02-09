import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { Container, Content } from 'native-base'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import Hello from './Hello'
import Head from './ui/Head'
import Values from './ui/Values'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [tipPercent, setTipPercent] = useState('')
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Weird hack needed for android simulator https://docs.nativebase.io/docs/GetStarted.html
      async function loadFont() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setIsReady(true)
      }
      loadFont()
}, [])

  const updateCustomTip = customTip => {
    // if (Platform.OS === 'android') {

    // }

    if (customTip) {
      setTipPercent(parseFloat(customTip) / 100)
    } else {
      setTipPercent(0)
    }
  }

  // const alert = () => {
  //   Alert.alert(
  //     'Just saying hi',
  //     'This alert does nothing',
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => console.log('hit ok'),
  //       }, {
  //         text: 'Cancel',
  //         onPress: () => console.log('hit cancel'),
  //         style: 'cancel',
  //       }
  //     ]

  //   )
  // }

  if (!isReady) {
    return <Text>Loading...</Text>
  }

  return (
    <Container>
      <Head />
      <View style={styles.container}>
        <Content style={{ width: '100%' }}>
          {/* <Button 
          title="Alert"
          onPress={alert}
          /> */}
          <View style={styles.inputs}>
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
            <TextInput
              value={inputValue}
              onChangeText={text => setInputValue(text)}
              style={styles.input}
              keyboardType='numeric'
              placeholder='0.00'
              underlineColorAndroid='#FFF'
              placeholderTextColor='#FFF'
            />
          </View>
          <Values tipPercent={tipPercent} bill={inputValue}/>
        </Content>
      </View>
    </Container>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
    color: '#FFF',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: '#FFF',
  }
});

