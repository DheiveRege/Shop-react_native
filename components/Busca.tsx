import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { produtos } from '../data/produtos';
import Btn from './botas';


const Busca = () => {
    const [termo, setTermo] = useState('');

    const produtosFiltrados = produtos.filter((produto) =>
        produto.titulo.toLocaleLowerCase().includes(termo.toLocaleLowerCase()))
    return (
        <View style={styles.main}>
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite o nome do produto'
                    value={termo}
                    onChangeText={setTermo}
                ></TextInput>
            </View>

            <FlatList
                //indica onde os dados vem
                data={produtosFiltrados}
                //este e o indentificador.DEVE ser STRING
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

                    <View style={styles.div}>
                        <Image style={styles.foto} source={{ uri: item.imagem }}>

                        </Image>
                        <View style={styles.divPreco}>
                            <Text style={styles.titulos} >{item.titulo}</Text>
                            <Text style={styles.textPreco} >R$ {item.preco}</Text>
                        </View>

                        <Btn />

                    </View>
                )
                }
            >

            </FlatList >

        </View>
    )
}

export default Busca

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#F5F5F5'
    },
    textInput: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 400,
        height: 35,

        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 10,

        fontFamily: 'arial',

        backgroundColor: '#FFFFFF',
        color: '#222222'

    },
    divPreco: {
        width: '100%',
        justifyContent: 'flex-start',

        gap: 4,

    },
    div: {
        flexDirection: 'column',
        width: 200,
        height: 300,

        gap: 8,
        margin: 4,
        borderRadius: 8,

        alignItems: 'center',

        boxShadow: '0px 10px 10px rgba(0,0,0,0.25)',

        overflow: 'hidden'

    },
    foto: {
        width: '100%',
        height: '60%',

        borderRadius: 10,

        backgroundColor: 'red'
    },
    titulos: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: '600',
        color:'#222222'
    },
    textPreco: {
        fontSize: 18,
        fontFamily: 'arial',
        fontWeight: '600',
        color: 'green'
    },

})
