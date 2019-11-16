import React, { Component } from 'react';
import permission from './src/Permissions/Permissions';
import { StyleSheet, Text, View } from 'react-native';
import * as Contacts from 'expo-contacts';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    this.callPermissions();
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields]
    });

    if (data.length > 0) {
      console.log(data);
      this.setState({ data: data });
    };
  }

  callPermissions() {
    permission();
  }

  async getContacts() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields],
    });

    if (data.length > 0) {
      this.setState({ contacts: data });
    }
  }
  renderList = data => {
    return (
      <ul>
        {data.map(item => (
          <li style={{ listStyle: "none" }} key={item.id}>ID: {item.id}, Name: {item.name}</li>
        ))}
      </ul>
    )
  }

  render() {
    const { contacts } = this.state;
    return (
      <View style={styles.container} >
        <Text>
          fuck u
        </Text>
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


