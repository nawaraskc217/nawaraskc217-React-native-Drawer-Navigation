// components/NavigationApp/AboutScreens.js

import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutScreens = ({ route }) => {
  const { name } = route.params; // it is used to get value from HomeScreens
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name ///this will set to the title of AboutScreen
    })
  }, [navigation, name]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>About Screen</Text>
      <Text>Name passed from Home Screen: {name}</Text>
      

      {/* 
        <Button title='Goto Home' onPress={() => { navigation.navigate("Home") }} 
        // Stack.Screen name="Home" so it is going to the home screen
      */}

      {/* Update value using setParams */}
      <Button
        title="Update the value"
        onPress={() => {
          navigation.setParams({
            name: "Pantera"
          })
        }}
      />

      {/* Pass data back to Home screen */}
      <Button
        title="Go to Home Screen"
        onPress={() => {
          navigation.navigate('Home', { comingFromAboutScreen: 'Data from AboutScreen to home' })
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightyellow', // Custom background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'tomato', // Custom title color
    marginBottom: 20,    // Spacing between title and other content
  },
});

export default AboutScreens;
