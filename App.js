import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import CounterApp from './CounterApp';
import Colorchange from './Colorchange';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CounterApp />
        <Colorchange />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;