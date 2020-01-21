import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';

export class Search extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        
          <Text>Search Screen</Text>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('SearchDetails')}>
            <Text>Go to Search Detail</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }