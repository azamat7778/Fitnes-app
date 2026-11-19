import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function OTPVerificationScreen({ navigation }: any) {
  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop' }} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>〈</Text>
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.iconText}>📱</Text>
            </View>
            <Text style={styles.title}>OTP Верификация</Text>
            <Text style={styles.subtitle}>
              Введите код подтверждения, который мы отправили на ваш email.
            </Text>
          </View>

          <View style={styles.otpContainer}>
            <TextInput style={styles.otpBox} keyboardType="numeric" maxLength={1} defaultValue="5" />
            <TextInput style={styles.otpBox} keyboardType="numeric" maxLength={1} defaultValue="5" />
            <TextInput style={styles.otpBox} keyboardType="numeric" maxLength={1} defaultValue="2" />
            <TextInput style={styles.otpBox} keyboardType="numeric" maxLength={1} />
          </View>

          <View style={styles.footerContainer}>
            <TouchableOpacity 
              style={styles.verifyButton} 
              onPress={() => navigation.navigate('CreateNewPassword')}
            >
              <Text style={styles.verifyButtonText}>Подтвердить</Text>
            </TouchableOpacity>

            <View style={styles.resendRow}>
              <Text style={styles.noCodeText}>Не получили код? </Text>
              <TouchableOpacity>
                <Text style={styles.resendText}>Переотправить</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { width, height },
  overlay: { flex: 1, backgroundColor: 'rgba(18, 18, 24, 0.9)' },
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  backButton: {
    width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#374151',
    justifyContent: 'center', alignItems: 'center', marginTop: 20, backgroundColor: 'rgba(30, 27, 46, 0.6)'
  },
  backButtonText: { color: '#FFFFFF', fontSize: 18 },
  headerContainer: { marginTop: 10 },
  iconContainer: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 1.5, borderColor: '#34D399',
    justifyContent: 'center', alignItems: 'center', marginBottom: 16, backgroundColor: 'rgba(30, 27, 46, 0.8)'
  },
  iconText: { fontSize: 24 },
  title: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#9CA3AF', lineHeight: 20 },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  otpBox: {
    width: 65, height: 65, backgroundColor: 'rgba(31, 29, 43, 0.85)', borderRadius: 16,
    borderWidth: 1, borderColor: '#374151', textAlign: 'center', fontSize: 24, color: '#FFFFFF', fontWeight: 'bold'
  },
  footerContainer: { marginBottom: 20 },
  verifyButton: { backgroundColor: '#FFFFFF', paddingVertical: 16, borderRadius: 30, alignItems: 'center', marginBottom: 20 },
  verifyButtonText: { color: '#121218', fontSize: 16, fontWeight: 'bold' },
  resendRow: { flexDirection: 'row', justifyContent: 'center' },
  noCodeText: { color: '#9CA3AF', fontSize: 14 },
  resendText: { color: '#FACC15', fontSize: 14, fontWeight: 'bold' },
});