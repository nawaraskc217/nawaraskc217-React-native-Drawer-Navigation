

# Install this, this is imp

```sh
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated react-native-screens

# if needed run this to execute the project
npx react-native start --reset-cache

```


# IMP note 

## this will work

```sh

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

    
  );


}


```



## this wont work bcoz  NavigationContainer cannot be added in the <View> or any component 
```sh


export default function App() {
  return (
<View>
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
</View>
    
  );


}

```


##############################################################################

#   DrawerNavigationApp  
```sh
npx react-native run-android

```


#  1 react nativation native install
```sh
# react nativation native install
npm install @react-navigation/native

```


# 2 react-native-gesture-handler react-native-reanimated
 
```sh
npm install react-native-gesture-handler react-native-reanimated




```

# 3 Drawer navigation

```sh 


npm install @react-navigation/drawer

```



# Visit this website
<a href="https://reactnavigation.org/docs/drawer-navigator#installation"  target="_blank"> Goto this website </a>



## if project is not running then follow this
```sh
# If error create project on disk:
C:\

```