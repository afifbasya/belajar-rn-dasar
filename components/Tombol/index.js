import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Tombol({ handleSubmit, title }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={{ color: 'white' }}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        padding: 10,
        width: 100,
        alignItems: 'center',
        borderRadius: 10,
        margin: 20
    }
})