import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const Form = ({ setTodos, todos }) => {
  const [inputValue, setInputValue] = useState('');

  const enter = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      e.preventDefault();
      agregarTarea();
    }
  };

  const agregarTarea = () => {
    const todoText = validarTarea(inputValue);
    const tareaExistente = todos.find(tarea => tarea.text === todoText);
    
    if (tareaExistente) {
      Alert.alert("Ya existe una tarea con ese nombre.");
    } else {
      if (todoText !== "") {
        const timestamp = new Date().getTime();
        const todo = {
          text: todoText, created: timestamp, completed: null
        };
        setTodos((todos) => [...todos, todo]);
        setInputValue("");
      } else {
        Alert.alert("Debes designarle un nombre a la tarea.");
      }
    }
  };

  const mostrarTareaMasVeloz = () => {
    const tareaMasVeloz = todos.reduce((min, todo) => {
      if (todo.completed && (min === null || (todo.completed - todo.created) < (min.completed - min.created))) {
        return todo;
      } else {
        return min;
      }
    }, null);
    
    if (tareaMasVeloz) {
      Alert.alert("La tarea más veloz es: " + tareaMasVeloz.text);
    } else {
      Alert.alert("No hiciste nada aún.");
    }
  };

  const borrarTodo = () => {
    setTodos([]);
  };

  const validarTarea = (tarea) => {
    while (tarea.includes(" - ")) {
      tarea = tarea.replace(" - ", "").trim();
    }
    return tarea;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Agrega tareas"
        onSubmitEditing={enter}
      />
      <Button title="Agregar" onPress={agregarTarea} />
      <Button title="🚗" onPress={mostrarTareaMasVeloz} />
      <Button title="Alt+f4" onPress={borrarTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  input: {
    width: '70%',
    padding: 8,
    marginRight: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    padding: 8,
    marginHorizontal: 4,
  },
});

export default Form;

