import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const HomeScreen = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [permissionChecked, setPermissionChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const permission = await requestPermission();
      setPermissionChecked(true);
    })();
  }, []);

  if (!permissionChecked) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.text}>Requesting camera permission...</Text>
      </SafeAreaView>
    );
  }

  if (!hasPermission) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.text}>Camera permission denied</Text>
      </SafeAreaView>
    );
  }

  if (device == null) {
    return (
      <SafeAreaView style={styles.centered}>
        <Text style={styles.text}>Loading camera...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
