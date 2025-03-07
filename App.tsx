import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/DrawerNavigationApp/HomeScreen';
import AboutScreen from './components/DrawerNavigationApp/AboutScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator
        screenOptions={{ drawerPosition: 'left' }} // Set drawer on the right
      >
        <Drawer.Screen name="Home" component={HomeScreen}
          options={{
            title: 'My Home',
            drawerLabel: 'Home label',
            drawerActiveBackgroundColor: 'pink', drawerActiveTintColor: 'red',
            drawerContentStyle:{
              backgroundColor:'#d92597'
            }
          }} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>


  );


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
