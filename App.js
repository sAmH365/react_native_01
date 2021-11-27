import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';
import Input from './src/input';


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
        {/* <Header name={this.state.appName}/>

        <View style={styles.mainText}>
          <Text
            onPress={() => {alert('test')}}
          >
            TEST
          </Text>
        </View>

        <Generator add={this.onAddRandomNumber}/>
        <ScrollView style={{width: '100%'}}
          // onScroll={() => alert('onScroll')}
          onMomentumScrollBegin={() => alert('onMomentumScrollBegin')}
        >
          <NumList
          num={this.state.randomNumber}
          delete={this.onNumDelete}
          />
         </ScrollView> */}

         <Input/>
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
