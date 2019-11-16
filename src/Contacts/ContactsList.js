import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import permission from '../Permissions/Permissions';
import * as Contacts from 'expo-contacts';
import Contact from "./Contact";

export default class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = { contacts: null };
    }

    async componentDidMount() {
        permission();
        await this.getContacts();
    }

    async getContacts() {
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields]
        });
        if (data.length > 0) {
            this.setState({ contacts: data });
        }
    }

    getContactsArray(data) {
        return data.map(item => (
            <Contact key={item.id} id={item.id} name={item.name}/>
        ));
    }

    render() {
        const contacts = this.state.contacts !== null ? this.getContactsArray(this.state.contacts) : null;
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


