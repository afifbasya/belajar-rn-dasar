import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Menggunakan URL */}
      {/* <Image source={{ uri: "https://www.presidenri.go.id/assets/uploads/2020/02/presidenri.go.id-05022020111245-5e3a40bd7cdcb1.35250820-384x512.jpg" }} style={{ height: 250, width: 250 }} /> */}



      {/* Simpan gambar di assets kemudian dipanggil */}
      {/* <Image source={require("./assets/jokowi.jpg")} style={{ height: 250, width: 250 }} /> */}

      {/* Resize Mode  */}
      {/* 1. Contain
      2. Center 
      3. Strecth
      4. Repeat 
      5. Cover */}
      <Image
        source={require("./assets/jokowi.jpg")}
        style={{ height: 250, width: 250, backgroundColor: 'green' }}
        resizeMode='cover'
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});

