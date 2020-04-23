import * as React from 'react';
import { View, Image, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import icon from '../../../assets/icon.png'

import styles from './styles';

export default function Home() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={icon} style={styles.icon} />
                <Text style={styles.headerText}>Olá, Everton Costa!</Text>
            </View>

            <View style={styles.boxes}>
                <View style={styles.box1}>
                    
                    <Text style={styles.boxesText}><MaterialCommunityIcons name='email' size={20} color="#FFF"/>  Clientes Cadastrados</Text>
                    <Text style={styles.boxesText}>55</Text>
                </View>
                <View style={styles.box2}>
                    
                    <Text style={styles.boxesText}><MaterialCommunityIcons name='file-multiple' size={20} color="#FFF" />  Projetos Cadastrados</Text>
                    <Text style={styles.boxesText}>5785</Text>
                </View>
                <View style={styles.box3}>
                    
                    <Text style={styles.boxesText}><MaterialCommunityIcons name='chart-line' size={20} color="#FFF" /> TimeSheet</Text>
                    <Text style={styles.boxesText}>5785</Text>
                </View>
                <View style={styles.box4}>

                    <Text style={styles.boxesText}><MaterialCommunityIcons name='calendar-text' size={20} color="#FFF" />  Apontamento</Text>
                    <Text style={styles.boxesText}>de Horas</Text>
                    <Text style={styles.boxesText}>5</Text>
                </View>
            </View>

        </View>
    )
}

