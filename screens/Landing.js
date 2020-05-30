import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, Button, ScrollView} from 'react-native';
import Header from '../components/Header';
import Auth from '../components/Auth';
import Search from '../components/Search';

import Colors from '../constants/colors';
import asethetePic from '../assets/aesthete.jpg';
import connectPic from '../assets/connect.jpg';
import artistsPic from '../assets/artists.jpg';


const Landing = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onAuthentication = () => {
        setIsAuthenticated(true);
    }

    const onSearchHandler = (event) => {
        console.log(event)
        // console.log('--------------')
    }

    return (
            <ScrollView>
                <Header authentication={onAuthentication}/>
                <View style={styles.descriptionContainer}>
                    <Image style={styles.image} source={asethetePic}/>
                    <View style={styles.memberBox}>
                        <Text style={styles.introTitle}> Connect<Text style={styles.PurpleBold}> & </Text> Share with other</Text>
                        <Text style={styles.PurpleBold}> Artists!</Text>
                        <Text style={styles.introText}>Share your talent with the whole world and get others' back!</Text>
                        <Search keyPressed={onSearchHandler}/>
                        <View style={styles.button}>
                            <Button title='Become an Aesthete' color={Colors.whiteSmoke}/>
                        </View>
                    </View>
                    <Image style={styles.verticalImage} source={connectPic}/>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>Stay Connected</Text>
                        <Text style={styles.introText}>  
                            Follow and connect with like-minded people and enjoy sharing your arts with each other, either you are a musician, make up artists, chef, interior designer and many more!
                        </Text>
                    </View>
                    <Image style={styles.verticalImage} source={artistsPic}/>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>Consult with aesthetes</Text>
                        <Text style={styles.introText}>  
                            Ask other aesthetes' opinion about your projects when friends and family aren't available. From small daily routines like cooking, shopping clothes! To composing a song or decorating your living room by a designer!
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>Share your ideas on your aesthete friends' arts</Text>
                        <Text style={styles.introText}>  
                            Help your aesthete network in their projects with your specialty! Share your ideas if you really rock at something! Give some tips & tricks how you dress up, or even share grandma's secret recepies!
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={styles.descriptionTitle}>Earn money at home!</Text>
                        <Text style={styles.introText}>  
                            Earn some money in your free time while you're at home! If you really enjoy something and never had a chance to try it in the real work, give it a shot online without any cost! Become and Aesthete and share your passion!
                        </Text>
                    </View>
                </View>
                <Auth visible={isAuthenticated} onAuth={onAuthentication}/>
            </ScrollView>
    );
};

const styles = StyleSheet.create({
    // screen: {
    //     flex: 1,
    //     alignItems: 'center'
    // },
    memberBox: {
        paddingVertical: 20,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        fontSize: 16,
        marginBottom: 10,
    },
    toolbar: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: '100%'
    },
    verticalImage: {
        marginVertical: 40,
        height: 250,
        width: '100%'
    },
    introTitle: {
        fontSize: 30,
        fontWeight: '400'
    },
    introText: {
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 17,
        color: Colors.gray
    },
    PurpleBold: {
        color: Colors.darkPurple,
        fontSize: 30
    },
    button: {
        width: '60%',
        height: 40,
        borderRadius: 15,
        marginLeft: 20,
        backgroundColor: Colors.darkPurple
    },
    description: {
        paddingVertical: 20,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        fontSize: 16,
        marginVertical: 10,
        borderRadius: 20,
        width: '95%',
    },
    descriptionTitle: {
        fontSize: 20,
        color: Colors.darkPurple,
        fontWeight: '600'
    },
    descriptionContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }


});

export default Landing;
