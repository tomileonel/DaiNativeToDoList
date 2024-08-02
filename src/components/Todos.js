import React from 'react';
import { View, StyleSheet } from 'react-native';
import Todo from './Todo';

const Todos = ({ todos, setTodos }) => {
  return (
    <View style={styles.todosContainer}>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          setTodos={setTodos}
          todos={todos}
          todo={todo}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todosContainer: {
    marginTop: 16,
  },
});

export default Todos;
