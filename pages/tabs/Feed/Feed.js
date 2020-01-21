import React from 'react';
import { View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';


export class Feed extends React.Component {
    render() {
      return (
        
        <View style={{ flex: 1}}>
        {/* <View style={{justifyContent:'center', alignItems:'center'}}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="blue"
          />
        </View> */}
        
          <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed Screen</Text>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('FeedDetails')}>
            <Text>Go to Feed Detail</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    }
  }