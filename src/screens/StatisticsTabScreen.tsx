import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function StatisticsTabScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>📊 Статистика</Text>
          <Text style={styles.subtitle}>Среднее за неделю: 102 ккал</Text>

          <View style={styles.statCard}>
            <Text style={styles.statValue}>102 ккал</Text>
            <Text style={styles.statLabel}>Сожжено калорий</Text>
          </View>

          <View style={styles.rowCards}>
            <View style={styles.smallCard}>
              <Text style={styles.smallCardTitle}>👟 Шаги</Text>
              <Text style={styles.smallCardVal}>2 мили</Text>
            </View>
            <View style={styles.smallCard}>
              <Text style={styles.smallCardTitle}>💧 Вода</Text>
              <Text style={styles.smallCardVal}>150 мл</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeTab')}>
            <Text style={styles.navIcon}>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ScheduleTab')}>
            <Text style={styles.navIcon}>📅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Text style={styles.navIcon}>📊</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SettingsTab')}>
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
  scrollContent: { padding: 24, paddingTop: 50 },
  title: { fontSize: 24, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#9CA3AF', marginBottom: 24 },
  statCard: { backgroundColor: 'rgba(254, 240, 138, 0.95)', borderRadius: 24, padding: 30, alignItems: 'center', marginBottom: 20 },
  statValue: { fontSize: 42, fontWeight: 'bold', color: '#121218', marginBottom: 8 },
  statLabel: { fontSize: 14, color: '#4B5563', fontWeight: '600' },
  rowCards: { flexDirection: 'row', justifyContent: 'space-between' },
  smallCard: { backgroundColor: 'rgba(31, 29, 43, 0.85)', borderRadius: 20, padding: 20, width: '48%', alignItems: 'center', borderWidth: 1, borderColor: '#374151' },
  smallCardTitle: { color: '#9CA3AF', fontSize: 14, marginBottom: 8 },
  smallCardVal: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(31, 29, 43, 0.95)', paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#374151' },
  navItem: { padding: 10, borderRadius: 20 },
  activeNavItem: { backgroundColor: '#FFFFFF' },
  navIcon: { fontSize: 20 },
});