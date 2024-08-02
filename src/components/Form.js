import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Form = ({ setTodos, todos }) => {
  const [inputValue, setInputValue] = useState('');

  const agregarTarea = () => {
    const todoText = inputValue.trim();
    if (todoText) {
      const timestamp = new Date().getTime();
      const newTodo = { text: todoText, created: timestamp, completed: null };
      setTodos([...todos, newTodo]);
      setInputValue('');
    } else {
      Alert.alert("Debes designarle un nombre a la tarea.");
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Agrega una tarea"
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={agregarTarea}
      />
      <Button title="Agregar" onPress={agregarTarea} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default Form;
