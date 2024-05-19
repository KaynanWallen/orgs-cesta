import { Image, StyleSheet, Text, View } from 'react-native'
import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'
import Texto from '../../components/Texto'
import Topo from './components/Topo'
import Detalhes from './components/Detalhes'


export default function Cesta({topo, detalhes}) {
    return (
        <>
           <Topo {...topo}/>
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    
})