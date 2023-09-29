import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

const pendidikans = [
  {
    id: 1,
    label: "SD"
  },
  {
    id: 2,
    label: "SMP"
  },
  {
    id: 3,
    label: "SMA"
  },
  {
    id: 4,
    label: "S1"
  },
  {
    id: 5,
    label: "S2"
  },
]

export default function App() {
  const [pendTerakhir, setPendidikan] = useState(false);
  const [guru, setGuru] = useState(false);
  const [dataGuru, setDataGuru] = useState([]);

  useEffect(() => {

    const getGuru = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        setDataGuru(response.data)

      } catch (error) {
        console.error(error);
      }
    }

    getGuru();

  }, [])


  const handleSubmit = () => {
    const params = {
      pendTerakhir,
      guru
    }

    console.log("Params : ", params);
  }

  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text>Pendidikan Terakhir : </Text>
        <Dropdown
          style={styles.dropdown}
          data={pendidikans}
          search
          labelField="label"
          valueField="label"
          placeholder='Pilih Pendidikan'
          searchPlaceholder="Cari"
          onChange={item => {
            setPendidikan(item.label)
          }}
          value={pendTerakhir}
        />
      </View>

      <View style={styles.wrapper}>
        <Text>Guru : </Text>
        <Dropdown
          style={styles.dropdown}
          data={dataGuru}
          search
          labelField="name"
          valueField="name"
          placeholder='Pilih Guru'
          searchPlaceholder="Cari"
          onChange={item => {
            setGuru(item.name)
          }}
          value={guru}
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
  dropdown: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    borderRadius: 5
  }
})