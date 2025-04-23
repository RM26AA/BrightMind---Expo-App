import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/LOGO.png')} style={styles.logo} />
      
      {/* Text */}
      <Text style={styles.welcomeText}>Welcome to BrightMind, the No.1 mood app!</Text>
      
      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NavigationScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#FF6A00', // Orange background
    backgroundColor: '#dd9460',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000', // Black text color for the text
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#000000', // Black button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50, // Rounded button
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
