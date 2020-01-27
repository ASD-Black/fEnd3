import React from 'react';
import { View, TouchableOpacity, StyleSheet, StatusBar, KeyboardAvoidingView, TextInput} from 'react-native';
import {Text} from 'native-base';

import Logo from '../../Components/logo'
import SignUpform from '../../Components/SignUpform'

export class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={
      regno:'',
      nic:'',
      email:'',
      Password:''
    }
  }
    render() {
      return (
      <KeyboardAvoidingView style={{ flex:1}} behavior="padding">
        <View style={styles.container}>
          <Logo/>
          <View>
        <TextInput style={styles.inpuBox}
            onChangeText={(regno) => this.setState({regno})}
            placeholder="Reg No"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={styles.inpuBox}
            onChangeText={(nic) => this.setState({nic})}
            placeholder="NIC"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={styles.inpuBox}
            onChangeText={(email) => this.setState({email})} 
            placeholder="Email"
            placeholderTextColor="#ffffff"
            />
        <TextInput style={styles.inpuBox}
            onChangeText={(Password) => this.setState({Password})} 
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            />
        <TouchableOpacity style={styles.button} onPress={this.SignUp}>
            <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
          <View style={styles.signUpTextCon}>
            <Text style={styles.signUpText}>Already have an account</Text>
            <Text style={styles.signupButton} onPress={()=> this.props.navigation.navigate('Login')}>   Sign in</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
      );
    }
    SignUp = () =>{
////////////////////////////////////////////////////////////////////////////////
      const {regno} =this.state;
      const {nic} =this.state;
      const {email} =this.state;
      const {Password} =this.state;
  
      if(checkOwnerName(name) && chackOwnerAddress(address) && chackContactNo(contactNo) && chackOwnerEmail(email) && validatePassword(pass)){
        
        fetch('http://192.168.8.102:3000/register',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            address: this.state.address,
            contactNo: this.state.contactNo,
            email: this.state.email,
            pass: this.state.pass,
          })
        })
        .then((response) => response.json())
        .then((res) => {
          
          if(res.success === true){
            
            alert(res.succmessage);
          }
          else if(res.success === false){
              alert(res.errmessage);
          }
        })
        .done();
      }
  
  
      //SignUP form validations----------------------------------------------------------------------
  
      //User Name validation-------------------------------------------------------------------------
      function checkOwnerName(name){
        if(name==""){
          alert("You should fill the User Name")
        }
        else if(name.length < 3){
          alert("Invalid User Name.! You should Enter more than 3 letters for User Name")
        }
        else{
            return true;
        }
      }
      
      //Address validation---------------------------------------------------------------------------
      function chackOwnerAddress(address){
        if(address==""){
          alert("You should fill the Address")
        }
        else if(address.length < 3){
          alert("Invalid Address.! You should Enter more than 3 letters for Address")
        }
        else{
            return true;
        }
      }
      
      //contact number validation--------------------------------------------------------------------
      function chackContactNo(contactNo){
        if(contactNo==""){
          alert("You should fill the Contact Number")
        }
        else if(contactNo.length==10){
            if(contactNo.charAt(0)=='0'){
                return true;
            }
            else{
              alert("Invalid Contact Number")
            }
        }
        else{
          alert("Should be 10 Numbers")
        }
      }
  
      //Email validation-----------------------------------------------------------------------------
      function chackOwnerEmail(email) {
        if(email==""){
          alert("You should fill the Email")
          
        }
        else{
            at = email.indexOf('@');
            dot = email.lastIndexOf('.');
            if(at<dot){
                return true;
            }
            else{
              alert("Invalied Email")
                
            }
        }
      }
  
      //Password validation--------------------------------------------------------------------------
      function validatePassword(pass){
        if(pass==""){
          alert("You should fill the Password")
        }
        else{
            return true;
        }
      }
    }
  }

  const styles = StyleSheet.create({
    container : {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inpuBox: {
      width: 350,
      height:50,
      backgroundColor: 'rgba(255,255,255,0.3)',
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 16,
      color: "#ffffff",
      marginVertical:10
    },
    buttonText: {
        fontSize:18,
        fontWeight:'500',
        color: '#ffffff',
        textAlign: 'center',
        
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
    },
    button: {
      marginLeft:100,
      width: 150,
      backgroundColor: '#1c313a',
      height:50,
      borderRadius: 25,
      paddingVertical: 12,
      marginVertical:10
    }
    });