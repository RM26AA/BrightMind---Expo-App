import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NavigationScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0c0c0c" />
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('SplashScreen')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>BrightMind</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoodSelectionScreen')}>
          <Text style={styles.buttonText}>Feelings</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatScreen')}>
          <Text style={styles.buttonText}>Daily Log</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fireContainer}>
  {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri'].map((day, index) => (
    <View key={index} style={styles.fireItem}>
      <Text style={styles.fireText}>{day}</Text>
      <Image 
      key={index} 
      source={require('../assets/fire.png')} 
      style={[styles.fireImage, index === 2 && { tintColor: 'blue' }]} 
    />
    </View>
  ))}
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dd9460', // Background color
    flex: 1,
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    top: 120,
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  fireContainer: {
    position: 'absolute',
    top: 300, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  fireImage: {
    width: 30,
    height: 30,
  },
  fireItem: {
    alignItems: 'center',
  },
    fireText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, 
  },
});