// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

// const HomeScreen = ({ navigation }) => {

//   const [age, setAge] = useState('');
//   const [resultAge, setResultAge] = useState('');


//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Home Nawaras Kc </Text>
//       <Text>The updated age is: {resultAge}</Text>
//       <TextInput style={{ backgroundColor: 'red', height: 50, width: 200 }}
//         placeholder="enter your age here"
//         value={age}
//         onChangeText={(value) => setAge(value)}

//       />

//       <Button
//         title="Update age"
//         onPress={() => {
//           setResultAge(age);
//           setAge('')
//         }}

//       />
//       <Button
//         title="Go to About"
//         onPress={() => {
//           // Navigate to About screen and pass the age as a parameter
//           navigation.navigate('About', { age: resultAge });
//         }}
//       />


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default HomeScreen;

import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle} >HomeScreen</Text>
      <Button title='Toggle drawer' onPress={() => {
        navigation.toggleDrawer();
        // this will open toggleDrawer from left
      }} />

<Button title='AboutScreen' onPress={() => {
        navigation.jumpTo('About');
        // this will open AboutScreens
      }} />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    // marginTop: 8,
    color: 'purple',
    fontSize: 25,
    fontWeight: '400',
  },
})