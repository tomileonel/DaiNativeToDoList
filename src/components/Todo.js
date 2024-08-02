import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Todo = ({ setTodos, todos, todo }) => {
  const completar = () => {
    const index = todos.findIndex((item) => item.text === todo.text);

    if (index !== -1) {
      const updatedTodos = [...todos];
      const updatedTodo = updatedTodos[index];
      
      if (updatedTodo.completed) {
        updatedTodo.completed = null;
      } else {
        updatedTodo.completed = new Date();
      }
      updatedTodos[index] = updatedTodo;

      setTodos(updatedTodos);
    }
  };

  return (
    <TouchableOpacity onPress={completar} style={styles.todoContainer}>
      <View style={styles.todoItem}>
        <Text style={[styles.todoText, todo.completed && styles.completedText]}>
          {todo.text}
        </Text>
        <Text style={styles.dateText}>
          {' - Creado: ' + new Date(todo.created).toLocaleString()}
          {todo.completed && ` - Completado: ${new Date(todo.completed).toLocaleString()}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
  },
  dateText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Todo;
