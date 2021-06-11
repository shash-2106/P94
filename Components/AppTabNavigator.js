import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AskScreen from '../screens/AskScreen';
import ResponseScreen from '../screens/ResponseScreen';

export const AppTabNavigator = createBottomTabNavigator({
    AskScreen : {screen:AskScreen},
    ResponseScreen : {screen:ResponseScreen}
})