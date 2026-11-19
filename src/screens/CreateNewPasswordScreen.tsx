import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CreateNewPasswordScreen({ navigation }: any) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>〈</Text>
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>🔒</Text>
            </View>
            <Text style={styles.title}>Создайте новый пароль</Text>
            <Text style={styles.subtitle}>
              Ваш новый пароль должен отличаться от тех, которые использовались ранее.
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Новый пароль"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Подтвердите пароль"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.resetButton} 
              onPress={() => navigation.navigate('PasswordChanged')}
            >
              <Text style={styles.resetButtonText}>Сбросить пароль</Text>
            </TouchableOpacity>
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
    width: 60, height: 60, borderRadius: 30, borderWidth: 1.5, borderColor: '#F472B6',
    justifyContent: 'center', alignItems: 'center', marginBottom: 16, backgroundColor: 'rgba(30, 27, 46, 0.8)'
  },
  iconText: { fontSize: 24 },
  title: { fontSize: 24, color: '#FFFFFF', fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#9CA3AF', marginTop: 10, lineHeight: 20 },
  formContainer: { marginTop: 10 },
  input: {
    backgroundColor: 'rgba(31, 29, 43, 0.85)', borderRadius: 16, paddingHorizontal: 18,
    paddingVertical: 16, color: '#FFFFFF', fontSize: 15, marginBottom: 16, borderWidth: 1, borderColor: '#374151'
  },
  footerContainer: { marginBottom: 20 },
  resetButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center' },
  resetButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
});