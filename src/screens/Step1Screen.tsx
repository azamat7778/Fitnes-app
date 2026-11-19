import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Step1Screen({ navigation }: any) {
  const [unit, setUnit] = useState('kg');
  const [weight, setWeight] = useState(70);

  // Салмақты өзгерту функциялары
  const increaseWeight = () => setWeight(prev => prev + 1);
  const decreaseWeight = () => setWeight(prev => (prev > 10 ? prev - 1 : prev));

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Какой ваш вес?</Text>

        <View style={styles.unitToggle}>
          <TouchableOpacity 
            style={[styles.unitButton, unit === 'lb' && styles.activeUnitButton]} 
            onPress={() => {
              setUnit('lb');
              setWeight(Math.round(weight * 2.20462)); // кг-ды фунтқа ауыстыру
            }}
          >
            <Text style={[styles.unitText, unit === 'lb' && styles.activeUnitText]}>фунты (lb)</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.unitButton, unit === 'kg' && styles.activeUnitButton]} 
            onPress={() => {
              setUnit('kg');
              setWeight(unit === 'lb' ? Math.round(weight / 2.20462) : weight);
            }}
          >
            <Text style={[styles.unitText, unit === 'kg' && styles.activeUnitText]}>кг (kg)</Text>
          </TouchableOpacity>
        </View>

        {/* Салмақты өзгертетін интерактивті карточка */}
        <View style={styles.card}>
          <TouchableOpacity onPress={decreaseWeight} style={styles.changeBtn}>
            <Text style={styles.changeBtnText}>-</Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.weightValue}>{weight}</Text>
            <Text style={styles.unitLabel}>{unit}</Text>
          </View>

          <TouchableOpacity onPress={increaseWeight} style={styles.changeBtn}>
            <Text style={styles.changeBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.hintText}>Санды өзгерту үшін + және - батырмаларын басыңыз</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('Step2')}>
          <Text style={styles.nextBtnText}>Далее ›››</Text>
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
  title: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginBottom: 24, textAlign: 'center' },
  unitToggle: { flexDirection: 'row', backgroundColor: '#F3F4F6', borderRadius: 20, padding: 4, marginBottom: 30 },
  unitButton: { paddingVertical: 8, paddingHorizontal: 24, borderRadius: 16 },
  activeUnitButton: { backgroundColor: '#111827' },
  unitText: { fontSize: 14, fontWeight: '600', color: '#6B7280' },
  activeUnitText: { color: '#FFFFFF' },
  card: { width: '100%', backgroundColor: '#FEF08A', borderRadius: 24, padding: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 180 },
  weightValue: { fontSize: 56, fontWeight: 'bold', color: '#111827' },
  unitLabel: { fontSize: 14, color: '#4B5563', fontWeight: '600' },
  changeBtn: { width: 50, height: 50, backgroundColor: '#111827', borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  changeBtnText: { color: '#FFFFFF', fontSize: 28, fontWeight: 'bold' },
  hintText: { marginTop: 15, color: '#6B7280', fontSize: 13 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  backBtn: { width: 50, height: 50, borderRadius: 25, borderWidth: 1, borderColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' },
  backBtnText: { fontSize: 28, color: '#111827' },
  nextBtn: { backgroundColor: '#111827', paddingVertical: 14, paddingHorizontal: 30, borderRadius: 30 },
  nextBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});