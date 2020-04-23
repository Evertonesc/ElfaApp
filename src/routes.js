import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();

import Login from './pages/Login';
import ElfaServices from './pages/ElfaServices';
import Charts from './pages/Charts';
import ClientMenu from './pages/ClientMenu';

export default function Routes (){
    return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ElfaServices" component={ElfaServices} />
        <Stack.Screen name="Charts" component={Charts}/>
        <Stack.Screen name="ClientMenu" component={ClientMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}




