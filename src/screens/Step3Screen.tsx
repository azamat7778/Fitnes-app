import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Step3Screen({ navigation }: any) {
  const [selected, setSelected] = useState(0);

  const goals = [
    'Силовые тренировки для набора массы',
    'Высокоинтенсивный интервальный тренинг для похудения',
    'Кардио упражнения для сжигания жира',
    'Функциональный тренинг для общего тонуса'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.activeIndicator]} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Какая ваша цель?</Text>
        <Text style={styles.subtitle}>Ваш выбор повлияет на программу тренировок</Text>

        <View style={styles.goalsList}>
          {goals.map((goal, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.goalCard, selected === index && styles.activeGoalCard]}
              onPress={() => setSelected(index)}
            >
              <Text style={[styles.goalText, selected === index && styles.activeGoalText]}>{goal}</Text>
              {selected === index && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.nextBtnText}>Начать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF', padding: 24, justifyContent: 'space-between', paddingVertical: 60 },
  indicatorContainer: { flexDirection: 'row', justifyContent: 'center', gap: 8 },
  indicator: { width: 30, height: 4, backgroundColor: '#E5E7EB', borderRadius: 2 },
  activeIndicator: { backgroundColor: '#111827', width: 40 },
  content: { alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 13, color: '#6B7280', marginBottom: 30, textAlign: 'center' },
  goalsList: { width: '100%', gap: 12 },
  goalCard: { 
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 16, padding: 18, backgroundColor: '#FFFFFF' 
  },
  activeGoalCard: { borderColor: '#111827', borderWidth: 1.5 },
  goalText: { fontSize: 14, fontWeight: '500', color: '#374151', flex: 1 },
  activeGoalText: { fontWeight: 'bold', color: '#111827' },
  checkmark: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginLeft: 10 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backBtn: { width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' },
  backBtnText: { fontSize: 28, color: '#111827' },
  nextBtn: { backgroundColor: '#111827', paddingVertical: 14, paddingHorizontal: 40, borderRadius: 30 },
  nextBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});