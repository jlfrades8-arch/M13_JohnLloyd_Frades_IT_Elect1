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
            placeholder="Type here"
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
    width: "95%",
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messageBubble: {

    backgroundColor: 'yellowgreen',
    padding: 15,
    marginVertical: 4,
    marginHorizontal: 15,
    borderRadius: 12,
    alignSelf: 'flex-end',  
    maxWidth: "140%",
    
    
    
  },
  messageText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    backgroundColor: '#f9f9f9',
    borderColor: 'yellowgreen',
    
  },
  textInput: {
    flex: 1,
    maxHeight: 100,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'yellowgreen',
  },
  sendButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginLeft: 8,
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});