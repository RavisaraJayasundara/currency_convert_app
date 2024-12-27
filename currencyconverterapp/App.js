import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { PaperProvider} from 'react-native-paper';
import Home from './currrencyconverterapp/components/Home';

export default function App() {
  return (
    <PaperProvider>
    <View style={styles.container}>
      <Home></Home>
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black'
  },
  input: {
    padding: 10,
    margin: 10,
    width: '80%',
  },
});
