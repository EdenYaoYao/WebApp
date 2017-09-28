import React, {Component} from 'react';
import { View,Text,Image,ImageBackground,FlatList,TouchableHighlight } from 'react-native';
import styles from '../styles/style';
import personData from '../data/personData';

const titles = '觅排行';
let rank = 0;

export default class Mrankings extends Component{
	constructor(props){
		super(props)
	}
	static navigationOptions = {
		headerTitle:<View style={{flexDirection:'row',alignSelf:'center'}}>
			<Text style={{paddingLeft:2,paddingRight:2,borderWidth:1,borderColor:'white',borderTopLeftRadius:5,borderBottomLeftRadius:5,color:'#77428d',backgroundColor:'white'}}>魅力男女</Text>
			<Text style={{paddingLeft:2,paddingRight:2,borderWidth:1,borderColor:'white',color:'white'}}>消费排行</Text>
			<Text style={{paddingLeft:2,paddingRight:2,borderWidth:1,borderColor:'white',borderTopRightRadius:5,borderBottomRightRadius:5,color:'white'}}>时尚排行</Text>
		</View>,
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
	        	source={focused?require('../images/icon4.png'):null}
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
							onPress={()=>alert(item.mid)} 
						>
							<View style={[styles.rowSty,styles.rowHeight,{position:'relative'}]}>
								<Image source={require('../images/ranking/ranking.png')} style={{width:30,height:26,marginLeft:10,marginTop:30}}>
									<Text style={{color:'white',textAlign:'center',marginTop:7}}>{rank+=1}</Text>
								</Image>
				              	<Image source={item.headerImg} style={styles.imgSty}/>
				              	<View>
				              		<Text style={styles.userName}>{item.name}</Text>
				              		<Text style={styles.userArea}>{item.age}岁 | {item.area}</Text>
				              		<Text style={styles.userDesc}>{item.desc}</Text>
				              	</View>
				              	<View style={{flexDirection:'row',position:'absolute',top:10,right:10}}>
				              		<Text>{item.charmNumber}</Text>
				              		<Image source={require('../images/ranking/rankfire.png')} style={styles.imgfire}/>
				              	</View>
				            </View>
				        </TouchableHighlight>
			        }
			        getItemLayout={(data, index) => ({length:80,offset:(80+1)*index,index})}
				/>
			</View>
		)
	}
}