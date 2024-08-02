import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';


const Todo = ({ setTodos, todos, todo }) => {
  const completar = () => {
    const index = todos.findIndex((item) => item.created === todo.created);

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
          onPress: () => setTodos(todos.filter(item => item.created !== todo.created)),
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
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={completar} style={styles.todoContainer}>
        <View style={styles.todoItem}>
          <View style={styles.todoTextContainer}>
            <Text style={[styles.todoText, todo.completed && styles.completedText]}>
              {todo.title} {/* Mostrar el título de la tarea */}
            </Text>
            <Text style={styles.descriptionText}>
              {todo.description} {/* Mostrar la descripción de la tarea */}
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
    </Swipeable>
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
    flexDirection: 'column', // Cambiado a columna para mostrar título y descripción verticalmente
    padding: 16,
  },
  todoTextContainer: {
    marginBottom: 8, // Añadido margen inferior para separar título de descripción
  },
  todoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  dateTextContainer: {
    marginTop: 8, // Añadido margen superior para separar fecha del texto
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
    marginLeft: 10, // Añadido margen izquierdo para separación
  },
  deleteText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Todo;
