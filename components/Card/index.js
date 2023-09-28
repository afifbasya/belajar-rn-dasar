import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tombol from '../Tombol'

//Lifecycle React
//1. Hooks
//2. Class Component

// Konsep Lifecycle 
// 1. Ketika Component dipasang (Mounting)
// 2. Ketika Ada Perubahan State (Did Update)
// 3. Ketika Component itu dicopot (Unmount)

export default function Card() {
    const [tampil, setTampil] = useState(false);

    // 1. Ketika Component dipasang (Mounting)
    useEffect(() => {
        console.log("Component Dipasang");
    }, [])

    //2. Ketika Ada Perubahan State (Did Update)
    useEffect(() => {
        if (tampil) {
            console.log("Component Did Update");
        }
    }, [tampil])

    // 3. Ketika Component itu dicopot (Unmount) 
    useEffect(() => {

        return () => {
            console.log("Component Unmount");
        }

    }, [])

    return (
        <View>
            <Text>Card : {tampil ? "Tampil" : "Tidak Tampil"}</Text>
            <Tombol title="Ganti Nama" handleSubmit={() => setTampil(!tampil)} />
        </View>
    )
}

const styles = StyleSheet.create({})