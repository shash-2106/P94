import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'


export default class MyNotificationScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            allNotifications:[]
        }
    }
    getNotifications=()=>{
        db.collection("all_notifications").where("notification_status","==","unread").where("targeted_user_id","==",this.state.userId).onSnapshot((snapshot)=>{
            var all_notifications=[]
            snapshot.docs.map((doc)=>{
                var notifications = doc.data()
                notifications["doc_id"]=doc.id
                all_notifications.push(notifications)
            })
            this.setState({
                allNotifications:all_notifications
            })
        })
        
    }
    componentDidMount(){
        this.getNotifications()
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,index})=>{
        return(
            <ListItem key={index} 
            rightElement={<TouchableOpacity style={styles.signUp} onPress={()=>{this.props.navigation.navigate("Response")}}><Text style={styles.text}>View</Text></TouchableOpacity>} 
           
            subtitle={item.message}
            bottomDivider
            >

            </ListItem>
        )
    }
    
    render(){
        return(
<View style={{flex:1}}>

<View style={{flex:0.9}}>
{this.state.allNotifications.length==0
?(<View><Text >You have no notifications</Text></View>):
(<FlatList
keyExtractor={this.keyExtractor}
data={this.state.allNotifications}
renderItem={this.renderItem}
></FlatList>)}
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
        width:100,
        height:30,
        backgroundColor:'#e045a5',
        alignContent:'center',
        justifyContent:'center',
        
        borderRadius:25,
        marginTop:15,
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