import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [refresh, setRefresh] = useState(false);
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

  const renderItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.makanan}>
        <Text>{item.nama}</Text>
        <Text>Rp. {item.harga}</Text>
      </View>
    )
  }

  const HeaderMakanan = () => {
    return (
      <View style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Text>List Makanan</Text>
      </View>
    )
  }

  const FooterMakanan = () => {
    return (
      <TouchableOpacity style={{ marginHorizontal: 30, marginVertical: 10 }}>
        <Text>Load More</Text>
      </TouchableOpacity>
    )
  }

  const DataKosong = () => {
    return (
      <View style={styles.makanan}>
        <Text>Data Kosong</Text>
      </View>
    )
  }

  const Separator = () => {
    return (
      <View style={{ marginTop: 30 }} />
    )
  }

  const handleRefresh = () => {
    setRefresh(true)

    //Simulasi Ambil API
    setTimeout(() => {
      setRefresh(false)
    }, 2000)

  }

  return (
    <View style={styles.container}>
      {/* 1. Mapp */}
      {/* {makanans.map((makanan, index) => {
        return (
          <View key={index} style={styles.makanan}>
            <Text>{makanan.nama}</Text>
            <Text>Rp. {makanan.harga}</Text>
          </View>
        )
      })} */}

      {/* <View style={{ height: 200 }}> */}
      <FlatList
        data={makanans}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={HeaderMakanan}
        ListFooterComponent={FooterMakanan}
        ListEmptyComponent={DataKosong}
        ItemSeparatorComponent={Separator}
        onRefresh={() => handleRefresh()}
        refreshing={refresh}
      // showsVerticalScrollIndicator={false}
      />
      {/* </View> */}

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
    borderWidth: 1,
    padding: 10
  }
});

