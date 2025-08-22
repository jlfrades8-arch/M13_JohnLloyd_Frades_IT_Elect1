import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp({bgColor}){
  const [count, setCount] = useState(0);
 
  return (
    <View style={styles.container}>
      <Text>CounterApp</Text>
      <Text style={styles.count}>{count}</Text>
   
    <View style={styles.buttonRow}>
    <Button title = "Increment" onPress={() => setCount(count + 1)} />
    
    <View style = {{ height: 11 }}/>
    
    <Button title = "Decrement" onPress={() => setCount(count - 1)} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  count: {
    fontSize: 32,
    marginBottom: 20,
  },
});