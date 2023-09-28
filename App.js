import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  const [makanans, setMakanan] = useState([
    {
      id: 1,
      nama: "Soto",
      harga: 12000
    },
    {
      id: 2,
      nama: "Bakso",
      harga: 15000
    },
    {
      id: 3,
      nama: "Mie Ayam",
      harga: 10000
    }
  ])

  const jumlahHarga = makanans.reduce((total, item) => total + item.harga, 0)

  return (
    <View style={styles.container}>
      {/* 1. Mapp */}
      {makanans.map((makanan, index) => {
        return (
          <View key={index} style={styles.makanan}>
            <Text>{makanan.nama}</Text>
            <Text>Rp. {makanan.harga}</Text>
          </View>
        )
      })}

      {/* 2. Filter  */}
      {/* {makanans.filter((makananFilter) => makananFilter.harga > 11000).map((makanan, index) => {
        return (
          <View key={index} style={styles.makanan}>
            <Text>{makanan.nama}</Text>
            <Text>Rp. {makanan.harga}</Text>
          </View>
        )
      })} */}

      {/* 3. Reduce  */}
      <View style={{ margin: 30 }}>
        <Text>Jumlah Harga : Rp. {jumlahHarga}</Text>
      </View>

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
  },
  makanan: {
    marginHorizontal: 30,
    marginTop: 30,
    borderWidth: 1,
    padding: 10
  }
});

