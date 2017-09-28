import React, {Component} from 'react';
import { View,Text,Button,TextInput,Image,ImageBackground,TouchableOpacity,TouchableHighlightBackHandler,ToastAndroid } from 'react-native';
import styles from '../styles/style';
import personData from '../data/personData';
import Conversation from './Conversation';

export default class Main extends Component{
	constructor(props){
		super(props)
		this.state={
			param:''
		}
	}
	static navigationOptions = {
		header:null
	}
	componentWillMount(){
		const { params } = this.props.navigation.state;
		for(var i = 0; i < personData.length; i++){
			if(personData[i].mid === params.userId){
				this.setState({
					param:personData[i]
				})
			}
		}
	}
	render(){
		return(
			<View style={[styles.container,{position:'relative'}]}>
				<ImageBackground  source={this.state.param.headerImg} style={styles.coverFs}>
					<View style={styles.header}>
						<TouchableOpacity activeOpacity={0.9} onPress={() => {this.props.navigation.goBack()}}>
							<View style={{flexDirection:'row'}}>
								<Image source={require('../images/backarrow.png')} style={styles.backArrow} />
								<Text style={styles.goback}>返回</Text>
							</View>
						</TouchableOpacity>
						
						<Text style={styles.headertitle}>{this.state.param.name}的主页</Text>
					</View>
				</ImageBackground>
				<View style={{
					flexDirection: 'row',
					justifyContent: 'flex-start',
					paddingLeft:20,
					paddingRight:20,
					marginTop:-40
				}}>
					<Image source={this.state.param.headerImg} style={styles.lsAvatar}/>
					<View>
						<Text style={styles.lsName}>{this.state.param.name}</Text>
						<Text style={styles.lsAgeAndArea}>{this.state.param.age} | {this.state.param.sex}</Text>
						<Text style={styles.lsAgeAndArea}>{this.state.param.area}</Text>
					</View>
				</View>
				<Text style={styles.lsDesc}>
					{this.state.param.desc}
				</Text>

				<View style={styles.lsAlbumLists}>
					<View style={styles.lsAlbumBox}>
						<Image source={this.state.param.headerImg} style={styles.lsAlbum}/>
						<Text style={styles.lsAlbumTitle}>相册（8张）</Text>
					</View>
					<View style={styles.lsAlbumBox}>
						<Image source={this.state.param.headerImg} style={styles.lsAlbum}/>
						<Text style={styles.lsAlbumTitle}>喜欢（10张）</Text>
					</View>
					<View style={styles.lsAlbumBox}>
						<Image source={this.state.param.headerImg} style={styles.lsAlbum}/>
						<Text style={styles.lsAlbumTitle}>想买（24张）</Text>
					</View>
					<View style={styles.lsAlbumBox}>
						<Image source={this.state.param.headerImg} style={styles.lsAlbum}/>
						<Text style={styles.lsAlbumTitle}>礼物（12张）</Text>
					</View>
				</View>
				<View style={styles.fsMore}>
					<Text style={styles.fsMoreT1}>她的资料</Text>
					<Text style={ styles.fsMoreT2}>more...</Text>
				</View>
				<View style={styles.lsLabelLists}>
					<Text style={styles.lsLabel}>{this.state.param.label[0]}</Text>
					<Text style={styles.lsLabel}>{this.state.param.label[1]}</Text>
					<Text style={styles.lsLabel}>{this.state.param.label[2]}</Text>
					<Text style={styles.lsLabel}>{this.state.param.label[3]}</Text>
					<Text style={styles.lsLabel}>{this.state.param.label[4]}</Text>
				</View>
				<View style={styles.lsBtnList}>
					<Text style={styles.lsBtn} onPress={()=>{this.props.navigation.navigate('Conversation',{userId:this.state.param.mid})}}>跟TA聊天</Text>
					<Text style={styles.lsBtn}>结为好友</Text>
					<Text style={styles.lsBtn}>赠送礼物</Text>
				</View>

			</View>
		);
	};
};

