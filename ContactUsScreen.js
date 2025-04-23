import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ContactUsScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [fileAttached, setFileAttached] = useState(false);

  const handleSendMessage = () => {
    // Basic validation
    if (name && email && phone && subject && message) {
      Alert.alert('Message Sent', `Your message has been sent successfully! \nSubject: ${subject} \nPhone: ${phone} \nFile: ${fileAttached ? 'File attached' : 'No file attached'}`);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');
      setFileAttached(false);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  const handleAttachFile = () => {
    // Simulating file attachment
    setFileAttached(true);
    Alert.alert('File Attached', 'You have successfully attached a file (simulation).');
  };

  const handleLogin = () => {
    // Navigate to login screen or show a simple alert
    navigation.navigate('LoginScreen'); // Adjust to your login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>How can we help you?</Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Phone Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Subject Input */}
      <TextInput
        style={styles.input}
        placeholder="Subject"
        value={subject}
        onChangeText={setSubject}
      />

      {/* Message Input */}
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      {/* Simulated File Attachment */}
      <TouchableOpacity style={styles.attachButton} onPress={handleAttachFile}>
        <Text style={styles.buttonText}>Attach File</Text>
      </TouchableOpacity>

      {/* Send Button */}
      <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  messageInput: {
    height: 100, // Make the message input larger
    textAlignVertical: 'top', // Ensures the text starts from the top of the box
  },
  attachButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;

