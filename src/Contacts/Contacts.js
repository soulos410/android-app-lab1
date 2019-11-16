import * as Contacts from 'expo-contacts';
import React from 'react';

export default async function showContacts() {
    let contactsArr = [];
    const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.ID],
    });

    if (data.length > 0) {
        data.forEach((el, index) => {
            contactsArr.push(<li key={index}> ID: ${el.id}, NAME: ${el.name}</li>)
        });
    }
    console.log(contactsArr);
    return contactsArr;
}