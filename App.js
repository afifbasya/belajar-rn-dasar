import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function App() {
  const [username, setUsername] = useState("");
  const [nohp, setNoHP] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);

  const handleSubmit = () => {
    const params = {
      username,
      nohp,
      alamat,
      password
    }

    console.log("Params : ", params);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperInput}>
        <Text>Username : </Text>
        <TextInput
          value={username}
          style={styles.input}
          placeholder='Masukkan Username'
          onChangeText={(value) => setUsername(value)}
        />
      </View>

      <View style={styles.wrapperInput}>
        <Text>No. HP : </Text>
        <TextInput
          value={nohp}
          style={styles.input}
          placeholder='Masukkan No. HP'
          onChangeText={(value) => setNoHP(value)}
          inputMode='tel'
        />
      </View>

      <View style={styles.wrapperInput}>
        <Text>Alamat : </Text>
        <TextInput
          value={alamat}
          style={styles.inputMulti}
          placeholder='Masukkan Alamat'
          onChangeText={(value) => setAlamat(value)}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.wrapperInput}>
        <Text>Password : </Text>
        <TextInput
          value={password}
          style={styles.input}
          placeholder='Masukkan Password'
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={hidden}
        />
        <TouchableOpacity style={styles.show} onPress={() => setHidden(!hidden)}>
          <Text>{hidden ? "Show" : "Hide"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#FFF',
    flex: 1
  },
  wrapperInput: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
    borderRadius: 5
  },
  inputMulti: {
    borderWidth: 1,
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 5,
    borderRadius: 5,
    textAlignVertical: 'top'
  },
  show: {
    position: "absolute",
    right: 10,
    top: 35
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: 'blue',
    marginTop: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5
  }
})