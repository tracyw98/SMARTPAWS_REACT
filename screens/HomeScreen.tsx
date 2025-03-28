// src/screens/HomeScreen.tsx (or ./screens/HomeScreen.tsx depending on your structure)
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useCameraPermission,
} from 'react-native-vision-camera';

const HomeScreen = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = useCameraDevices();
  const device = devices.back;

  const [permissionChecked, setPermissionChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const status = await requestPermission();
      setPermissionChecked(true);
    })();
  }, []);

  if (!hasPermission && permissionChecked) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>Camera permission denied.</Text>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.centered}>
        <Text style={styles.text}>Loading camera...</Text>
      </View>
    );
  }

  return (
    <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});
