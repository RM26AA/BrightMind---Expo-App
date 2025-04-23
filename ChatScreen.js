import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const freyaReplies = [
  "Got it! How can I assist you today?",
  "Thanks for sharing that.",
  "Interesting. Tell me more!",
  "I'm here to help, what's on your mind?",
  "That’s helpful to know. Let's keep going.",
  "Alright. I'm listening.",
];

const ChatScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'Freya',
      text: 'Hi, and welcome to BrightMind. My name is Freya. It would be great to address you by your name, if you are willing to share that with me?',
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { sender: 'User', text: message },
        { sender: 'Freya', text: 'Got it! How can I assist you today?' },
      ]);
      setMessage('');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
    >
      <View style={styles.container}>
        {/* Home Button */}
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('NavigationScreen')}
        >
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>

        <Text style={styles.title}>BrightMind</Text>
        <Text style={styles.subtitle}>Ok, let's chat!</Text>

        <ScrollView
          style={styles.chatScroll}
          contentContainerStyle={styles.chatContent}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((msg, index) => (
  <View
    key={index}
    style={
      msg.sender === 'Freya' ? styles.wendyMessage : styles.userMessage
    }
  >
    <Text style={styles.messageText}>{msg.text}</Text>
    {msg.sender === 'Freya' && (
      <TouchableOpacity
        style={styles.playButton}
        onPress={() => {
          // Add audio logic here in future
          console.log('Play audio for:', msg.text);
        }}
      >
        <Text style={styles.playButtonText}>▶️</Text>
      </TouchableOpacity>
    )}
  </View>
))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={message}
            onChangeText={setMessage}
            onSubmitEditing={handleSendMessage}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.micButton}>
              <Icon name="mic" size={30} color="black" />
            </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('ContactUsScreen')}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dd9460',
    padding: 20,
  },
  homeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    zIndex: 10,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    marginTop: 35,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  chatScroll: {
    flex: 1,
    marginBottom: 20,
  },
  chatContent: {
    paddingBottom: 20,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  wendyMessage: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#6fa3ef',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    width: '60%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  micButton: {
    marginLeft: 10,
  },
  playButton: {
  marginTop: 5,
  alignSelf: 'flex-start',
  backgroundColor: '#eee',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 10,
},
playButtonText: {
  fontSize: 16,
},
});

export default ChatScreen;