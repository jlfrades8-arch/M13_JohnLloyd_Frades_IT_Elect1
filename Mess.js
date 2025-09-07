import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// Custom FlatList component to display messages
const MyFlatList = ({ messages }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>{item.text}</Text>
        </View>
      )}
      inverted
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
    />
  );
};

export default function Mess() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const nextId = useRef(1);

  const sendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: nextId.current,
      text: inputText.trim(),
    };
    nextId.current += 1;

    setMessages((prevMessages) => [newMessage, ...prevMessages]);
    setInputText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={90}
      >
        <MyFlatList messages={messages} />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageBubble: {
    backgroundColor: '#0078fe',
    padding: 25,
    marginVertical: 5,
    marginHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-end',   
    maxWidth: "100%",
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  textInput: {
    flex: 1,
    maxHeight: 100,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0078fe',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});