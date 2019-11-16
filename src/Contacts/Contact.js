import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text key={this.props.id}>ID: {this.props.id}, Name: {this.props.name}</Text>
        )
    }
}
