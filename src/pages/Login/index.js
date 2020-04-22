import * as React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/logo.png'
import ElfaServices from '../ElfaServices';
import styles from './styles';



export default function Login() {

    const navigation = useNavigation();

    function navigateToServices(){
        navigation.navigate('ElfaServices')
    }

  return (
    <View style={styles.container}>
        <View>
        <Image source={logo}  style={styles.imageLogo}/>
        </View>
      <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder='Login...'
          placeholderTextColor='#003f5c'
          />
      </View>

      <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder='Senha...'
          placeholderTextColor='#003f5c'
          />
      </View>

      <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>


      <TouchableOpacity style={styles.loginBtn} onPress={() => navigateToServices(ElfaServices)}>
          <Text styles={styles.loginText}>LOGIN</Text>
          
      </TouchableOpacity>

    </View>
  );
}