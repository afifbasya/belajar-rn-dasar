import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>


      {/* 1. Override Style. */}
      <View>
        <View style={[styles.card, { backgroundColor: 'red' }]} />
        <View style={[styles.card, { backgroundColor: 'blue' }]} />
        <View style={[styles.card, { backgroundColor: 'green' }]} />
      </View>

      {/* 2. Use variable. */}
      <View>
        <View style={styles.card2("red")} />
        <View style={styles.card2("blue")} />
        <View style={styles.card2("green")} />
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
  card: {
    height: 100,
    width: 100,
  },
  card2: (color) => ({
    height: 100,
    width: 100,
    backgroundColor: color,
  })
});

