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
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prev => {
      return {
        randomNumber: [...prev.randomNumber, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.randomNumber.filter((num, idx) => {
      // 선택한 값과 state에 있는 배열의 인덱스가 다른 값만 배열로 만들어 반환 한다 => 선택한 값은 빼고 배열로 만듦 => 선택값 삭제
      // position === 선택한 숫자의 인덱스
      // idx === randomNumber 배열의 인덱스
      return position != idx;
    })
    this.setState(prev => {
      return {
        randomNumber: newArray
      }
    })
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
        <NumList
         num={this.state.randomNumber}
         delete={this.onNumDelete}
         />
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
