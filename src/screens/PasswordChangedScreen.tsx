import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function PasswordChangedScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View />

          <View style={styles.centerContent}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconCheck}>🎉</Text>
            </View>
            <Text style={styles.title}>Пароль изменен!</Text>
            <Text style={styles.subtitle}>
              Ваш пароль был успешно изменен. Можете войти в систему.
            </Text>
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.loginButton} 
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.loginButtonText}>Вернуться к входу</Text>
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
  container: { flex: 1, padding: 24, justifyContent: 'space-between', alignItems: 'center' },
  centerContent: { alignItems: 'center' },
  iconContainer: {
    width: 90, height: 90, borderRadius: 45, backgroundColor: 'rgba(30, 27, 46, 0.85)',
    borderWidth: 2, borderColor: '#34D399', justifyContent: 'center', alignItems: 'center', marginBottom: 24
  },
  iconCheck: { fontSize: 40 },
  title: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 14, color: '#9CA3AF', textAlign: 'center', paddingHorizontal: 20 },
  footerContainer: { width: '100%', marginBottom: 20 },
  loginButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center' },
  loginButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
});