import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLogin from './screens/SignupLoginScreen';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {AppDrawerNavigator} from './Components/DrawerNavigator';
export default class App extends React.Component {
  render(){
  return (
   <AppContainer/>
  );
}
}
const switchNavigator  = createSwitchNavigator
({SignUp:{screen:SignupLogin},Drawer:{screen:AppDrawerNavigator} });
const AppContainer = createAppContainer(switchNavigator);
