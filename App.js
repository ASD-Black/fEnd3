import React from 'react';
import { View, TouchableOpacity, Dimensions, SafeAreaView, ScrollView,StatusBar  } from 'react-native';
//import { Button, Text } from 'native-base';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Container, Header, Left, Body, Right, Button, Title, Text, Icon, List, ListItem } from 'native-base';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Login} from './pages/auth/Login'
import { Register} from './pages/auth/Register'

import { Profile} from './pages/drawer/Profile'
import { Setting} from './pages/drawer/Setting'
import CardFormScreen  from './pages/drawer/CardFormScreen'

import { Feed} from './pages/tabs/Feed/Feed'
import { FeedDetails } from './pages/tabs/Feed/FeedDetails'
import { Search } from './pages/tabs/Search/Search'
import { SearchDetails } from './pages/tabs/Search/SearchDetails'

import { SideManu } from './Components/SideManu'


const navOptionHandler = (navigation) => ({
  headerShown: false
})

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: navOptionHandler
  },
  FeedDetails: {
    screen: FeedDetails,
    navigationOptions: navOptionHandler
  }
})

const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: navOptionHandler
  },
  SearchDetails: {
    screen: SearchDetails,
    navigationOptions: navOptionHandler
  }
})

const MainTabs = createBottomTabNavigator({
  Feed: FeedStack,
  Search: SearchStack
});

const MainStack = createStackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  Setting: {
    screen: Setting,
    navigationOptions: navOptionHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionHandler
  },
  CardFormScreen: {
    screen: CardFormScreen,
    navigationOptions: navOptionHandler
  }
}, {initialRouteName: 'Home'})

const appDrawer = createDrawerNavigator(
  {
    drawer: MainStack
  },
  {
    contentComponent: SideManu,
    drawerWidth: Dimensions.get('window').width * 3/4
  }
  )

  const authStack = createSwitchNavigator({
    Login: {
      screen: Login,
      navigationOptions: navOptionHandler
    },
    Register: {
      screen: Register,
      navigationOptions: navOptionHandler
    }
  })

  const MainApp = createSwitchNavigator(
    {
      app: appDrawer,
      auth: authStack
    },
    {
      initialRouteName: 'auth'
    }
  )
const AppNavigator = createAppContainer(MainApp)

export default class App extends React.Component{
  render(){
    return(
      <AppNavigator/>
    )
  }
}