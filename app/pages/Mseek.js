import React, {Component} from 'react';
import { View,Text,Button,TextInput,Image,ImageBackground,FlatList,TouchableHighlight,ToastAndroid } from 'react-native';
import { StackNavigator,TabNavigator,NavigationActions } from 'react-navigation';
import styles from '../styles/style';
import personData from '../data/personData';
import ListScreen from '../pagesecond/ListScreen';
import City from '../pagesecond/City';

export default class Mseek extends Component{
	constructor(props){
		super(props)
	}

	static navigationOptions = {
		header:null,
		tabBarLabel:({focused}) => focused?' ':'觅觅寻',
		tabBarIcon: ({ tintColor,focused }) => (
	      	<Image
	        	source={focused?require('../images/icon1.png'):null}
	        	style={[styles.icon,{tintColor:tintColor}]}
	      	/>
	    )
	}
	render(){
		return(
			<View style={styles.container}>
				<ImageBackground  source={require('../images/home/封面女神.png')} style={styles.coverGirl}>
					<Text style={styles.coverMsg} onPress={()=>{ this.props.navigation.navigate('City') }}>城市选择</Text>
					<Text style={styles.coverTime}>2017.09.08 第八期</Text>
					<Text style={styles.coverName}>封面女郎</Text>
				</ImageBackground>
				<FlatList
					data={personData}
					keyExtractor={(item, index) => index}
					renderItem={({item})=>
						<TouchableHighlight 
							underlayColor="#cfcfcf"
							activeOpacity={1}
							onPress={()=>{this.props.navigation.navigate('ListScreen',{userId:item.mid})}} 
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
