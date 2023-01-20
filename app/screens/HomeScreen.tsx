import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({});
