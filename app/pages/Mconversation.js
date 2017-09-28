import React, {Component} from 'react';
import { View,Text,Image,FlatList,TouchableHighlight } from 'react-native';
import styles from '../styles/style';
import personData from '../data/personData';
import Conversation from '../pagesecond/Conversation';

const titles = '觅会话';

export default class Mconversation extends Component{
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
	        	source={focused?require('../images/icon2.png'):null}
	        	style={[styles.icon,{tintColor:tintColor}]}
	      	/>
	    )
	}
	
	render(){
		return(
			<View style={styles.container}>
				<FlatList
					data={personData}
					keyExtractor={(item, index) => index}
					renderItem={({item})=>
						<TouchableHighlight 
							underlayColor="#cfcfcf"
							activeOpacity={1}
							onPress={()=>{this.props.navigation.navigate('Conversation',{userId:item.mid})}} 
						>
							<View style={[styles.rowSty,styles.rowHeight]}>
				              	<Image source={item.headerImg} style={styles.imgSty}/>
				              	<View>
				              		<Text style={styles.userName}>{item.name}</Text>
				              		<Text style={styles.userArea}>{item.age}岁 | {item.area}</Text>
				              		<Text style={styles.userDesc}>{item.desc}</Text>
				              	</View>
				            </View>
				        </TouchableHighlight>
			        }
			        ItemSeparatorComponent={()=><Text style={styles.itemSeparator}/>}
			        getItemLayout={(data, index) => ({length:80,offset:(80+1)*index,index})}
				/>
			</View>
		)
	}
}
