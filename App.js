import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={{ color: 'white' }}>Header</Text>
        <View style={styles.card} />
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
  header: {
    backgroundColor: 'red',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    position: 'absolute',
    // right: 0,
    // top: 0,
    // left: 0,
    bottom: 0,
  }
});

