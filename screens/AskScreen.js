import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';

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
             style={styles.textBox}
              placeholder={"enter question"}
                   onChangeText={(text)=>{
                       this.setState({
                           question:text
                       })
                   }}      
             
            />
           
            <View>
            <TextInput
              style ={styles.textBox}
                            numberOfLines ={8}
              placeholder={"topic"}
              onChangeText ={(text)=>{
                  this.setState({
                      topic:text
                  })
              }}
              value ={this.state.topic}
            />
           
            <TouchableOpacity style={styles.login} onPress={()=>{this.addQuestion()}}>
              <Text style={styles.text}>Ask</Text>
            </TouchableOpacity>
            </View>
            
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