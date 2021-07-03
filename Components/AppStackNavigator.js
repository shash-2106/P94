import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import AnswerScreen from '../screens/AnswerScreen';
import RespondScreen from '../screens/RespondScreen'
import ResponseScreen from '../screens/ResponseScreen';
import NotificationScreen from '../screens/NotificationScreen';
export const AppStackNavigator = createStackNavigator({
Respond:{screen:RespondScreen,navigationOptions:{headerShown:false}},
Answer:{screen:AnswerScreen,navigationOptions:{headerShown:false}},
Notifications:{screen:NotificationScreen,navigationOptions:{headerShown:false}},
Response:{screen:ResponseScreen,navigationOptions:{headerShown:false}},},
{initialRouteName:'Respond'})