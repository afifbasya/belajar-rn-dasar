import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Text>Border</Text>
      </View>

      <View style={styles.garis} />

      {/* border width 
      border color 
      border style 
      border radius */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  card: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  garis: {
    borderWidth: 1,
    marginTop: 10
  }
});

