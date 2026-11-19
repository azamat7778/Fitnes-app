import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.topSpace} />

          <View style={styles.centerContent}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>⚡</Text>
            </View>
            <Text style={styles.title}>Достигайте</Text>
            <Text style={styles.titleBold}>своих целей</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginButtonText}>Войти</Text>
            </TouchableOpacity>

            {/* Мұнда Регистрация басқанда Register экранына (2-ші бетке) барады */}
            <TouchableOpacity 
              style={styles.registerButton} 
              onPress={() => navigation.navigate('Register')}
            >
              <Text style={styles.registerButtonText}>Регистрация</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.guestText}>Продолжить как гость</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width, height },
  overlay: { flex: 1, backgroundColor: 'rgba(18, 18, 24, 0.88)' },
  container: { flex: 1, justifyContent: 'space-between', padding: 24 },
  topSpace: { height: 40 },
  centerContent: { alignItems: 'center', justifyContent: 'center' },
  iconContainer: {
    width: 80, height: 80, borderRadius: 40, borderWidth: 1.5, borderColor: '#A855F7',
    justifyContent: 'center', alignItems: 'center', marginBottom: 24, backgroundColor: 'rgba(30, 27, 46, 0.8)',
  },
  iconText: { fontSize: 32 },
  title: { fontSize: 28, color: '#FFFFFF', fontWeight: '300', textAlign: 'center' },
  titleBold: { fontSize: 28, color: '#A855F7', fontWeight: 'bold', textAlign: 'center' },
  buttonContainer: { width: '100%', marginBottom: 30 },
  loginButton: {
    backgroundColor: 'rgba(42, 38, 59, 0.9)', paddingVertical: 16, borderRadius: 30,
    alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#374151',
  },
  loginButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  registerButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center', marginBottom: 16 },
  registerButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
  guestText: { color: '#9CA3AF', textAlign: 'center', fontSize: 14, fontWeight: '500' },
});