/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return ( 
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>react Native</Text>
        </View>
        <View style={styles.subView}>
          <Text>react Native</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>react Native</Text>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
    flex: 1,
    width: '50%'
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
    fontWeight: 'bold',
    fontSize: 50,
    padding: 20,
  }
})

export default App;
