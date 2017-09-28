import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import Mseek from './pages/Mseek';
import Mconversation from './pages/Mconversation';
import Mfashion from './pages/Mfashion';
import Mmanage from './pages/Mmanage';
import MrankTabNav from './MrankTabNav';

const TabNav = TabNavigator({
    Mseek: {
        screen: Mseek,
    },
    Mconversation: {
        screen: Mconversation,
    },
    Mfashion: {
        screen: Mfashion,
    },
    MrankTabNav: {
        screen: MrankTabNav,
    },
    Mmanage: {
        screen: Mmanage,
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:false,
    tabBarOptions: {
        pressColor:'#8f59a6',
        activeTintColor: '#FFF',
        showIcon:true,
        iconStyle:{
            position:'absolute'
        },
        labelStyle:{
            color:'white',
            position:'absolute'
        },
        style: {
            height:48,
            backgroundColor: '#77428d'
        },
        tabStyle:{
            height:46,
            backgroundColor: '#8f59a6'
        },
        indicatorStyle:{
            height:2,
            backgroundColor: 'white'
        }
    }
});
export default TabNav;