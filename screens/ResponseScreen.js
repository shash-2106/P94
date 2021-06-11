import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';

import Animation from '../Components/Animation';

export default class ResponseScreen extends React.Component{
     
    
    render(){
        return(
            <View>
                <Text>Answers</Text>
            </View>
        )
    }
}