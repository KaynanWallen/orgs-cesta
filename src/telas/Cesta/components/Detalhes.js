import {Image, StyleSheet, TouchableOpacity, View } from "react-native"
import Texto from "../../../components/Texto"

import logo from '../../../../assets/logo.png'
export default function Detalhes({nome, imagemFazenda, nomeFazenda, descricao, preco, botao}) {
    return (
        <>
            <Texto style={estilos.nome}>{nome}</Texto>
            <View style={estilos.fazenda}>
                <Image source={imagemFazenda} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
            </View>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <TouchableOpacity style={estilos.botao} onPress={() => {}}>
                <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
    botao: {
        marginTop:16,
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        lineHeight: 26
    }
})