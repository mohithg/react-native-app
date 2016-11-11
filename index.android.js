/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class Mohith extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: 'Mohith G'
    };
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.setState({
      name: this.state.text,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to {this.state.name}!
        </Text>
        <Text style={styles.instructions}>
          You are typing: {this.state.text}
        </Text>
        <Text style={styles.instructions}>
          Learning apps now...
        </Text>
        <TextInput ref='text'
          style={styles.input}
          onChangeText={(text)=> {this.setState({text})}}
          value={this.state.text}
          blurOnSubmit={true}
        />
        <Button
          title="Submit"
          onPress={this.submit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: 120,
    fontSize: 30,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Mohith', () => Mohith);
