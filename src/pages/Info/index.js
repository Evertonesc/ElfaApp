import * as React from 'react';
import { View, AppRegistry, TextInput, Text, TouchableOpacity, Linking } from 'react-native';
import QRCode from 'react-native-qrcode-svg';


import styles from './styles';

export default function Info() {
    const url = 'https://elfaengenharia.com.br/'
    return (
        <View style={styles.container}>

            <QRCode
                value="https://elfaengenharia.com.br/"
                size={150}
                fgColor="#ecf0f5"
                bgColor="#ff8c00"
            />

            <TouchableOpacity
                onPress={() => Linking.openURL(url)}
                style={styles.redirect}
            >
                <Text>Visite nosso site!</Text>
            </TouchableOpacity>
        </View>
    )
}