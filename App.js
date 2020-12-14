/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

export default class App extends Component {
  state = {
    name :'',
    surname : ' '
  }

  componentDidMount(){
    axios.get('https://randomuser.me/api/')
    .then(user => {
      this.setState({
        name: user.name.first,
        surname :user.name.last
      })
    })
  }
  render() {
    const {name,surname} = this.state;
    return (
<SafeAreaView>
   
   <View>
     <Text>{name} {surname}</Text>
   </View>
</SafeAreaView>

    );
  }
}

