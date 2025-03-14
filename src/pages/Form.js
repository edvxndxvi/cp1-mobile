import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
      <Text style={styles.titulo}>$ New Price $</Text>

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
          placeholder='Digite o valor original do prouto'
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
    paddingTop: 100,
  },
  titulo: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#243E36',
    marginBottom: 24
  },
  form: {
    gap: 12
  },
  input: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 12,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#243E36'
  },
  btn: {
    backgroundColor: '#243E36',
    alignItems: 'center',
    paddingBlock: 10,
    borderRadius: 12
  },
  btnText: {
    color: '#fff',
    fontWeight: 'medium'
  }
});
