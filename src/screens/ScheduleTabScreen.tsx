import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function ScheduleTabScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>📅 Расписание</Text>
          <Text style={styles.subtitle}>11 декабря, 2022</Text>

          <View style={styles.scheduleBox}>
            <Text style={styles.timeText}>08:00 AM</Text>
            <Text style={styles.itemTitle}>Утренняя разминка</Text>
            <Text style={styles.itemDesc}>Бег • 02 км</Text>
          </View>

          <View style={styles.scheduleBoxAlt}>
            <Text style={styles.timeText}>04:00 PM</Text>
            <Text style={styles.itemTitle}>Силовая тренировка</Text>
            <Text style={styles.itemDesc}>Отжимания и пресс • 20 сек отдых</Text>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('HomeTab')}>
            <Text style={styles.navIcon}>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Text style={styles.navIcon}>📅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('StatisticsTab')}>
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
  scheduleBox: { backgroundColor: 'rgba(252, 231, 243, 0.9)', borderRadius: 20, padding: 20, marginBottom: 16 },
  scheduleBoxAlt: { backgroundColor: 'rgba(254, 240, 138, 0.9)', borderRadius: 20, padding: 20, marginBottom: 16 },
  timeText: { fontSize: 12, fontWeight: 'bold', color: '#121218', marginBottom: 6 },
  itemTitle: { fontSize: 16, fontWeight: 'bold', color: '#121218', marginBottom: 4 },
  itemDesc: { fontSize: 13, color: '#4B5563' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(31, 29, 43, 0.95)', paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#374151' },
  navItem: { padding: 10, borderRadius: 20 },
  activeNavItem: { backgroundColor: '#FFFFFF' },
  navIcon: { fontSize: 20 },
});