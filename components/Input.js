import React from 'react';
import { StyleSheet, TextInput} from 'react-native';


const Input = props => {
    return <TextInput {...props} style={{...styles.input, ...props.style}}/>
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 2,
        paddingLeft: 20,
        fontSize: 16
    }
});

export default Input;