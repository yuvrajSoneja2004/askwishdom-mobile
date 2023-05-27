import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper'
import GoogleIcon from '../assets/googleIcon.png';

// import Video from 'react-native-video';
// import Video from 'react-native-video';



const Register = () => {

  return (
    <ImageBackground style={styles.wholeScreen}
    source={require('../assets/bg.png')}
    >
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Image source={require("../assets/RegMan.gif")} style={styles.regMan}></Image>

      <Text style={styles.slogan}>Ask anything , Anytime you want!</Text>
      <Button icon={{uri: GoogleIcon}} mode="contained" style={styles.btn}>
    Register With Google
  </Button>
      
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
    wholeScreen: {
        flex: 1,
        overlayColor: 'green',
        alignItems: 'center',
        padding: 20,
        
    },
    logo:{
      width:130,
      height:65,
      marginTop: 100
    } ,
    slogan: {
      fontFamily: 'Poppins',
      color: '#ffffff',
      fontSize: 20,
      textAlign: 'center'
    }
    ,
    regMan: {
      width: 300,
      height: 300
    },
    btn: {
      backgroundColor: '#B92B27',
      fontFamily: 'Poppins',
      marginTop: 20
    }

})

export default Register