import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Button} from 'react-native';
import Logo from './Logo';
import Auth from './Auth';
import asethetePic from '../assets/aesthete.jpg';

const Landing = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onAuthentication = () => {
        setIsAuthenticated(false);
    }


    return (
            <View>
                <View style={styles.toolbar}>
                    <Logo/>
                    <Button title='Log In' onPress={() => setIsAuthenticated(true)}/>
                </View>
                <Image style={styles.image} source={asethetePic}/>
                <View style={styles.intro}>
                    <Text style={styles.introTitle}> Connect<Text style={styles.PurpleBold}> & </Text> Share with other</Text>
                    <Text style={styles.PurpleBold}> Artists!</Text>
                    <Text style={styles.introText}>Share your talent with the whole world and get others' back!</Text>
                </View>
                <TextInput placeholder='Search for Aesthetes Or artworks' style={styles.searchBox}/> 
                {/* <Button style={styles.primaryBtn} title='Become an Aesthete'/> */}
                <Auth visible={isAuthenticated} onAuth={onAuthentication}/>
            </View>
    );
};

const styles = StyleSheet.create({
    toolbar: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: '100%'
    },
    intro: {
        padding: 20
    },
    introTitle: {
        fontSize: 30,
        fontWeight: '400'
    },
    introText: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 15
    },
    PurpleBold: {
        color: '#4955a9',
        fontSize: 30
    },
    button: {
        width: 100,
        height: 30,
        borderRadius: 15,
        textAlign: 'center',
        margin: 10,
        backgroundColor: '#4955a9',
        borderColor: 'whitesmoke',
        color: 'whitesmoke',
        // padding: 10px 30px;
        // margin: 20px 10px;
        // fontSize: 18
    },
    searchBox: {
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

export default Landing;
