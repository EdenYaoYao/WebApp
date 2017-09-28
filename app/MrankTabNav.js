import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import MrankDay from './pages/mrank/MrankDay';
import MrankWeek from './pages/mrank/MrankWeek';
import MrankMonth from './pages/mrank/MrankMonth';
import MrankTotal from './pages/mrank/MrankTotal';

const MrankTabNav = TabNavigator({
    MrankDay: {
        screen: MrankDay,
    },
    MrankWeek: {
        screen: MrankWeek,
    },
    MrankMonth: {
        screen: MrankMonth,
    },
    MrankTotal: {
        screen: MrankTotal,
    },
}, {
    tabBarPosition: 'top',
    tabBarOptions: {
        pressColor:'#8f59a6',
        activeTintColor: '#FFF',
        labelStyle:{
            color:'white',
        },
        style: {
            height:30,
            backgroundColor: '#77428d'
        },
        tabStyle:{
            marginTop:2,
            height:28,
            backgroundColor: '#8f59a6'
        },
        indicatorStyle:{
            position:'absolute',
            top:0,
            height:2,
            backgroundColor: 'white'
        }
    }
});
export default MrankTabNav;