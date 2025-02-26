import * as React from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CardViewWithImage } from 'react-native-simple-card-view'


import elfaGestão from '../../../assets/Services1.png'
import elfaProjetos from '../../../assets/Services2.png'
import elfaAr from '../../../assets/Services3.png'
import logo from '../../../assets/logo.png'

import styles from './styles';

import ClientMenu from '../ClientMenu';
// import Charts from '../Charts';


export default function ElfaServices() {

  const navigation = useNavigation();
  
  
  // function navigateToCharts(){
  //   navigation.navigate('Charts');
  // }

  function navigateToClientMenu(){
    navigation.navigate('ClientMenu')
  }

    return (
      <View style={styles.container}>
       
        
        <CardViewWithImage
        width= '95%'
        source={ elfaGestão }
        imageWidth={ '100%' }
        imageHeight={ 130 }
        onPress={() => navigateToClientMenu(ClientMenu)}
    />
    

<CardViewWithImage
        width='95%'
        source={ elfaProjetos }
        imageWidth={ '100%' }
        imageHeight={ 130 }
        
    />

<CardViewWithImage
        width='95%'
        source={ elfaAr }
        imageWidth={ '100%' }
        imageHeight={ 130 }
    />
      </View>
    );
  }