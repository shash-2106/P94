
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import {AppTabNavigator} from './AppTabNavigator';

import {Icon} from 'react-native-elements';
import SettingScreen from '../screens/SettingScreen';
import RespondScreen from '../screens/RespondScreen';
import NotificationScreen from '../screens/NotificationScreen'


export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator,navigationOptions:{drawerIcon:<Icon name="home" type={"fontawesome5"}></Icon>}},
Settings:{screen:SettingScreen},
Respond:{screen:RespondScreen},
Notifications:{screen:NotificationScreen}
},

    
    {contentComponent:CustomSideBarMenu},
    {initialRouteName:'Home'

}) 