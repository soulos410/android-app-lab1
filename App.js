import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsList from "./src/Contacts/ContactsList";
import SeekBar from './src/SeekBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: null };
  }

  render() {
    return (
      <View style={styles.container}>
        <SeekBar />
        <ContactsList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: flex,
    overflow: scroll,
    height: '60%',
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});


