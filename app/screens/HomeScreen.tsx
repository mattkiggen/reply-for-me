import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, TextInput, Text } from 'react-native-paper';
import { supabase } from '../lib/supabase';

export default function HomeScreen() {
  const [message, setMessage] = useState('');
  const [instruction, setInstruction] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseText, setResponseText] = useState('');

  const handlePress = async () => {
    const { data } = await supabase.functions.invoke('generate-reply', {
      body: {
        prompt: `Generate a reply for the following message using this instruction "${instruction}":\n${message}`,
      },
    });
    if (data) setResponseText(data.choices[0].text);
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={{ marginBottom: 16 }}
        multiline
        numberOfLines={10}
        mode='outlined'
        label='Message or email'
        value={message}
        onChangeText={setMessage}
        outlineColor='#ddd'
      />

      <TextInput
        style={{ marginBottom: 24 }}
        mode='outlined'
        label='Instruction'
        value={instruction}
        onChangeText={setInstruction}
        outlineColor='#ddd'
      />

      <Button
        mode='contained'
        onPress={handlePress}
        loading={loading}
        icon='auto-fix'>
        Generate
      </Button>

      {responseText && <Text>{responseText}</Text>}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
  },
});
