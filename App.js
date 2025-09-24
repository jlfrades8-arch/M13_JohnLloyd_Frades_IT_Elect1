import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CounterApp from './CounterApp';
import ColorChangerApp from './ColorChangerApp';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CounterApp />
        <ColorChangerApp />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;