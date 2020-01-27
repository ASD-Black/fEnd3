import React from 'react';
import { View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import {Text} from 'native-base';


export class Pay extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView style={{ flex:1}} behavior="padding">
        <View style={styles.container}>
        <Text style={styles.logoStyle}>Add Your Card Delails</Text>
        <TextInput style={{width: 200,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginBottom:20,
      marginLeft:40}} 
            placeholder="Credit Ammount (Rs)"
            placeholderTextColor="#ffffff"
            />
          <TextInput style={styles.inpuBox} 
            placeholder="Name on Card"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={styles.inpuBox} 
            placeholder="Card Number"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={{width: 200,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginTop:20,
      marginLeft:40}} 
            placeholder="Expire Month"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={{width: 200,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginTop:8,
      marginLeft:40}} 
            placeholder="Expire Year"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={{width: 200,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginTop:20,
      //marginBottom:10,
      marginLeft:40}} 
            placeholder="CVC"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#ffffff',
      flexGrow: 1,
      //alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyle: {
      //justifyContent:'center',
      marginTop:-70,
      marginLeft:80,
      fontWeight:"900",
      marginBottom:60,
      fontSize: 30,
      color: 'rgba(33, 33, 33,0.3)'
    },
    inpuBox: {
      width: 350,
      height:50,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#212121",
      marginVertical:4,
      marginLeft:40
    },
    buttonText: {
        fontSize:18,
        fontWeight:'500',
        color: '#212121',
        textAlign: 'center',
        
    },
    button: {
      width: 150,
      backgroundColor: 'rgba(33, 33, 33,0.3)',
      height:50,
      //borderRadius: 25,
      paddingVertical: 12,
      //marginVertical:10,
      marginTop:40,
      marginLeft:250,
      marginBottom:-100
    }
    });