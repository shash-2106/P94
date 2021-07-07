
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import db from '../config';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native';
import MyHeader from '../Components/MyHeader'
import {Header} from 'react-native-elements'

export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            address:'',
            contact:'',
            docId:''
        }
    }
    componentDidMount(){
        this.getUserDetails();
    }
    getUserDetails=()=>{
        var email = firebase.auth().currentUser.email
        db.collection("users").where('email_id',"==",email).get().then((snapshot)=>{snapshot.forEach(doc=>{
            var data = doc.data()
            this.setState({
                email:data.email_id,
                firstName:data.first_Name,
                lastName:data.last_Name,
                contact:data.contact,
                address:data.address,
                docId:doc.id
            })
          })})

    }
    updateUserDetails=()=>{
        db.collection("users").doc(this.state.docId).update({
            "first_Name":this.state.firstName,
            "last_Name":this.state.lastName,
            "address":this.state.address,
            "contact":this.state.contact
        })
        alert("user updated successfully");
    }
    render(){
        return(
            <View style={styles.container}>
               <Header title={"Settings"} style={{backgroundColor:'#e045a5'}}></Header>
                <View style={styles.formContainer}>
           
                <TextInput value={this.state.firstName} style={styles.signUp} maxLength={8} placeholder={"First name"} onChangeText={(text)=>{this.setState({
                    firstName:text
                })}}></TextInput>
                <TextInput value={this.state.lastName} style={styles.signUp}  maxLength={8} placeholder={"Last name"} onChangeText={(text)=>{this.setState({
                    lastName:text
                })}}></TextInput>
                <TextInput value={this.state.contact} style={styles.signUp} keyboardType={'numeric'}  maxLength={10} placeholder={"Contact"} onChangeText={(text)=>{this.setState({
                    contact:text
                })}}></TextInput>
                <TextInput value={this.state.address} style={styles.signUp}  multiline={true} placeholder={"Address"} onChangeText={(text)=>{this.setState({
                    address:text
                })}}></TextInput>
                <TouchableOpacity style={styles.login} onPress={()=>{this.updateUserDetails()}}>
                    <Text style={styles.text}>Save</Text>
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
        marginTop:30,
        alignSelf:'center',
        borderWidth:3,
        borderColor:'black'
    },
   
    text:{
        color:'white',
      
        alignSelf:'center'
    }
})