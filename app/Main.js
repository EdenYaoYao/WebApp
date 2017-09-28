import React, {Component} from 'react';
import { View,Text,Button,TextInput,Image,BackHandler,ToastAndroid } from 'react-native';
import styles from './styles/style';
import personData from './data/personData';

var endtime = 0;
export default class Main extends Component{
	static navigationOptions = {
		headerTitle:'用户登录',
		headerLeft:null,
		headerStyle:{
			height:40,
			elevation:0,//去阴影
			backgroundColor:'#77428d'
		},
		headerTitleStyle:{
			color:'white',
			fontSize:16,
			alignSelf:'center'
		}
	}
	constructor(){
		super()
		this.state={
			user:'',
			pwd:''
		};
	}

	componentWillMount(){
		BackHandler.addEventListener('hardwareBackPress',this._onBack);
	}
	_onBack(){
		let timer = new Date().getTime();
		if(timer - endtime <= 2000){
			return false;
		}
		endtime = timer;
		ToastAndroid.show('再次点击退出!', ToastAndroid.SHORT);
		return true;
	}

	checkLogin(){
		// for(var i = 0; i < personData.length; i++){
		// 	if(personData[i].userName === this.state.user){
		// 		if(personData[i].userPassword === this.state.pwd){
					const { navigate } = this.props.navigation;
					navigate('TabNav');
					ToastAndroid.show('登录成功!', ToastAndroid.SHORT);
		// 		}
		// 		else{
		// 			alert('输入有误,请重新输入');
		// 		}
		// 	}
		// }
	}
	register(){
	}

	render(){
		return(
			<View style={styles.container}>
				<View>
					<Image source={require('./images/img-header.png')} style={styles.headImgSty} />
				</View>
				<View style={styles.marginLR}>	
					<View style={styles.textViewSty}>
						<Text  style={styles.inpTextSty}>账号</Text>
						<TextInput
							style={styles.inpSty}
							placeholder='                      手机号/用户名/邮箱' 
							placeholderTextColor='#cfcfcf'
							underlineColorAndroid='transparent'
							onChangeText={(val)=>this.setState({user:val})}
							keyboardType='email-address'
						/>
					</View>
					<View style={styles.textViewSty}>
						<Text style={styles.inpTextSty}>密码</Text>
						<TextInput
							style={styles.inpSty}
							placeholder='                          请输入您的密码' 
							placeholderTextColor='#cfcfcf'
							underlineColorAndroid='transparent'
							secureTextEntry={true}
							onChangeText={(val)=>this.setState({pwd:val})}
						/>
					</View>
					<View>
						<Text style={styles.forgetPwdSty}>忘记密码?</Text>
					</View>
				</View>

				<View style={[styles.loginBtnSty,styles.marginLR]}>
					<Button title='登 录' color='#77428d' onPress={this.checkLogin.bind(this)} />
				</View>
				<View style={[styles.loginBtnSty,styles.marginLR]}>
					<Button title='注 册' color='#77428d' onPress={this.register.bind(this)} />
				</View>
				
				<View style={styles.thirdViewSty}>
					<Text style={styles.thirdSpan}>第三方合作登录</Text>
					<View style={[styles.thirdSty,styles.marginLR]}>
						<Image source={require('./images/微信.png')} style={styles.thirdImgSty} />
						<Image source={require('./images/新浪.png')} style={styles.thirdImgSty} />
						<Image source={require('./images/QQ.png')} style={styles.thirdImgSty} />
					</View>
				</View>
			</View>
		);
	};
};

