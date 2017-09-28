import React, {Component} from 'react';
import { StackNavigator,TabNavigator,NavigationActions } from 'react-navigation';
import { View,Text,ImageBackground } from 'react-native';
import Main from '../Main'
import styles from '../styles/style';

export default class LaunchImg extends Component {
    constructor(props){
        super(props)
        this.state={
            skip:3
        }
    }
    static navigationOptions = {
        header:null
    }
    render(){
        return(
            <ImageBackground source={require('../images/launch/launchicon.png')} style={[styles.container,{position:'relative'}]}>
                <Text style={styles.launchSkip} onPress={()=>{this.props.navigation.navigate('Main')}}>{this.state.skip}S跳过</Text>
            </ImageBackground>
        )
    }
    componentDidMount(){
        var play = setInterval(()=>{
            this.state.skip --;
            this.setState({
                skip:this.state.skip
            });
        },1000)
        setTimeout(()=>{
            clearInterval(play)
            this.props.navigation.navigate('Main');
        }, 3000)
    }
}