import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';


export class Setting extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting Screen</Text>
        </View>
      );
    }
  }