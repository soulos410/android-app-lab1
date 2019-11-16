import { SearchBar } from 'react-native-elements';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class SeekBar extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <View style={flex = 2}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={search}
                    platform="android"
                />
            </View>
        );
    }
}

