import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numList';
import Input from './src/input';


class App extends Component {
  state = {
    appName: 'my First App',
    randomNumber: [33, 221],
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd', 'e']
  }

  onChangeText = (event) => {
    this.setState({
        myTextInput: event,
    })
  }

  onInputText = () => {
    this.setState(prev => {
      return {
        myTextInput: '',
        alphabet : [...prev.alphabet, prev.myTextInput]
      }
    })
  }

  render() {
    return ( 
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          onChangeText={this.onChangeText}
          style={styles.input}
          multiline={true}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button
          title="Add Text Input"
          onPress={this.onInputText}
        />

        <ScrollView
          style={{width:'100%'}}
        >
          {
            this.state.alphabet.map((item, idx) => (
              <Text
                style={styles.mainText}
                key={idx}
              >
                {item}
              </Text>
            ))
          }
        </ScrollView>
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
    margin: 20,
    backgroundColor: 'pink',
    padding: 20,
  },
  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})

export default App;
