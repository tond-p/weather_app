import { setStatusBarBackgroundColor } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>날씨어플입니다 ~~~</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingHorizontal: 50,
    paddingVertical: 100,
  },
  text: {
    fontSize: 30,
    color: '#2c2c2c',
  },
});
