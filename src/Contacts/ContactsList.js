import React, { Component } from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';
import permission from '../Permissions/Permissions';
import * as Contacts from 'expo-contacts';
import Contact from "./Contact";

export default class ContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: null,
            contact: {
                firstName: null,
                lastName: null,
                phoneNumber: null
            }
        };

        // this.handleChange = this.handleChange.bind(this);
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

    addContact = async () => {
        console.log(this.state.contact);return;
        const contact = {
            [Contacts.Fields.FirstName]: this.state.contact.firstName,
            [Contacts.Fields.LastName]: 'glek',
            [Contacts.Fields.PhoneNumbers]: this.state.contact.phoneNumber,
        };

        const contactId = await Contacts.addContactAsync(contact);
    };

    deleteContact = async (id) => {
        console.log(id); return;
        Contacts.removeContactAsync(id);
    };

    getContactsArray(data) {
        return data.map(item => (
            <Contact key={item.id} removeContact={this.deleteContact.bind(this)} id={item.id} name={item.name}/>
        ));
    }

    handleChange(name, text) {
        console.log(name, text)
        // this.setState({
        //     contact: {
        //         [event.target.id]: event.target.value
        //     }
        // });
        // console.log(this.state.contact);
    };

    render() {
        const contacts = this.state.contacts !== null ? this.getContactsArray(this.state.contacts) : null;
        return (
            <ScrollView style={styles.container}>
                {contacts}
                <TextInput
                    name='firstName'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(value) => this.setState({
                        contact: {
                            phoneNumber: this.state.contact.phoneNumber,
                            firstName: value
                        }
                    })}
                    value={this.state.contact.firstName}
                />
                <TextInput
                    name='phoneNumber'
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(value) => this.setState({
                        contact: {
                            firstName: this.state.contact.firstName,
                            phoneNumber: value,
                        }
                    })}
                    value={this.state.contact.phoneNumber}
                />
                <Button title={`Add contact`} onPress={this.addContact}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});


