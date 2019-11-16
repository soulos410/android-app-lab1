import React, { Component } from 'react';
import permission from './src/Permissions/Permissions';
import { StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contacts: null };
  }

  async componentDidMount() {
    this.callPermissions();
    await this.getContacts();
  }

  callPermissions() {
    permission();
  }

  async getContacts() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields]
    });
    if (data.length > 0) {
      this.setState({ contacts: data });
    }
  }

  renderList = data => {
    return data.map(item => (
        <Text key={item.id}>ID: {item.id}, Name: {item.name}</Text>
    ));
  }

  render() {
    const contacts = this.state.contacts !== null ? this.renderList(this.state.contacts) : null;
    return (
        <View style={styles.container}>
          {contacts}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


