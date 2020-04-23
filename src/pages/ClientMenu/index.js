import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

import Home from '../Home';
import Notifications from '../Notifications';
import Charts from '../Charts';
import Info from '../Info'
import Profile from '../Profile'

const Tab = createMaterialBottomTabNavigator();


export default function ClientMenu() {

    return (
        <Tab.Navigator
            initialRouteName='Feed'
            activeColor='#FFF'
            style={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name='Feed'
                component={Home}
                options={{
                    tabBarLabel: 'Visão Geral',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='Notifications'
                component={Notifications}
                options={{
                    tabBarLabel: 'Notificações',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='bell' color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name='Charts'
                component={Charts}
                options={{
                    tabBarLabel: 'Gráficos',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='chart-bar' color={color} size={26} />
                    ),
                }} //bar-chart-2
            />
            <Tab.Screen
                name="Info"
                component={Info}
                options={{
                    tabBarLabel: 'Info',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="information" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}