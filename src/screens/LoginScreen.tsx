import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Экранға шығатын қате хат

  const handleLogin = async () => {
    setErrorMessage(''); // Басқан кезде ескі қатені тазалау

    // 1. Бос орындарды тексеру
    if (!email.trim() || !password.trim()) {
      setErrorMessage('Пожалуйста, заполните все поля!');
      return;
    }

    try {
      // 2. Базадан сақталған аккаунттарды алу
      const existingUsersJSON = await AsyncStorage.getItem('users_database');
      const users = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

      if (users.length === 0) {
        setErrorMessage('Нет зарегистрированных аккаунтов. Сначала зарегистрируйтесь!');
        return;
      }

      // 3. Email мен парольдің сәйкестігін тексеру
      const foundUser = users.find(
        (user: any) => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password
      );

      if (!foundUser) {
        setErrorMessage('Неверный email или пароль!');
        return;
      }

      // Сәтті кірді -> Басты бетке өту
      navigation.navigate('Home');
    } catch (error) {
      setErrorMessage('Произошла ошибка при входе.');
    }
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>‹</Text>
          </TouchableOpacity>

          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>🔐</Text>
            </View>
            <Text style={styles.title}>С возвращением!</Text>
            <Text style={styles.subtitle}>Рады видеть вас снова!</Text>
          </View>

          <View style={styles.form}>
            {/* Егер қате шықса, осы жерде қызыл ескерту болып көрінеді */}
            {errorMessage ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>⚠️ {errorMessage}</Text>
              </View>
            ) : null}

            <TextInput 
              placeholder="Введите ваш email" 
              placeholderTextColor="#9CA3AF" 
              style={styles.input} 
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput 
              placeholder="Введите пароль" 
              placeholderTextColor="#9CA3AF" 
              secureTextEntry 
              style={styles.input} 
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotContainer}>
              <Text style={styles.forgotText}>Забыли пароль?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Войти</Text>
            </TouchableOpacity>

            <View style={styles.registerRow}>
              <Text style={styles.noAccountText}>Нет аккаунта? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerLink}>Зарегистрироваться</Text>
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
  container: { flex: 1, padding: 24, justifyContent: 'space-between', paddingVertical: 40 },
  backButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'flex-start' },
  backText: { color: '#FFFFFF', fontSize: 32 },
  header: { alignItems: 'flex-start' },
  iconContainer: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#A855F7',
    justifyContent: 'center', alignItems: 'center', marginBottom: 12, backgroundColor: 'rgba(30, 27, 46, 0.8)'
  },
  iconText: { fontSize: 24 },
  title: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 6 },
  subtitle: { fontSize: 14, color: '#9CA3AF' },
  form: { width: '100%' },
  errorBox: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
    borderWidth: 1,
    borderColor: '#EF4444',
    padding: 10,
    borderRadius: 12,
    marginBottom: 12,
  },
  errorText: {
    color: '#FCA5A5',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(31, 29, 43, 0.85)', borderWidth: 1, borderColor: '#374151',
    borderRadius: 16, padding: 14, color: '#FFFFFF', marginBottom: 12, fontSize: 14
  },
  forgotContainer: { alignItems: 'flex-end', marginBottom: 15 },
  forgotText: { color: '#9CA3AF', fontSize: 13 },
  footer: { width: '100%' },
  loginButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center', marginBottom: 16 },
  loginButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
  registerRow: { flexDirection: 'row', justifyContent: 'center' },
  noAccountText: { color: '#9CA3AF', fontSize: 13 },
  registerLink: { color: '#FACC15', fontSize: 13, fontWeight: 'bold' },
});