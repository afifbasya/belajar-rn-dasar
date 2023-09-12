import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Margin dan Padding  */}
      <View style={styles.card}>
        <View style={styles.content}>
          <Text>Hello World</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: 'red',
    padding: 30,
    margin: 30
  },
  content: {
    backgroundColor: 'yellow'
  }
});

