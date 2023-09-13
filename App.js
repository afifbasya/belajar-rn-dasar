import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.wrapperKotak}>
        {/* Kotak Merah  */}
        <View style={styles.merah} />
        {/* Kotak Biru  */}
        <View style={styles.biru} />
        {/* Kotak Hijau */}
        <View style={styles.hijau} />
      </View>

      {/* 1. Flex
      2. Flex Direction 
      3. Justify Content 
      4. Align Items */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  merah: {
    backgroundColor: 'red',
    width: 100,
    height: 100
  },
  biru: {
    backgroundColor: 'blue',
    width: 100,
    height: 100
  },
  hijau: {
    backgroundColor: 'green',
    width: 100,
    height: 100
  },
  wrapperKotak: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

