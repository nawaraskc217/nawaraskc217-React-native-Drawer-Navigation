// App.js
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutScreen from './components/NavigationApp/AboutScreens';
import HomeScreens from './components/NavigationApp/HomeScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={HomeScreens}
          options={{
            title: 'Welcome Home ', // Custom title for the header
            headerStyle: {
              backgroundColor: 'tomato', // Customize the header color
            },
            headerTintColor: '#fff', // Header title color
            headerTitleStyle: {
              fontWeight: 'bold', // Make the header title bold
            },
            headerRight: () => (
              <Pressable onPress={() => { alert('Menu Button Pressed') }}>
                <Text style={{
                  color: 'blue', fontSize: 16, fontWeight: 'bold'
                }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: 'yellow'
            }
          }}
        />
        <Stack.Screen
          initialParams={{
            name: 'GUEST', // Default value to pass to another page
          }}
          name="About"
          component={AboutScreen}
          options={({ route }) => ({

            // title: `Dynamic title | ${route.params.name}`, // Custom title for the About screen header
            // title: 'About Screen', // Custom title for the About screen header
            headerStyle: {
              backgroundColor: 'purple', // Customize the About screen header color
            },
            headerTintColor: '#fff', // Header title color
            headerTitleStyle: {
              fontWeight: 'bold', // Make the About screen header title bold
            },
          })}
        />

      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
});
