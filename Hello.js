import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Hello() {
    return (
        <View>
            <Text style={styles.hello} >Hello from Hello.js</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: '#00FF00',
        fontSize: 24,
    }
})


