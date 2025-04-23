import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress'; // Use react-native-progress for cross-platform progress
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const MoodSelectionScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { label: 'Stress Relief', icon: 'heart' }, // Icon name for "Stress Relief"
    { label: 'Sleep', icon: 'bed' },           // Icon name for "Sleep"
    { label: 'Progress', icon: 'check-circle' }, // Icon name for "Progress"
    { label: 'Reduce Anxiety', icon: 'medkit' }, // Icon name for "Reduce Anxiety"
    { label: 'Focus', icon: 'bullseye' },      // Icon name for "Focus"
    { label: 'Other', icon: 'ellipsis-h' },    // Icon name for "Other"
  ];

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BrightMind</Text>

      {/* Replace ProgressBarAndroid with react-native-progress */}
      <Bar progress={0.2} width={300} style={styles.progressBar} />

      <Text style={styles.questionHeader}>What's on your mind?</Text>

      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === index && styles.selectedOption,
            ]}
            onPress={() => handleSelectOption(index)}
          >
            <Icon name={option.icon} size={30} color={selectedOption === index ? '#fff' : '#000'} />
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SkillLevelSelectionScreen')} // Adjust navigation as needed
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd9460', // Background color
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
  progressBar: {
    marginBottom: 20,
  },
  questionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  option: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  selectedOption: {
    backgroundColor: '#6fa3ef', // Color when selected
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10, // Space between icon and text
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

export default MoodSelectionScreen;

