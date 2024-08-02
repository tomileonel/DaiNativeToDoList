import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Centering the title horizontally
    marginVertical: 20, // Adding vertical margin for spacing
  },
  title: {
    fontSize: 24, // Font size for the title
    fontWeight: 'bold', // Making the font bold
    textAlign: 'center', // Centering the text
  },
});

export default Title;