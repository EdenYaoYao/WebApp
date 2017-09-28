import React, {Component} from 'react';
import { View,Text,Image,ImageBackground,TouchableOpacity } from 'react-native';
import styles from '../styles/style';


export default class Wardrobe extends Component{
	constructor(props){
		super(props)
	}
	static navigationOptions = {
		header:null
	}
	render(){
		return(
			<View style={styles.container}>
				<View style={[styles.header,{backgroundColor:'#77428d'}]}>
					<TouchableOpacity activeOpacity={0.9} onPress={() => {this.props.navigation.goBack()}}>
						<View style={{flexDirection:'row'}}>
							<Image source={require('../images/backarrow.png')} style={styles.backArrow} />
							<Text style={styles.goback}>返回</Text>
						</View>
					</TouchableOpacity>
					<Text style={styles.headertitle}>衣橱</Text>
				</View>
				<View style={styles.fsMore}>
					<Text style={styles.fsMoreT1}>夏季流行</Text>
					<Text style={ styles.fsMoreT2}>more...</Text>
				</View>
				<View style={styles.fsLists}>
					<Image source={require('../images/wardrobe/wardrobeicon001.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon002.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon003.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon004.png')} style={{width:85,height:150}}/>
				</View>
				<View style={styles.fsMore}>
					<Text style={styles.fsMoreT1}>时尚潮流</Text>
					<Text style={ styles.fsMoreT2}>more...</Text>
				</View>
				<View style={styles.fsLists}>
					<Image source={require('../images/wardrobe/wardrobeicon005.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon006.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon007.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon008.png')} style={{width:85,height:150}}/>
				</View>
				<View style={styles.fsMore}>
					<Text style={styles.fsMoreT1}>返璞归真</Text>
					<Text style={ styles.fsMoreT2}>more...</Text>
				</View>
				<View style={styles.fsLists}>
					<Image source={require('../images/wardrobe/wardrobeicon009.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon010.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon011.png')} style={{width:85,height:150}}/>
					<Image source={require('../images/wardrobe/wardrobeicon012.png')} style={{width:85,height:150}}/>
				</View>
			</View>
		)
	}
}
