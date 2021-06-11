import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Animation extends React.Component{
    render(){
        return(
            <LottieView source={require('../assets/57064-computer-with-grid.json')} style={{width:250,height:400, marginBottom:-25, marginTop:-50, marginLeft:20}} autoPlay loop></LottieView>
        )
    }

} 