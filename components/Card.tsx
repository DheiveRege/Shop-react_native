import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ListarProduto from './ListarProduto'

const Card = () => {
    return (
        <View style={styles.container}>
            <Text>Produtos a venda</Text>
            <ListarProduto />
            
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',


    },

})