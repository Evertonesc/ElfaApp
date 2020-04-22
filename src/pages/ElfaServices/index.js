import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';

import Charts from '../Charts';


export default function ElfaServices() {

  const navigation = useNavigation();

  function navigateToCharts(){
    navigation.navigate('Charts');
  }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Elfa Services</Text>

        <TouchableOpacity style={styles.loginBtn} onPress={() => navigateToCharts(Charts)}>
          <Text>Go to Charts</Text>
          
      </TouchableOpacity>
      </View>
    );
  }