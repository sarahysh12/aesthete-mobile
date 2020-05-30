import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Input from './Input';

// TODO keyboard is not working
const Search = props => {
    return (
        <TouchableWithoutFeedback onPress = {() => {
            Keyboard.dismiss();
            }}>
            <View>
                <Input 
                    placeholder='Search for Aesthetes Or artworks'
                    blurOnSubmit
                    autoCorrect={false}
                    autoCapitalize='none'
                    keyboardType='default' 
                    style={styles.searchBox}
                    onKeyPress={props.keyPressed}/> 
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    searchBox: {
        margin: 20
    }
});

export default Search;