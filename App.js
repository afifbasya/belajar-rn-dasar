import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Checkbox from 'expo-checkbox';

const minats = [
  {
    id: 1,
    label: "Sepak Bola"
  },
  {
    id: 2,
    label: "Musik"
  },
  {
    id: 3,
    label: "Teater"
  },
  {
    id: 4,
    label: "Menari"
  }
]


export default function App() {
  const [dataMinat, setMinat] = useState([]);

  const handleSubmit = () => {
    console.log("Haloo : ", dataMinat);
  }

  const handleCheck = (minat, check) => {

    if (check.length > 0) {

      //hapus data
      const newData = dataMinat.filter((filter) => filter.id !== minat.id)

      setMinat(newData)


    } else {
      // tambah data 
      setMinat([
        ...dataMinat,
        minat
      ])
    }


  }

  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text>Minat dan Bakat : </Text>
        {minats.map((minat) => {

          const check = dataMinat.filter((filter) => filter.id == minat.id)

          return (
            <View key={minat.id} style={styles.checkbox}>
              <Checkbox
                value={check.length > 0 ? true : false} onValueChange={() => handleCheck(minat, check)}
              />
              <Text>{minat.label}</Text>
            </View>
          )
        })}
      </View>

      <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#FFF',
    flex: 1
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'blue',
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5
  },
  wrapper: {
    marginTop: 10,
    marginHorizontal: 30
  },
  checkbox: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 10
  }
})