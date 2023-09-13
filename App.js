import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {


  const handleSubmit = () => {
    console.log("Halooo");
  }

  return (
    <View style={styles.container}>

      {/* <Button title="Submit" color="red" onPress={() => handleSubmit()} /> */}

      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()} >
        <Text style={{ color: 'white' }}>SUBMIT</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
    margin: 20
  }
});

