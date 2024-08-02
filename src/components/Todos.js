import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Todo from './Todo';

const Todos = ({ todos, setTodos }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          console.log('Renderizando item:', item);
        
          return (
            <Todo
              key={item.text}
              setTodos={setTodos}
              todos={todos}
              todo={item}
            />
          );
        }}
        keyExtractor={(item) => item.text} // Use a unique key based on the item
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
});

export default Todos;
