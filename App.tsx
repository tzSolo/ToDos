import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import TodosContext from './src/components/TodosContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import Tab from './src/navigation/Tab';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TodosContext>
        <StatusBar style="auto" />
            <Tab/>
      </TodosContext>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
