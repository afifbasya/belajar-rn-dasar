import { StyleSheet, View, Text } from 'react-native';
import Tombol from './components/Tombol';
import { useState } from 'react';

export default function App() {
  const [tampil, setTampil] = useState(false);

  //1. If else
  // if (tampil) {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.text}>Tampil</Text>
  //     </View>
  //   );
  // }

  // 2. If else pakai ternary operator

  return (
    <View style={styles.container}>
      {tampil ? <Text style={styles.text}>Tampil</Text> : <Text style={styles.text}>Tidak Tampil</Text>}

      {/* {tampil && <Text style={styles.text}>Tampil</Text>} */}


      <Tombol title="Ganti" handleSubmit={() => setTampil(!tampil)} />
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

