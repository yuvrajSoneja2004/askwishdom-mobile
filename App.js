import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Register from './screens/Register';
import * as Font from  'expo-font';
import { useEffect } from 'react';


// Create a stack navigator
const Stack = createStackNavigator();



export default function App() {
  useEffect(() => {
   
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins': require("./assets/Poppins-Regular.ttf")
      })
    }
    loadFonts();
    } , [])

  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins'
  },
});
