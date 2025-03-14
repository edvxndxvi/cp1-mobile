import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculador from '../components/Calculador';

export default function Result({route}) {
  const nomeProduto = route.params.nome;
  const valorOriginal = route.params.valor;
  const porcentagem = route.params.porcentagem;
  console.log(route)

  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>$ Resultado $</Text>      
      <Calculador
        nome={nomeProduto}
        precoOriginal={valorOriginal}
        aumento={porcentagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0EEC6',
        alignItems: 'center',
        paddingTop: 100,
      },
      titulo: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#243E36',
        marginBottom: 24
      },
      input: {
        backgroundColor: "white",
        width: 300,
        borderRadius: 12,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#243E36'
      },
});
