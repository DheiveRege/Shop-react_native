import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Btn = () => {
    return (
        <View>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.text}>Compar</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Btn

const styles = StyleSheet.create({
    botao: {
        justifyContent: 'center',
        alignItems: 'center',

        width: 180,
        height: 35,

        borderRadius: 10,

        backgroundColor: 'royalblue',
    },
    text: {
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 12,
    }
})