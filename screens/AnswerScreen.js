import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class AskScreen extends React.Component{
    constructor(props){
        super(props);
      this.state={
        userId:firebase.auth().currentUser.email,
        askerId:this.props.navigation.getParam("details")["question"],
        requestId:this.props.navigation.getParam("details")["requestId"],
        answer:''
      }
      }
      createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
  
    
    
   
    addAnswer=()=>{
      var userId = this.state.userId;
      db.collection("answers").add({
       "answer":this.state.answer,
       "question":this.state.question,
       "askerId":this.state.askerId,
       "requestId":this.state.requestId,

      })
      this.setState({
        answer:''
    })
      }

     
    render(){
    
  
      return(
        <View style={{flex:1}}>
            <Text>Answer</Text>
            <View>
            <TextInput
             
              placeholder={"enter answer"}
                   onChangeText={(text)=>{
                       this.setState({
                           answer:text
                       })
                   }}      
             
            />
           
           
            <TouchableOpacity onPress={()=>{this.addAnswer()}}>
              <Text>Answer</Text>
            </TouchableOpacity>
            </View>
            
      
      </View>
  
      )
    
        
        
    }
}