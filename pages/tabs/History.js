import React from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import {Text} from 'native-base';


export class History extends React.Component {
    render() {
      return (
        
        <View style={{ flex: 1}}>
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
                                    source={require("../../assets/history.jpg")}
                                    style={{
                                        width: 400,
                                        height: 600,
                                       
                                    }}
                                />
          
          </View>
        </View>
      );
    }
  }