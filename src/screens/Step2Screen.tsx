import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Step2Screen({ navigation }: any) {
  const [unit, setUnit] = useState('cm');
  const [height, setHeight] = useState(170);

  const increaseHeight = () => setHeight(prev => prev + 1);
  const decreaseHeight = () => setHeight(prev => (prev > 50 ? prev - 1 : prev));

  return (
    <View style={styles.container}>
      <View style={styles.indicatorContainer}>
        <View style={styles.indicator} />
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Какой ваш рост?</Text>

        <View style={styles.unitToggle}>
          <TouchableOpacity 
            style={[styles.unitButton, unit === 'inches' && styles.activeUnitButton]} 
            onPress={() => setUnit('inches')}
          >
            <Text style={[styles.unitText, unit === 'inches' && styles.activeUnitText]}>inches</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.unitButton, unit === 'cm' && styles.activeUnitButton]} 
            onPress={() => setUnit('cm')}
          >
            <Text style={[styles.unitText, unit === 'cm' && styles.activeUnitText]}>см (cm)</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity onPress={decreaseHeight} style={styles.changeBtn}>
            <Text style={styles.changeBtnText}>-</Text>
          </TouchableOpacity>

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.heightValue}>{height}</Text>
            <Text style={styles.unitLabel}>{unit}</Text>
          </View>

          <TouchableOpacity onPress={increaseHeight} style={styles.changeBtn}>
            <Text style={styles.changeBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.hintText}>Ростты өзгерту үшін + және - батырмаларын басыңыз</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backBtnText}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('Step3')}>
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
  card: { width: '100%', backgroundColor: '#CFFAFE', borderRadius: 24, padding: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 180 },
  heightValue: { fontSize: 56, fontWeight: 'bold', color: '#111827' },
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