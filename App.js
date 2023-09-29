import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

export default function App() {
  const [tanggal, setTanggal] = useState(new Date());
  const [show, setShow] = useState(false)

  const handleSubmit = () => {
    console.log("Haloo : ");
  }

  const handleTanggal = (event, value) => {
    setTanggal(value);
    setShow(false)
  }


  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text>Tanggal : </Text>

        <View style={styles.date}>
          <Text>{moment(tanggal).format('DD-MM-YYYY')}</Text>

          <TouchableOpacity onPress={() => setShow(true)}>
            <Text>Pilih</Text>
          </TouchableOpacity>
        </View>


        {show && (
          <DateTimePicker
            mode="date"
            value={tanggal}
            onChange={handleTanggal}
          />
        )}
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
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
    borderRadius: 5
  }
})