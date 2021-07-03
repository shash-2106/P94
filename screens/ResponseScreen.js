import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import { ListItem } from 'react-native-elements';

export default class ResponseScreen extends React.Component{
     
    constructor(){
        super();
        this.state={
            askerId:firebase.auth().currentUser.email,
            askerName:'',
            allAnswers:[]
        }
    }
    getAskerDetails=(askerId)=>{
     //   alert(this.state.askerId)
        db.collection("users").where("email_id","==",askerId).get().then((snapshot)=>{snapshot.forEach((doc)=>{this.setState({
            askerName:doc.data().first_Name + " " + doc.data().last_Name
        })})})
    }
    getAllAnswers=()=>{
        
        db.collection("answers").where("askerId","==",this.state.askerId).onSnapshot((snapshot)=>{var all_answers=[]
        snapshot.docs.map((doc)=>{
            var answer = doc.data()
          answer["doc_id"] = doc.id
            all_answers.push(answer)
        })
    this.setState({
        allAnswers:all_answers
    })})
    alert(this.state.allAnswers.length)
    }
    componentDidMount(){
        this.getAskerDetails(this.state.askerId)
        this.getAllAnswers()
    }
    
 


    keyExtractor = (item, index) => index.toString()

    renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.answer}
            subtitle={item.question}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
           
           
            bottomDivider
          />
        )
      }
    render(){
        return(
         
            <View style={{flex:1}}>
          
            <Text>{this.state.allAnswers.length}</Text>
            <View style={{flex:1}}>
              {
                this.state.allAnswers.length === 0
                ?(
                  <View>
                    <Text style={{ fontSize: 20}}>List Of All Answers</Text>
                  </View>
                )
                :(
                  <FlatList
                  keyExtractor={this.keyExtractor}
                  data={this.state.allAnswers}
                  renderItem={this.renderItem}
                />
                )
              }
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