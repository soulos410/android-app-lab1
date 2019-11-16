import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsList from "./src/Contacts/ContactsList";
import SeekBar from './src/SeekBar/SeekBar';

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
    flex: 1,
    overflow: 'scroll',
    height: 40,
    width: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


