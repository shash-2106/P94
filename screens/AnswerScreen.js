import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class AnswerScreen extends React.Component{
    constructor(props){
        super(props);
      this.state={
        userId:firebase.auth().currentUser.email,
        question:this.props.navigation.getParam("details")["question"],
        askerId:this.props.navigation.getParam("details")["userId"],
        requestId:this.props.navigation.getParam("details")["requestId"],
        answer:''
      }
      }
      createUniqueId(){
        return Math.random().toString(36).substring(7);
      }
  
    
    
   
    addAnswer=()=>{
      alert(this.state.askerId)
      var userId = this.state.userId;
      db.collection("answers").add({
       "answer":this.state.answer,
       "question":this.state.question,
       "askerId":this.state.askerId,
       "requestId":this.state.requestId,
       "answererId":userId

      })
      this.setState({
        answer:''
    })
      }

      addNotifications=()=>{
        var message = "You have a notification!";
        db.collection("all_notifications").add({
            "targeted_user_id":this.state.askerId,
            "answerer_id":this.state.userId,
            "request_id":this.state.requestId,
            "date":firebase.firestore.FieldValue.serverTimestamp(),
            "notification_status":"unread",
            "message":message
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
           
           
            <TouchableOpacity onPress={()=>{this.addAnswer()
            this.addNotifications()}}>
              <Text>Answer</Text>
            </TouchableOpacity>
            </View>
            
      
      </View>
  
      )
    
        
        
    }
}
const styles = StyleSheet.create({
  textBox:{
      width:250,
      height:55,
      backgroundColor:'#ffeb3b',
      borderWidth:3,
      borderColor:'#1C9ed4',
      alignContent:'center',
      justifyContent:'center',
      padding:-5,
      borderRadius:30,
      margin:10,
      alignSelf:'center'
  },
  signUp:{
      width:150,
      height:40,
      backgroundColor:'#e045a5',
      alignContent:'center',
      justifyContent:'center',
      padding:5,
      borderRadius:25,
      marginTop:-30,
      alignSelf:'center',
      borderWidth:3,
      borderColor:'black'
  },
  login:{
      width:150,
      height:40,
      backgroundColor:'#e045a5',
      alignContent:'center',
      justifyContent:'center',
      padding:5,
      borderRadius:25,
      margin:10,
      alignSelf:'center',
      borderWidth:3,
      borderColor:'black'
  },
  text:{
      color:'white',
   
      alignSelf:'center'
  }
})