import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import AnswerScreen from '../screens/AnswerScreen';
import RespondScreen from '../screens/RespondScreen'
export const AppStackNavigator = createStackNavigator({
Respond:{screen:RespondScreen,navigationOptions:{headerShown:false}},
Answer:{screen:AnswerScreen,navigationOptions:{headerShown:false}}},
{initialRouteName:'Respond'})