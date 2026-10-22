import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { produtos } from '../data/produtos'
import React from 'react'


const ListarProduto = () => {
    return (
        <View style={styles.main}>
            <FlatList
                //indica onde os dados vem
                data={produtos}
                //este e o indentificador.DEVE ser STRING
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.linha}>
                        <Image style={styles.foto} source={{ uri: item.imagem }}>

                        </Image>

                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text style={styles.precos}>R$ {item.preco}</Text>

                        <TouchableOpacity style={styles.botao}>
                            <Text style={styles.textBtn}>Compar</Text>
                        </TouchableOpacity>

                    </View>
                )
                }
            >
            </FlatList >
        </View >
    )
}

export default ListarProduto

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    linha: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        width: 200,
        height: 250,


        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,

    },
    foto: {
        borderRadius: 25,
        width: 200,
        height: 200
    },
    titulo: {
        fontSize: 28,
        fontWeight: '500',
        fontFamily: 'Arial',
    },
    precos: {
        fontSize: 32,
        fontWeight: '700',
        fontFamily: 'Arial',
        color: 'green'
    },
    botao: {
        width: 189,
        height: 30,

        borderRadius: 12,

        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'royalblue'
    },
    textBtn: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'arial',

        backgroundColor: 'royalblue'
    }


})