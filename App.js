import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group';

const genders = [
  {
    id: "Laki-Laki",
    label: "Laki-Laki",
    value: "Laki-Laki"
  },
  {
    id: "Perempuan",
    label: "Perempuan",
    value: "Perempuan"
  }
]


export default function App() {
  const [jenisKelamin, setJenisKelamin] = useState(false);


  const handleSubmit = () => {
    console.log("Haloo : ", jenisKelamin);
  }

  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text>Pilih Jenis Kelamin</Text>
        <RadioGroup
          radioButtons={genders}
          onPress={(item) => setJenisKelamin(item)}
          selectedId={jenisKelamin}
          containerStyle={{ alignItems: 'flex-start', marginTop: 5 }}
          layout='row'
        />
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
})