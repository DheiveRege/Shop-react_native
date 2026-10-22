import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ListarProduto from './components/ListarProduto';
import Card from './components/Card';
import Busca from './components/Busca';
import Btn from './components/botas';

export default function App() {
  return (
    <SafeAreaProvider style={styles.nada} >
      <SafeAreaView>

        <Busca />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  nada: {
    width: '100%',
    alignItems: 'center'

  }
});
