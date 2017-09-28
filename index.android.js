/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator,TabNavigator,NavigationActions,Navigator } from 'react-navigation';
import Main from './app/Main';
import TabNav from './app/TabNav';
import ListScreen from './app/pagesecond/ListScreen';
import Conversation from './app/pagesecond/Conversation';
import City from './app/pagesecond/City';
import Wardrobe from './app/pagesecond/Wardrobe'

import LaunchImg from './app/launchimg/LaunchImg'

const WebApp = StackNavigator({
	LaunchImg:{screen:LaunchImg},
    Main:{screen:Main},
    TabNav:{screen:TabNav},
    ListScreen:{screen:ListScreen},
    Conversation:{screen:Conversation},
    Wardrobe:{screen:Wardrobe},
    City:{screen:City}
});

const defaultGetStateForAction = WebApp.router.getStateForAction;
WebApp.router.getStateForAction = (action, state) => {
    if (state && action.type === NavigationActions.BACK){
    	if(action.key){
    		return defaultGetStateForAction(action, state);
    	}
        return null;
    }
    return defaultGetStateForAction(action, state);
};

AppRegistry.registerComponent('WebApp', () => WebApp);
