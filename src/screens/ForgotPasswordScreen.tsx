import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ForgotPasswordScreen({ navigation }: any) {
  const [email, setEmail] = useState('');

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>〈</Text>
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>🔑</Text>
            </View>
            <Text style={styles.title}>Забыли пароль?</Text>
            <Text style={styles.subtitle}>
              Не переживайте! Введите email адрес, привязанный к вашему аккаунту.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.sendButton} 
              onPress={() => navigation.navigate('OTPVerification')}
            >
              <Text style={styles.sendButtonText}>Отправить код</Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <Text style={styles.rememberText}>Вспомнили пароль? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Войти</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width, height },
  overlay: { flex: 1, backgroundColor: 'rgba(18, 18, 24, 0.9)' },
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  backButton: {
    width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#374151',
    justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: 'rgba(30, 27, 46, 0.6)'
  },
  backButtonText: { color: '#FFFFFF', fontSize: 18 },
  headerContainer: { marginTop: 10 },
  iconContainer: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 1.5, borderColor: '#38BDF8',
    justifyContent: 'center', alignItems: 'center', marginBottom: 16, backgroundColor: 'rgba(30, 27, 46, 0.8)'
  },
  iconText: { fontSize: 24 },
  title: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#9CA3AF', lineHeight: 20 },
  formContainer: { marginTop: 10 },
  input: {
    backgroundColor: 'rgba(31, 29, 43, 0.85)', borderRadius: 16, paddingHorizontal: 18,
    paddingVertical: 16, color: '#FFFFFF', fontSize: 15, borderWidth: 1, borderColor: '#374151'
  },
  footerContainer: { marginBottom: 20 },
  sendButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center', marginBottom: 20 },
  sendButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
  loginRow: { flexDirection: 'row', justifyContent: 'center' },
  rememberText: { color: '#9CA3AF', fontSize: 14 },
  loginText: { color: '#FACC15', fontSize: 14, fontWeight: 'bold' },
});