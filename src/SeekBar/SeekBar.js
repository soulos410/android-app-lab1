import { SearchBar, colors } from 'react-native-elements';
import React, { Component } from 'react';

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
            <SearchBar
                placeholder="Type Here..."
                onChangeText={this.updateSearch}
                value={search}
                platform="android"
                containerStyle={[{ backgroundColor: '#8589bd' }]}
                placeholderTextColor="#d6d6d6"
            />
        );
    }
}
