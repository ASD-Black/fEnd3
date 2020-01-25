import React from 'react';
import { View,SafeAreaView, ScrollView} from 'react-native';
import { Text, List, ListItem } from 'native-base';

export class SideManu extends React.Component {
    render(){
      return(
        <SafeAreaView style={{flex: 1}}>
          <View style={{alignText:'center', justifyContent: 'center'}}>
            <Text>Image</Text>
          </View>
          <ScrollView>
            <List>
              <ListItem onPress={()=> this.props.navigation.navigate('Profile')}>
                <Text>Profile</Text>
              </ListItem>
              <ListItem onPress={()=> this.props.navigation.navigate('Setting')}>
                <Text>Setting</Text>
              </ListItem>
              <ListItem onPress={()=> this.props.navigation.navigate('Payments')}>
                <Text>Payments</Text>
              </ListItem>
            </List>
          </ScrollView>
          
          <List>
              <ListItem onPress={()=> this.props.navigation.navigate('auth')}>
                <Text>Logout</Text>
              </ListItem>
            </List>
        </SafeAreaView>
      )
    }
  }