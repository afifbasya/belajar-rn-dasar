import { StyleSheet, View } from 'react-native';
import Tombol from './components/Tombol';

export default function App() {


  const handleSubmit = () => {
    console.log("Halooo");
  }

  return (
    <View style={styles.container}>

      <Tombol handleSubmit={handleSubmit} title="Submit 1" />

      <Tombol handleSubmit={handleSubmit} title="Submit 2" />

      <Tombol handleSubmit={handleSubmit} title="Submit 3" />

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

