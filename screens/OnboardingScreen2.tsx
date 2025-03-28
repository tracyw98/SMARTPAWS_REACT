import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/simple-camera.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Enable camera for scans</Text>
      <Text style={styles.body}>
        To scan and analyze your dog in real time, SmartPaws needs access to
        your camera. Without this, the main feature of the app won’t work.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('OnboardingScreen3')}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },

  /** 📌 Adjust the camera image size & position */
  image: {
    width: 350,
    height: 380,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  body: {
    fontSize: 13,
    fontFamily: 'Figtree-Regular',
    textAlign: 'left',
    color: '#444',
    marginBottom: 30,
  },

  /** 📌 Adjust the position of the button row */
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 80,
  },

  /** 📌 Back Button */
  backButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  backButtonText: {
    color: 'gray',
    fontSize: 13,
    fontFamily: 'Inter-Medium',
  },

  /** 📌 Next Button */
  nextButton: {
    backgroundColor: '#0451FA',
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 18,
  },
  nextButtonDisabled: {
    backgroundColor: '#AAB2C0',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'Inter-Medium',
  },

  /** 📌 Modal Background */
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black overlay
  },

  /** 📌 Modal Container */
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  modalText: {
    fontSize: 16,
    fontFamily: 'Figtree-Regular',
    textAlign: 'center',
    color: '#444',
    marginBottom: 20,
  },

  modalButtonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },

  /** 📌 Cancel Button */
  modalCancelButton: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalCancelText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },

  /** 📌 Settings Button */
  modalSettingsButton: {
    backgroundColor: '#0451FA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalSettingsText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-Medium',
  },
});
