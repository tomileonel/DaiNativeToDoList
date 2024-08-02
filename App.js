import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tareas from './components/Tareas';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Tareas></Tareas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
