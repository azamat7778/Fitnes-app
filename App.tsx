import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Step1Screen from './src/screens/Step1Screen';
import Step2Screen from './src/screens/Step2Screen';
import Step3Screen from './src/screens/Step3Screen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import OTPVerificationScreen from './src/screens/OTPVerificationScreen';
import CreateNewPasswordScreen from './src/screens/CreateNewPasswordScreen';
import PasswordChangedScreen from './src/screens/PasswordChangedScreen';
import HomeScreen from './src/screens/HomeScreen';

// Жаңа 4 жеке экранды импорттау
import HomeTabScreen from './src/screens/HomeTabScreen';
import ScheduleTabScreen from './src/screens/ScheduleTabScreen';
import StatisticsTabScreen from './src/screens/StatisticsTabScreen';
import SettingsTabScreen from './src/screens/SettingsTabScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Step1" component={Step1Screen} />
        <Stack.Screen name="Step2" component={Step2Screen} />
        <Stack.Screen name="Step3" component={Step3Screen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
        <Stack.Screen name="PasswordChanged" component={PasswordChangedScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Жаңа бөлек 4 бет осында қосылды */}
        <Stack.Screen name="HomeTab" component={HomeTabScreen} />
        <Stack.Screen name="ScheduleTab" component={ScheduleTabScreen} />
        <Stack.Screen name="StatisticsTab" component={StatisticsTabScreen} />
        <Stack.Screen name="SettingsTab" component={SettingsTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}