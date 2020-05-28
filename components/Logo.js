import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { render } from 'react-dom';

const logo = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>
                <Text style={{fontSize:70}}>ꪖ​</Text>ꫀ​𝘴​𝓽​ꫝ​ꫀ​𝓽​ꫀ​
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        paddingLeft: 20,
        height: 120
    },
    logo: {
        color: '#4955a9',
        fontSize: 30,
        fontWeight: '800'
    }
});

export default logo;