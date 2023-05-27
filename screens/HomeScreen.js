import { View, Text , StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'

export default function HomeScreen({navigation}) {
    useEffect(() => {
            navigation.navigate("Register");
    })
  return (
    <View>    
        <Button title='Click'></Button>
    </View>
  )
}

const style = StyleSheet.create({

})