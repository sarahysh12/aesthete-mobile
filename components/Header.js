import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';


const Header = props => {
    
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>
                <Text style={{fontSize:70}}>ꪖ​</Text>ꫀ​𝘴​𝓽​ꫝ​ꫀ​𝓽​ꫀ​
            </Text>
            <Button title='Log In' onPress={props.authentication}/>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 130,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        color: '#4955a9',
        fontSize: 30,
        fontWeight: '800'
    }
});

export default Header;