import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Calculador from '../components/Calculador';

export default function Result({ route }) {
  const nomeProduto = route.params.nome;
  const valorOriginal = route.params.valor;
  const porcentagem = route.params.porcentagem;

  return (
    <View style={styles.container}>
       <Image
        source={require('../../assets/cifrao.png')}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Resultado</Text>
      
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
    justifyContent: 'center', 
    paddingHorizontal: 12, 
  },
  imagem: {
    resizeMode: 'center',
    width: 100,
    height: 100
  },
  titulo: {
    fontSize: 40, 
    fontWeight: 'bold',
    color: '#243E36',
    marginBottom: 24,
    textAlign: 'center', 
  },
  input: {
    backgroundColor: "white",
    width: '100%', 
    maxWidth: 350, 
    borderRadius: 12,
    paddingLeft: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#D1D8D6', 
    marginBottom: 15, 
    fontSize: 16, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, 
  },
});
