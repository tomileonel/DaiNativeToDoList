import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Todo = ({ setTodos, todos, todo }) => {
  const completar = () => {
    const index = todos.findIndex((item) => item.text === todo.text);

    if (index !== -1) {
      const updatedTodos = [...todos];
      const updatedTodo = updatedTodos[index];
      updatedTodo.completed = updatedTodo.completed ? null : new Date();
      updatedTodos[index] = updatedTodo;
      setTodos(updatedTodos);
    }
  };

  const eliminar = () => {
    Alert.alert(
      'Eliminar Tarea',
      '¿Estás seguro de que quieres eliminar esta tarea?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          onPress: () => setTodos(todos.filter(item => item.text !== todo.text)),
          style: 'destructive',
        },
      ]
    );
  };

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton} onPress={eliminar}>
      <Text style={styles.deleteText}>❌</Text>
    </TouchableOpacity>
  );

  return (
      <TouchableOpacity onPress={completar} style={styles.todoContainer}>
        <View style={styles.todoItem}>
          <View style={styles.todoTextContainer}>
            <Text style={[styles.todoText, todo.completed && styles.completedText]}>
              {todo.text}
            </Text>
          </View>
          <View style={styles.dateTextContainer}>
            <Text style={styles.dateText}>
              {'Creado: ' + new Date(todo.created).toLocaleString()}
              {todo.completed && ` - Completado: ${new Date(todo.completed).toLocaleString()}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  todoTextContainer: {
    flex: 0.4, // 40% del espacio
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  dateTextContainer: {
    flex: 0.6, // 60% del espacio
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 12,
    color: 'gray',
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4D4D',
    padding: 20,
    borderRadius: 8,
    width: 80,
  },
  deleteText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Todo;
