import React, {Component} from 'react';
import { View,Text,TextInput,Image,ImageBackground,ToastAndroid } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from '../styles/style';

const titles = '觅管理';

export default class Mmanage extends Component{
	constructor(props){
		super(props)
	}
	static navigationOptions = {
		headerTitle:titles,
		headerLeft:null,
		headerStyle:{
			height:40,
			elevation:0,
			backgroundColor:'#77428d'
		},
		headerTitleStyle:{
			color:'white',
			fontSize:16,
			alignSelf:'center'
		},
	    tabBarLabel:({focused}) => focused?' ':titles,
		tabBarIcon: ({ tintColor,focused }) => (
	      	<Image
	        	source={focused?require('../images/icon5.png'):null}
	        	style={[styles.icon,{tintColor:tintColor}]}
	      	/>
	    )
	}
	logout(){
		const { navigate } = this.props.navigation;
		navigate('Main');
		ToastAndroid.show('您已退出登录!', ToastAndroid.SHORT);
	}
	render(){
		return(
			<View style={[styles.container,{backgroundColor:'#eee'}]}>
				<View>
					<TextInput
						style={styles.search}
						placeholder='搜索...'
						placeholderTextColor='#cfcfcf'
						underlineColorAndroid='transparent'/>
				</View>
				<View style={{marginBottom:10}}>
					<View style={[styles.manageItem,{borderBottomWidth:0}]}>
						<Image source={require('../images/manage/觅管理0.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>我的首页</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
					<View style={[styles.manageItem,{borderBottomWidth:0}]}>
						<Image source={require('../images/manage/觅管理1.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>谁看过我</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
					<View style={styles.manageItem}>
						<Image source={require('../images/manage/觅管理2.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>账号切换</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
				</View>
				<View style={{marginBottom:10}}>
					<View style={[styles.manageItem,{borderBottomWidth:0}]}>
						<Image source={require('../images/manage/觅管理3.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>官方活动</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
					<View style={[styles.manageItem,{borderBottomWidth:0}]}>
						<Image source={require('../images/manage/觅管理4.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>充值银豆</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
					<View style={[styles.manageItem,{borderBottomWidth:0}]}>
						<Image source={require('../images/manage/觅管理5.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>道具商城</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
					<View style={styles.manageItem}>
						<Image source={require('../images/manage/觅管理6.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>礼物通知</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
				</View>
				<View>
					<View style={styles.manageItem}>
						<Image source={require('../images/manage/觅管理7.png')} style={styles.icon}/>
						<Text style={styles.manageItemText}>系统设置</Text>
						<Image source={require('../images/manage/箭头.png')} style={styles.arrowIcon}/>
					</View>
				</View>
				<Text style={styles.logout} onPress={this.logout.bind(this)}>退出登录</Text>
			</View>
		)
	}
}
