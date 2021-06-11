
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
        title={item.q}
        subtitle={item.topic}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
       
        rightElement={
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Answer", {"details":item})}}>
              <Text style={{color:'#ffff'}}>View</Text>
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

