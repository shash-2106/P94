import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import Animation from '../Components/Animation';
import { render } from 'react-dom';

export default class AskScreen extends React.Component{
    constructor(){
        super();
      this.state={
        userId:firebase.auth().currentUser.email,
        topic:'',
        question:'',
        requestId:''
      }
      }
      createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
  
    
    
   
    addQuestion=()=>{
      var randomRequestId = this.createUniqueId();
      db.collection("questions").add({
        "question":this.state.question,
        "topic":this.state.topic,
        "userId":this.state.userId,
        "requestId":randomRequestId
      })
      this.setState({
        question:'',
        topic:'',
        requestId:randomRequestId
      })
      }

     
    render(){
    
  
      return(
        <View style={{flex:1}}>
            <Text>Ask</Text>
            <View>
            <TextInput
             
              placeholder={"enter question"}
                   onChangeText={(text)=>{
                       this.setState({
                           question:text
                       })
                   }}      
             
            />
           
            <View>
            <TextInput
              style ={{height:300}}
                            numberOfLines ={8}
              placeholder={"topic"}
              onChangeText ={(text)=>{
                  this.setState({
                      topic:text
                  })
              }}
              value ={this.state.topic}
            />
           
            <TouchableOpacity onPress={()=>{this.addQuestion()}}>
              <Text>Ask</Text>
            </TouchableOpacity>
            </View>
            
      </View>
      </View>
  
      )
    
        
        
    }
}