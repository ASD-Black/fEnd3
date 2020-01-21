import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, KeyboardAvoidingView} from 'react-native';
import {Text} from 'native-base';

import Logo from '../../Components/logo'
import SignUpform from '../../Components/SignUpform'

export class Register extends React.Component {
    render() {
      return (
      <KeyboardAvoidingView style={{ flex:1}} behavior="padding">
        <View style={styles.container}>
          <Logo/>
          <SignUpform/>
          <View style={styles.signUpTextCon}>
            <Text style={styles.signUpText}>Already have an account</Text>
            <Text style={styles.signupButton} onPress={()=> this.props.navigation.navigate('Login')}>   Sign in</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    signUpTextCon: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical:20,
      flexDirection:'row'
    },
    signUpText: {
      color:'rgba(255,255,255,0.6)',
      fontSize:17
    },
    signupButton: {
      color:'#ffffff',
      fontSize:17,
      fontWeight:'700'
    }
    });