import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Hello() {
    return (
        <View>
            <Text style={styles.hello}>Hello ios</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    hello: {
        backgroundColor: '#FFFF00',
        fontSize: 24,
    }
})


