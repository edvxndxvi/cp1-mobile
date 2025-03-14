import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Form({navigation}) {
  const [nomeProduto, setNomeProduto] = useState('')
  const [valorOriginal, setValorOriginal] = useState('')
  const [porcentagemAumento, setPorcentagemAumento] = useState(false)

  const handleNavigate = () => {
    const valor = parseFloat(valorOriginal);
    const aumento = parseFloat(porcentagemAumento);
    if (!isNaN(valor) && !isNaN(aumento)) {
      navigation.navigate('Result', { nome: nomeProduto, valor: valor, porcentagem: aumento });
    } else {
      alert('Por favor, insira valores válidos!');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/cifrao.png')}
        style={styles.imagem}
      />
      <Text style={styles.titulo}>Calculadora de Preço</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Digite o nome do produto'
          maxLength={25}
          keyboardType='default'
          value={nomeProduto}
          onChangeText={(valor) => setNomeProduto(valor)}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite o valor original do produto'
          keyboardType='numeric'
          value={valorOriginal}
          onChangeText={(valor) => setValorOriginal(valor)}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite a porcentagem de aumento'
          keyboardType='numeric'
          value={porcentagemAumento}
          onChangeText={(valor) => setPorcentagemAumento(valor)}
        />
        <TouchableOpacity 
          style={styles.btn}
          onPress={handleNavigate}
        >
          <Text style={styles.btnText}>Ver novo valor</Text>
        </TouchableOpacity>
      </View>
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
  form: {
    width: '100%', 
    maxWidth: 400, 
    gap: 20, 
  },
  input: {
    backgroundColor: "white",
    width: '100%',
    borderRadius: 8, 
    paddingLeft: 15,
    paddingVertical: 12, 
    borderWidth: 1,
    borderColor: '#D1D8D6',
    fontSize: 16, 
    marginBottom: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  btn: {
    backgroundColor: '#243E36',
    alignItems: 'center',
    paddingVertical: 15, 
    borderRadius: 8,
    marginTop: 10,
    elevation: 3, 
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
