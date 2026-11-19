import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function RegisterScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Экранға шығатын қате хат

  const handleRegister = async () => {
    setErrorMessage(''); // Басқан кезде ескі қатені тазалау

    // 1. Бос орындарды тексеру
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setErrorMessage('Пожалуйста, заполните все поля!');
      return;
    }

    // 2. Құпия сөздердің сәйкестігін тексеру
    if (password !== confirmPassword) {
      setErrorMessage('Пароли не совпадают!');
      return;
    }

    try {
      // 3. Базадағы аккаунттарды алу
      const existingUsersJSON = await AsyncStorage.getItem('users_database');
      const users = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

      // 4. Email бұрын бар екенін тексеру
      const userExists = users.some((user: any) => user.email.toLowerCase() === email.trim().toLowerCase());
      
      if (userExists) {
        setErrorMessage('Аккаунт с таким email уже существует!');
        return;
      }

      // 5. Жаңа қолданушыны сақтау
      const newUser = { username, email: email.trim().toLowerCase(), password };
      users.push(newUser);
      await AsyncStorage.setItem('users_database', JSON.stringify(users));

      // Сәтті тіркелді -> Келесі қадамға өту
      navigation.navigate('Step1');
    } catch (error) {
      setErrorMessage('Произошла ошибка при регистрации.');
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
              <Text style={styles.iconText}>✨</Text>
            </View>
            <Text style={styles.title}>Привет! Зарегистрируйтесь</Text>
            <Text style={styles.subtitle}>Заполните данные для регистрации</Text>
          </View>

          <View style={styles.form}>
            {/* Егер қате шықса, осы жерде қызыл жазу болып көрінеді */}
            {errorMessage ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>⚠️ {errorMessage}</Text>
              </View>
            ) : null}

            <TextInput 
              placeholder="Имя пользователя" 
              placeholderTextColor="#9CA3AF" 
              style={styles.input} 
              value={username}
              onChangeText={setUsername}
            />
            <TextInput 
              placeholder="Электронная почта" 
              placeholderTextColor="#9CA3AF" 
              style={styles.input} 
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput 
              placeholder="Пароль" 
              placeholderTextColor="#9CA3AF" 
              secureTextEntry 
              style={styles.input} 
              value={password}
              onChangeText={setPassword}
            />
            <TextInput 
              placeholder="Подтвердите пароль" 
              placeholderTextColor="#9CA3AF" 
              secureTextEntry 
              style={styles.input} 
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Зарегистрироваться</Text>
            </TouchableOpacity>

            <View style={styles.loginRow}>
              <Text style={styles.hasAccountText}>Уже есть аккаунт? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginLink}>Войти</Text>
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
  container: { flex: 1, padding: 24, justifyContent: 'space-between', paddingVertical: 30 },
  backButton: { width: 40, height: 40, justifyContent: 'center', alignItems: 'flex-start' },
  backText: { color: '#FFFFFF', fontSize: 32 },
  header: { alignItems: 'flex-start' },
  iconContainer: {
    width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#A855F7',
    justifyContent: 'center', alignItems: 'center', marginBottom: 10, backgroundColor: 'rgba(30, 27, 46, 0.8)'
  },
  iconText: { fontSize: 20 },
  title: { fontSize: 22, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 4 },
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
  footer: { width: '100%' },
  registerButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center', marginBottom: 16 },
  registerButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
  loginRow: { flexDirection: 'row', justifyContent: 'center' },
  hasAccountText: { color: '#9CA3AF', fontSize: 13 },
  loginLink: { color: '#FACC15', fontSize: 13, fontWeight: 'bold' },
});