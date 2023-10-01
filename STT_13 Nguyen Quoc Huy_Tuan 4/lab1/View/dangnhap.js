import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
//import { LinearGradient } from 'expo-linear-gradient';

import React from 'react';

const Login = () => {
    return (
  
        <View style={styles.container}>
  
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
      <FontAwesome name="user-secret" size={24} color="black" />
        <TextInput placeholder='Name' style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="black" />
        <TextInput placeholder='Password' style={styles.input} />
        <View style={styles.eyeIconContainer}>
        <Ionicons name="eye" size={24} color="black" />
    </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </View>
</View>
<View style={styles.Container}>
        <TouchableOpacity onPress={() => { handleForgotPasswordPress(); }}>
    <Text style={styles.createAccountButtonText}>Forgot your password?</Text>
</TouchableOpacity>


      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#FF8C00',
    
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 30,
      color: '#333',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: '#FFD700',
      width: 330,
      height: 60,
  
      marginBottom: 20,
      paddingLeft: 10,
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: 270,
      color: '#333',
    },
    buttonContainer: {
      width: 330,
    },
    loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333',
      height: 60,

      marginBottom: 20,
    },
    loginButtonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 24,
    },
   
    eyeIconContainer: {
        position: 'absolute',
        right: 30, 
        top: '50%', 
        transform: [{ translateY: -12 }] 
    },
  
    createAccountButton: {
        alignItems: 'center',       
        justifyContent: 'center',   
        height: 60,
        borderRadius: 10,
        backgroundColor: 'transparent',
    },
    createAccountButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
    },
    
 //   const handleForgotPasswordPress = () => {
      
   // },
    
    
  });
export default Login