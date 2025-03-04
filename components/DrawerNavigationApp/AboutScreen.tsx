// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const AboutScreen = ({ route, navigation }) => {

//   const { age } = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>About Nawaras Kc</Text>
//       <Text>The passed age is: {age}</Text>

//       <Button
//         title="Go to Home"
//         onPress={() => {
//           // Navigate to About screen and pass the age as a parameter
//           navigation.navigate('Home', { age: age });
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
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#555',
//   },
//   footer: {
//     marginTop: 20,
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default AboutScreen;


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.textStyle} >AboutScreen</Text>
        </View>
  )
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'tomato',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  textStyle: {
    // marginTop: 8,
    color:'black',
    fontSize: 25,
    fontWeight: '400',
  },
})