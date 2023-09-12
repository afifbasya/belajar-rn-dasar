import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* fontSize  */}
      <View>
        <Text style={{ fontSize: 10 }}>Muhammad Afifuddin</Text>
        <Text style={{ fontSize: 15 }}>Muhammad Afifuddin</Text>
        <Text style={{ fontSize: 20 }}>Muhammad Afifuddin</Text>
      </View>

      {/* fontWeight  */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: '100' }}>Muhammad Afifuddin</Text>
        <Text style={{ fontSize: 20, fontWeight: '200' }}>Muhammad Afifuddin</Text>
        <Text style={{ fontSize: 20, fontWeight: 'normal' }}>Muhammad Afifuddin</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Muhammad Afifuddin</Text>
      </View>

      {/* fontStyle  */}
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>Muhammad Afifuddin</Text>
        <Text style={{ fontSize: 20 }}>Muhammad Afifuddin</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 30
  },
});

