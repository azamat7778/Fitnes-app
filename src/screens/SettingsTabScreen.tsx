import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SettingsTabScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarLarge} />
            <Text style={styles.profileName}>Омирбек</Text>
            <Text style={styles.profileInfo}>170 см • 62 кг</Text>
          </View>

          <Text style={styles.sectionLabel}>Настройки аккаунта</Text>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingText}>Информация об аккаунте ›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingText}>Уведомления ›</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingText}>Размер текста ›</Text>
          </TouchableOpacity>

          <Text style={styles.sectionLabel}>Поддержка</Text>
          <TouchableOpacity style={styles.settingButton}>
            <Text style={styles.settingText}>Условия использования ›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.logoutText}>Выйти из аккаунта</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeTab')}>
            <Text style={styles.navIcon}>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ScheduleTab')}>
            <Text style={styles.navIcon}>📅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StatisticsTab')}>
            <Text style={styles.navIcon}>📊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Text style={styles.navIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width, height },
  overlay: { flex: 1, backgroundColor: 'rgba(18, 18, 24, 0.9)' },
  scrollContent: { padding: 24, paddingTop: 50, paddingBottom: 30 },
  profileHeader: { alignItems: 'center', marginBottom: 30 },
  avatarLarge: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#A855F7', marginBottom: 12 },
  profileName: { fontSize: 22, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 4 },
  profileInfo: { fontSize: 13, color: '#9CA3AF' },
  sectionLabel: { fontSize: 13, color: '#9CA3AF', marginBottom: 10, marginTop: 10, fontWeight: 'bold' },
  settingButton: { backgroundColor: 'rgba(31, 29, 43, 0.85)', padding: 16, borderRadius: 16, marginBottom: 10, borderWidth: 1, borderColor: '#374151' },
  settingText: { color: '#FFFFFF', fontSize: 15 },
  logoutButton: { backgroundColor: '#EF4444', padding: 16, borderRadius: 20, alignItems: 'center', marginTop: 20 },
  logoutText: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(31, 29, 43, 0.95)', paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#374151' },
  navItem: { padding: 10, borderRadius: 20 },
  activeNavItem: { backgroundColor: '#FFFFFF' },
  navIcon: { fontSize: 20 },
});