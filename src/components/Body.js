import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Title from './Title';
import Form from './Form';
import Todos from './Todos';

const Body = ({ setTodos, todos }) => {
  return (
    <SafeAreaView style={styles.body}>
      <Title />
      <View style={styles.container}>
        <Form setTodos={setTodos} todos={todos} />
        <Todos setTodos={setTodos} todos={todos} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    maxWidth: 1000,
    margin: 50,
    marginTop: 0,
    padding: 20,
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, 
  },
});

export default Body;
