import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000); 
  }, []); 

  return (
    <View style={styles.container}>
      {/* <Image source={require('./your_logo.png')} style={styles.logo} /> */}
      <Text>Your App Name</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default SplashScreen;
