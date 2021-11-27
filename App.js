/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';


class App extends Component {
  state = {
    appName: 'my First App',
    randomNumber: [33, 221]
  }

  onAddRandomNumber = () => {
    alert('Button Pressd!!');
  }

  render() {
    return ( 
      <View style={styles.mainView}>
        <Header name={this.state.appName}/>

        <View style={styles.mainText}>
          <Text
            onPress={() => {alert('test')}}
          >
            TEST
          </Text>
        </View>

        <Generator add={this.onAddRandomNumber}/>
        <NumList num={this.state.randomNumber}/>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  mainText: {
    color: 'red',
    fontWeight: 'normal',
    fontSize: 20,
    padding: 20,
  }
})

export default App;
