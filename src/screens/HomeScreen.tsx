import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.iconEmoji}>💪</Text>
            <Text style={styles.title}>Добро пожаловать!</Text>
            <Text style={styles.subtitle}>Ваш персональный помощник по фитнесу готов к работе.</Text>
          </View>

          <View style={styles.centerBox}>
            <View style={styles.workoutCard}>
              <Text style={styles.workoutSmall}>Сегодняшняя тренировка</Text>
              <Text style={styles.workoutMain}>Кардио и пресс • 45 минут</Text>
            </View>

            {/* Мұнда 'MainDashboard' орнына 'HomeTab' деп өзгертілді */}
            <TouchableOpacity 
              style={styles.mainScreenButton} 
              onPress={() => navigation.navigate('HomeTab')}
            >
              <Text style={styles.mainScreenButtonText}>На главный экран</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.logoutText}>Выйти из аккаунта</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width, height },
  overlay: { flex: 1, backgroundColor: 'rgba(18, 18, 24, 0.85)' },
  container: { flex: 1, padding: 24, justifyContent: 'space-between', paddingVertical: 50, alignItems: 'center' },
  header: { alignItems: 'center', marginTop: 40 },
  iconEmoji: { fontSize: 40, marginBottom: 10 },
  title: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#9CA3AF', textAlign: 'center' },
  centerBox: { width: '100%', alignItems: 'center', gap: 15 },
  workoutCard: {
    backgroundColor: 'rgba(31, 29, 43, 0.85)',
    borderWidth: 1, borderColor: '#374151',
    borderRadius: 20, padding: 20, width: '100%', alignItems: 'center'
  },
  workoutSmall: { fontSize: 12, color: '#FACC15', fontWeight: 'bold', marginBottom: 4 },
  workoutMain: { fontSize: 14, color: '#FFFFFF' },
  mainScreenButton: {
    backgroundColor: '#FEF08A', width: '100%', paddingVertical: 16,
    borderRadius: 30, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5
  },
  mainScreenButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
  logoutButton: { backgroundColor: '#EF4444', width: '100%', paddingVertical: 16, borderRadius: 30, alignItems: 'center' },
  logoutText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});