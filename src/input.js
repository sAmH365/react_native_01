import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'


class Input extends Component {
  state = {
    myTextInput: ''
  }

  onChangeText = (event) => {
    this.setState({
      myTextInput: event
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
      </View>
  )
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%'
  },
  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    padding: 10
  }
})

export default Input;
