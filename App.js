import { StyleSheet, View, Text } from 'react-native';
import CardComponent from './components/CardComponent';
import { useState } from 'react';
import Tombol from './components/Tombol';

export default function App() {
  const [pasang, setPasang] = useState(true);

  return (
    <View style={styles.container}>
      {pasang && <CardComponent />}

      <Tombol title="Copot Component Card" handleSubmit={() => setPasang(false)} />
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

