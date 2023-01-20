import React, { useState } from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [instruction, setInstruction] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.label}>Message or email:</Text>
      <TextInput
        style={styles.messageInput}
        multiline
        numberOfLines={10}
        onChangeText={setMessage}
      />

      <Text style={styles.label}>Instruction:</Text>
      <TextInput style={styles.promptInput} onChangeText={setInstruction} />

      <Pressable
        onPress={() => console.log({ message, instruction })}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#4f67ff8f' : '#4f67ff' },
          styles.button,
        ]}>
        <Text style={styles.buttonText}>Generate</Text>
      </Pressable>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 42,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  label: {
    marginBottom: 8,
  },
  messageInput: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 14,
    padding: 8,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  promptInput: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 14,
    padding: 8,
    marginBottom: 24,
  },
  screen: {
    flex: 1,
    padding: 16,
  },
});
