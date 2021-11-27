/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import { View, Text, StyleSheet, Button } from 'react-native'
 
const Generator = (props) => {
  return (
    <View 
      style={styles.generator}>
      <Button
        onPress={() => props.add()}
        title="Add Number"
      />
    </View>
  )
}


const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF'
  }
})

 export default Generator;
 