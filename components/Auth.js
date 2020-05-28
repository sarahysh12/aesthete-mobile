import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import React from 'react';

const Auth = props => {


    return (
        <Modal visible={props.visible} animationType='Slide'>
            <View style={styles.authContainer}>
                <TextInput style={styles.textbox} placeholder='Username'/>
                <TextInput style={styles.textbox} placeholder='Password'/>
                <Button title='Log In' onPress={props.onAuth}/>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    authContainer: {
        backgroundColor: '#ccc',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'
    }, 
    textbox: {
        margin: 20,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#ccc',
        // borderWidth: 1,
        padding: 20,
        fontSize: 16
    } 
});

export default Auth;