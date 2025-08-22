import React from 'react';
import { View,Button, StyleSheet } from 'react-native';

export default function ColorChangeApp({setBgColor}){
  
  return (
    <View style={styles.buttonRow}>
    <Button title = "White" onPress={() => setBgColor('White')} />
    
     <View style = {{ width: 11 }}/>
     
    <Button title = "Light Green" onPress={() => setBgColor('#90EE90')} />
    
    <View style = {{ width: 11 }}/>
    
    <Button title = "Light Blue" onPress={() => setBgColor('#ADD8E6')} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: 'center',
    marginTop: 50,
  },
});