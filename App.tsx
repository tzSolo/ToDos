import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './src/components/Todo';
import ShowAllToDos from './src/components/ShowAllToDos';
import TodosContext from './src/components/TodosContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <TodosContext>
        <View style={styles.container}>
          <Todo />
          <ShowAllToDos/>
          <StatusBar style="auto" />
        </View>
      </TodosContext>
    </SafeAreaView>
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
