import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Body from './src/components/Body.js'; 

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Terminar el tp',
      created: new Date('December 25, 1995 13:30:00').toISOString(),
    },
    {
      text: 'Terminar el tp parte 1',
      created: new Date('December 25, 1997 13:30:00').toISOString(),
      completed: new Date('December 26, 1997 13:30:00').toISOString(),
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Body setTodos={setTodos} todos={todos} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

