import React, {Component} from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import SignUpScreen from './screens/SignUp'
import LogInScreen from './screens/LogIn'
import HomeScreen from './screens/Home'

class App extends Component{
  componentDidMount(){
    firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    });
  }
  render(){
    return(
        <AppContainer />
      )
  }
}

const AppStackNavigator = createStackNavigator({
    Login: LogInScreen,
    SignUp: SignUpScreen,
    Home: HomeScreen
})

const AppContainer = createAppContainer(AppStackNavigator);

export default App;
