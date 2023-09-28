import { StyleSheet, View, Text } from 'react-native';
import Tombol from './components/Tombol';
import { useState } from 'react';

//Variabel dari javascript (let, const, var)
//Variabel dari react (state, props)
//state = bisa diubah
//props = tidak bisa diubah dan bisa jadi berasal dari state

export default function App() {
  const [nama, setNama] = useState("Afif")

  // const handleSubmit = () => {
  //   setNama("Rudi")
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{nama}</Text>
      <Tombol title={nama} handleSubmit={() => setNama("Rudi")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  text: {
    margin: 20,
    fontSize: 20
  }
});

