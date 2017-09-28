import React, {Component} from 'react';
import { View,Text,Image,ImageBackground,FlatList,TouchableHighlight } from 'react-native';
import styles from '../../styles/style';
import personData from '../../data/personData';
import ListScreen from '../../pagesecond/ListScreen';
import _ from 'lodash';

var arrData = _.cloneDeep(personData);
const titles = '觅排行';

export default class MrankTotal extends Component{
	constructor(props){
		super(props)
	}

	static navigationOptions = {
		headerTitle:'觅排行',
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
		tabBarLabel:('总排行')
	}

	componentWillMount(){
		var num = 0;
		for(var i = 0;i<arrData.length - 1;i++){
			for(var j = 0;j < arrData.length - 1 -i;j++){
				if(arrData[j].totalNumber <= arrData[j+1].totalNumber){
					num = arrData[j];
					arrData[j] = arrData[j+1];
					arrData[j+1] = num;	
				}
			}
		}
		for(var i = 0;i<arrData.length;i++){
			arrData[i].rankNum = i+1;
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<FlatList
					data={arrData}
					keyExtractor={(item, index) => index}
					renderItem={({item})=>
						<TouchableHighlight 
							underlayColor="#cfcfcf"
							activeOpacity={1}
							onPress={()=>{this.props.navigation.navigate('ListScreen',{userId:item.mid})}} 
						>
							<View style={[styles.rowSty,styles.rowHeight]}>
								{item.rankNum <= 3 ? <Image source={require('../../images/ranking/ranking.png')} style={styles.rankDimg}>
									<Text style={styles.rankDsort}>{item.rankNum}</Text>
								</Image> : <Image source={require('../../images/ranking/circle.png')} style={styles.rankDcircle}>
									<Text style={styles.rankDsort}>{item.rankNum}</Text>
								</Image>}
				              	<Image source={item.headerImg} style={styles.imgSty}/>
				              	<View>
				              		<Text style={styles.userName}>{item.name}</Text>
				              		<Text style={styles.userArea}>{item.age}岁 | {item.area}</Text>
				              		<Text style={styles.userDesc}>{item.desc}</Text>
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