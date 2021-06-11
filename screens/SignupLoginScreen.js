import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import Animation from '../Components/Animation';

export default class SignupLoginScreen extends React.Component{
    constructor(props){
        super();
        this.state = {
            userName:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:'',
            isModalVisible:false
        }
    }
   logIn=(username,password)=>{
      
        firebase.auth().signInWithEmailAndPassword(username,password).then(()=>{
            alert("here");
            this.props.navigation.navigate("AskScreen")
        }

            ).catch((error)=>{
            return alert(error.message);
        });
    }
    signUp=(password,confirmPassword,username)=>{
        if(password!=confirmPassword){
            alert("passwords don't match");
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(username,password).then((response)=>{db.collection("users").add({
                first_Name:this.state.firstName,
                last_Name:this.state.lastName,
                contact:this.state.contact,
                address:this.state.address,
                email_id:this.state.userName,
                })
        return alert("user added successfully"," ", [{text:'ok', onPress:()=>{this.setState({
            isModalVisible:false
        })}}])
        })  
           }
    }
    showModal=()=>{
        return(
            
            <Modal animationType="fade" transparent={true} visible={this.state.isModalVisible}>
                <View>
                    <ScrollView style={{width:'100%'}}>
                        <KeyboardAvoidingView >
                            <Text>Registration</Text>
                            <TextInput style={styles.textBox} placeholder={"First Name"} maxLength={8} onChangeText={(text)=>{this.setState({
                                firstName:text
                            })}}></TextInput>
                            <TextInput style={styles.textBox} placeholder={"Last Name"} maxLength={8} onChangeText={(text)=>{this.setState({
                                lastName:text
                            })}}></TextInput>
                            <TextInput style={styles.textBox} placeholder={"Contact"} maxLength={10} keyboardType={'numeric'} onChangeText={(text)=>{this.setState({
                                contact:text
                            })}}></TextInput>
                            <TextInput style={styles.textBox} placeholder={"Address"} multiline={true} onChangeText={(text)=>{this.setState({
                                address:text
                            })}}></TextInput>
                            <TextInput style={styles.textBox} placeholder={"Email address"} keyboardType={'email-address'} onChangeText={(text)=>{this.setState({
                                userName:text
                            })}}></TextInput>
                            <TextInput style={styles.textBox} placeholder={"Password"} secureTextEntry={true} onChangeText={(text)=>{this.setState({
                                password:text
                            })}}></TextInput>
                            <TextInput style={styles.textBox} placeholder={"Confirm password"} secureTextEntry={true} onChangeText={(text)=>{this.setState({
                               confirmPassword:text
                            })}}></TextInput>
                            <TouchableOpacity style={styles.signUp} onPress={()=>{this.signUp(this.state.password,this.state.confirmPassword,this.state.userName)}}>
                                <Text >Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.login} onPress={()=>{this.setState({
                                isModalVisible:false
                            })}}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
     }
    render(){
        return(
         
            <View style={{backgroundColor:'blue'}}>
             
  {this.showModal()}
            <TextInput
            style={styles.textBox}
            onChangeText={text=>{this.setState({userName:text})}}
            placeholder="Enter email address"
            keyboardType='email-address'
            ></TextInput>
             <TextInput
            style={styles.textBox}
            onChangeText={text=>{this.setState({password:text})}}
            placeholder="Enter password"
            secureTextEntry={true}
            ></TextInput>
           
            <TouchableOpacity style={styles.signUp} onPress={()=>{this.setState({
                isModalVisible:true
            })}}>
                <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={()=>{this.logIn(this.state.userName,this.state.password)}}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
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
            fontSize:RFValue(20),
            alignSelf:'center'
        }
    })