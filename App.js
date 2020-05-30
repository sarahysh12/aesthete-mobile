import React from 'react';
import {View,StyleSheet} from 'react-native';
import Landing from './screens/Landing';

export default function App() {
  return (
    <View style={styles.container}>
      <Landing/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
  },
});
