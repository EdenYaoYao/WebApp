import React,{Component} from 'react';
import { Dimensions,View,Text,Image,TextInput,TouchableOpacity,FlatList,KeyboardAvoidingView } from 'react-native';
import styles from '../styles/style';
import personData from '../data/personData';

const {width,height} = Dimensions.get('window');
//let chat= [];
export default class Conversation extends Component{
	constructor(props){
		super(props)
		this.state={
			param:'',
			input: null,
			chat:[]
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
	sendBtn(){
		if(this.state.input == null){
		}
		else{
			this.setState((state)=>({
				chat:state.chat.concat([{text:this.state.input,headerIcon:require('../images/img-header.png')}]),
				input:null
			}))
			this._flatList.scrollToEnd();
		}
		// if(this.state.input === null){
		// }else{
		// 	chat.push({text:this.state.input,headerIcon:require('../images/img-header.png')});
		// 	this.setState({
		// 		input:null
		// 	});
		// 	this._flatList.scrollToEnd();
		// }
		
	}
	render(){
		return(
			<View style={[styles.container,{position:'relative'}]}>
				<View style={[styles.header,{backgroundColor:'#77428d'}]}>
					<TouchableOpacity activeOpacity={0.9} onPress={() => {this.props.navigation.goBack()}}>
						<View style={{flexDirection:'row'}}>
							<Image source={require('../images/backarrow.png')} style={styles.backArrow} />
							<Text style={styles.goback}>返回</Text>
						</View>
					</TouchableOpacity>
					<Text style={styles.headertitle}>{this.state.param.name}({this.state.param.userName})</Text>
					<Image source={require('../images/uerMsgIcon.png')} style={styles.uerMsgIcon} />
				</View>
				<View style={styles.conversationHeader}>
					<Text style={{color:'white',alignSelf:'center'}}>赠送礼物</Text>
					<Text style={{color:'white',alignSelf:'center'}}>加为好友</Text>
					<Text style={{color:'white',alignSelf:'center'}}>聊天记录</Text>
					<Text style={{color:'white',alignSelf:'center'}}>加黑名单</Text>
				</View>
				<View style={{marginBottom:120}}>
					<FlatList
						ref={(flatList)=>this._flatList = flatList}
						data={this.state.chat}
						keyExtractor={(item, index) => index}
						renderItem={({item})=>
							<View style={[styles.rowSty,styles.chatList]}>
				              	<Text style={styles.chatItemText}>{item.text}</Text>
				              	<Image source={item.headerIcon} style={styles.chatAvatar}/>
				            </View>
				        }
				        getItemLayout={(data, index) => ({length:40,offset:40*index,index})}
					/>
				</View>
				<View style={styles.send}>
					<View style={styles.sendInput} >
						<TextInput style={{width:234,height:40}} value={this.state.input} onChangeText={(val)=>this.setState({input:val})} />
						<Image source={require('../images/conversation/emoji.png')} style={styles.sendEmoji}/>
					</View>
					<Image source={require('../images/conversation/album.png')} style={styles.sendAlbum} />
					<Text style={styles.sendBtn} onPress={this.sendBtn.bind(this)}>发送</Text>
				</View>
			</View>
		)
	}
}