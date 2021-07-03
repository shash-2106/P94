
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { ListItem } from 'react-native-elements';

export default class RespondScreen extends React.Component {
  constructor(){
    super()
    this.state = {
     questionsList : []
    }
  this.requestRef= null
  }

  getQuestionsList =()=>{

    this.requestRef = db.collection("questions")
   
    .onSnapshot((snapshot)=>{ 
      var questionList = snapshot.docs.map(document =>
      document.data());
      this.setState({
        questionsList : questionList
      });
    })
  
  }
  

  componentDidMount(){
    this.getQuestionsList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.question}
        subtitle={item.topic}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
       
        rightElement={
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Answer", {"details":item})}}>
              <Text style={styles.signUp}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }
  render(){
    return(
      <View style={{flex:1}}>
    <Text>{this.state.questionsList.length}</Text>
        <View style={{flex:1}}>
          {
            this.state.questionsList.length === 0
            ?(
              <View>
                <Text style={{ fontSize: 20}}>List Of All Questions</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.questionsList}
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