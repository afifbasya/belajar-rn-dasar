import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import { styles } from './styles'

//1. Functional Component
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Muhammad Afifuddin</Text>
    </View>
  );
}

//2. Arrow Function Component
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Muhammad Afif</Text>
//     </View>
//   )
// }
// export default App

//3. Class Component
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Muhammad Afifuddin</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// di CSS 
// background-color: #fff; 
