import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function App() {
  const [users, setUser] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getUser = async () => {

      // fetch
      // fetch('https://jsonplaceholder.typicode.com/users')
      //   .then(response => response.json())
      //   .then(json => setUser(json))
      //   .catch(err => {
      //     setError(err.message)
      //   })

      //axios
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        setUser(response.data)

      } catch (err) {
        setError(err.message)
      }
    }

    getUser();

  }, [])

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      {error && <Text>{error}</Text>}

      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#FFF',
    flex: 1
  },
  item: {
    marginBottom: 10,
    marginHorizontal: 30,
    padding: 10,
    borderWidth: 1
  }
})