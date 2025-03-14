import { StyleSheet, Text, View } from 'react-native';
export default function Calculador({ nome, precoOriginal, aumento }) {

    const valorAumento = precoOriginal * (aumento / 100);
    const novoValor = precoOriginal + valorAumento;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Nome do Produto: {nome}</Text>
            <Text style={styles.text}>Valor Original: R$ {precoOriginal}</Text>
            <Text style={styles.text}>Aumento Percentual: {aumento}%</Text>
            <Text style={styles.text}>Valor do Aumento: R$ {valorAumento.toFixed(2)}</Text>
            <Text style={styles.text}>Novo Valor: R$ {novoValor}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        gap: 12
    },
    text: {
        color: '#243E36',
        fontWeight: 'bold',
        fontSize: 24
    },
});
