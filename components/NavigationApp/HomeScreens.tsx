// components/NavigationApp/HomeScreens.js

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreens = ({ route }) => {
  // This is a type of hook
  const navigation = useNavigation()

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Home Screen</Text>
      <Text>Welcome to the Home Screen</Text>

      {/* If route params contain 'results', display them    route.params?.results safely checks if route.params exists and then tries to access results. If params exists and contains results, the value will be displayed. If params is not passed or is undefined, the value will simply not be rendered, and no error will occur. */}
      <Text>{route.params?.comingFromAboutScreen}</Text>

      <Button
        title="Go to About"
        onPress={() => {
          // Navigating to the About screen and passing parameters
          navigation.navigate("About", {
            name: "Nawaras kc is coming from HomeScreen"
          });
        }}
      />

      {/* Stack.Screen name="About" so it is going to the About screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'lightgreen', // Custom background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkgreen', // Custom title color
    marginBottom: 20,    // Spacing between title and other content
  },
});

export default HomeScreens;
