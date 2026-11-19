import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Начните свое</Text>
            <Text style={styles.titleBold}>Фитнес-путешествие</Text>
            <Text style={styles.subtitle}>Начните свой путь к фитнесу с нашими советами и поддержкой.</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.cardRow}>
              <Text style={styles.cardIcon}>🌙</Text>
              <Text style={styles.cardText}>Выпить 150 мл</Text>
            </View>
            <View style={styles.chartBars}>
              <View style={[styles.bar, { height: 15 }]} />
              <View style={[styles.bar, { height: 25 }]} />
              <View style={[styles.bar, { height: 35 }]} />
              <View style={[styles.bar, { height: 20 }]} />
              <View style={[styles.bar, { height: 40 }]} />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.startButton} 
            onPress={() => navigation.navigate('Onboarding')}
          >
            <Text style={styles.startText}>Начать</Text>
            <View style={styles.arrowContainer}>
              <Text style={styles.arrow}>›</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width, height },
  overlay: { flex: 1, backgroundColor: 'rgba(18, 18, 24, 0.85)' },
  container: { flex: 1, padding: 24, justifyContent: 'space-between', paddingVertical: 60 },
  header: { marginTop: 20 },
  title: { fontSize: 32, color: '#FFFFFF', fontWeight: '300' },
  titleBold: { fontSize: 32, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#9CA3AF', lineHeight: 20, maxWidth: 250 },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 16,
    width: 160,
    alignSelf: 'flex-start',
  },
  cardRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  cardIcon: { fontSize: 16, marginRight: 8 },
  cardText: { fontSize: 12, fontWeight: 'bold', color: '#121218' },
  chartBars: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 40 },
  bar: { width: 12, backgroundColor: '#D1D5DB', borderRadius: 6 },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  startText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
  arrowContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: { color: '#121218', fontSize: 20, fontWeight: 'bold' },
});