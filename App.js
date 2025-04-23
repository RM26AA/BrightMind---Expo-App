import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import MoodSelectionScreen from './screens/MoodSelectionScreen'
import SkillLevelSelectionScreen from './screens/SkillLevelSelectionScreen';
import PracticeFrequencySelectionScreen from './screens/PracticeFrequencySelectionScreen';
import MeditationTimeSelectionScreen from './screens/MeditationTimeSelectionScreen';
import FeelingSelectionScreen from './screens/FeelingSelectionScreen';
import BreathingScreen from './screens/BreathingScreen'; 
import ChatScreen from './screens/ChatScreen'; 
import ContactUsScreen from './screens/ContactUsScreen'; 
import NavigationScreen from './screens/NavigationScreen';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MoodSelectionScreen" component={MoodSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SkillLevelSelectionScreen" component={SkillLevelSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PracticeFrequencySelectionScreen" component={PracticeFrequencySelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MeditationTimeSelectionScreen" component={MeditationTimeSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FeelingSelectionScreen" component={FeelingSelectionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BreathingScreen" component={BreathingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ContactUsScreen" component={ContactUsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NavigationScreen" component={NavigationScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

