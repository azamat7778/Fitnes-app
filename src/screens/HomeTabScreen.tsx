import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeTabScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.hiText}>Привет,</Text>
              <Text style={styles.nameText}>Омирбек</Text>
            </View>
            <View style={styles.searchProfileCard}>
              <Text style={styles.searchIcon}>🔍</Text>
              <View style={styles.avatarPlaceholder} />
            </View>
          </View>

          <View style={styles.chartCard}>
            <View style={styles.calorieBadge}>
              <Text style={styles.calorieText}>505 ккал</Text>
            </View>
            <View style={styles.chartVisual}>
              <View style={styles.chartLine} />
            </View>
            <View style={styles.daysRow}>
              <Text style={styles.dayText}>Пн</Text>
              <Text style={styles.dayText}>Вт</Text>
              <Text style={styles.dayText}>Ср</Text>
              <Text style={styles.dayText}>Чт</Text>
              <Text style={[styles.dayText, styles.activeDayText]}>Пт</Text>
              <Text style={styles.dayText}>Сб</Text>
              <Text style={styles.dayText}>Вс</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Ваше расписание</Text>

          <View style={styles.taskCard}>
            <View>
              <Text style={styles.taskTitle}>Разминка</Text>
              <Text style={styles.taskSub}>Бег • 02 км</Text>
            </View>
            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Старт ›</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.taskCardAlt}>
            <View>
              <Text style={styles.taskTitleAlt}>Силовая тренировка</Text>
              <Text style={styles.taskSubAlt}>10 повт, 3 подхода по 20 сек</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.bottomNav}>
          <TouchableOpacity style={[styles.navItem, styles.activeNavItem]}>
            <Text style={styles.navIcon}>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ScheduleTab')}>
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
  scrollContent: { padding: 24, paddingTop: 50, paddingBottom: 30 },
  hiText: { fontSize: 22, color: '#9CA3AF', fontWeight: '300' },
  nameText: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  searchProfileCard: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  searchIcon: { fontSize: 16, color: '#FFFFFF', backgroundColor: 'rgba(31, 29, 43, 0.8)', padding: 10, borderRadius: 20 },
  avatarPlaceholder: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#A855F7' },
  chartCard: { backgroundColor: 'rgba(31, 29, 43, 0.85)', borderRadius: 24, padding: 20, marginBottom: 24, borderWidth: 1, borderColor: '#374151' },
  calorieBadge: { backgroundColor: '#FEF08A', alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 10, marginBottom: 15 },
  calorieText: { fontSize: 12, fontWeight: 'bold', color: '#121218' },
  chartVisual: { height: 50, justifyContent: 'center', marginBottom: 15 },
  chartLine: { height: 3, backgroundColor: '#A855F7', width: '100%', borderRadius: 2 },
  daysRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dayText: { color: '#6B7280', fontSize: 12 },
  activeDayText: { color: '#FFFFFF', fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 15 },
  taskCard: { backgroundColor: 'rgba(31, 29, 43, 0.85)', borderRadius: 20, padding: 18, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#374151' },
  taskTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  taskSub: { color: '#9CA3AF', fontSize: 12 },
  startButton: { backgroundColor: '#FEF08A', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 14 },
  startButtonText: { color: '#121218', fontWeight: 'bold', fontSize: 13 },
  taskCardAlt: { backgroundColor: 'rgba(31, 29, 43, 0.6)', borderRadius: 20, padding: 18, borderWidth: 1, borderColor: '#374151' },
  taskTitleAlt: { color: '#FFFFFF', fontSize: 15, fontWeight: 'bold', marginBottom: 4 },
  taskSubAlt: { color: '#9CA3AF', fontSize: 12 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(31, 29, 43, 0.95)', paddingVertical: 14, borderTopWidth: 1, borderTopColor: '#374151' },
  navItem: { padding: 10, borderRadius: 20 },
  activeNavItem: { backgroundColor: '#FFFFFF' },
  navIcon: { fontSize: 20 },
});