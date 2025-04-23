import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const BreathingScreen = ({ navigation }) => {
  const [scale] = useState(new Animated.Value(1));

  useEffect(() => {
    const breathAnimation = () => {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.5,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
      ]).start(() => breathAnimation());
    };

    breathAnimation();
  }, [scale]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrightMind</Text>

      <Text style={styles.questionHeader}>Take a deep breath</Text>

      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ scale: scale }],
          },
        ]}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ChatScreen')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd9460',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  questionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BreathingScreen;
