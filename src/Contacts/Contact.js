import React, { Component } from 'react';
import {Button, Text, View} from 'react-native';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text key={this.props.id}>ID: {this.props.id}, Name: {this.props.name}</Text>
                <Button title={`Remove`} onPress={() => this.props.removeContact(this.props.id)}/>
            </View>
        )
    }
}
