import React, {Component} from 'react';
import { View,Text,Image,ImageBackground } from 'react-native';
import Wardrobe from '../pagesecond/Wardrobe';
import styles from '../styles/style';

const titles = '觅时尚';

export default class Mfashion extends Component{
	constructor(props){
		super(props)
	}
	static navigationOptions = {
		header:null,
	    tabBarLabel:({focused}) => focused?' ':titles,
		tabBarIcon: ({ tintColor,focused }) => (
	      	<Image
	        	source={focused?require('../images/icon3.png'):null}
	        	style={[styles.icon,{tintColor:tintColor}]}
	      	/>
	    )
	}
	render(){
		return(
			<View style={styles.container}>
				<ImageBackground  source={require('../images/fashion/coverFashion.png')} style={styles.coverFs} />
				<View style={styles.fsMore}>
					<Text style={styles.fsMoreT1}>衣橱</Text>
					<Text style={ styles.fsMoreT2} onPress={()=>{this.props.navigation.navigate('Wardrobe')}}>more...</Text>
				</View>
				<View style={styles.fsLists}>
					<View>
						<Image source={require('../images/fashion/衣橱1.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>夏季流行</Text>
					</View>
					<View>
						<Image source={require('../images/fashion/衣橱2.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>时尚潮流</Text>
					</View>
					<View>
						<Image source={require('../images/fashion/衣橱3.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>返璞归真</Text>
					</View>
					<View>
						<Image source={require('../images/fashion/衣橱4.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>轻衣薄衫</Text>
					</View>
				</View>

				<View style={styles.fsMore}>
					<Text style={styles.fsMoreT1}>鞋柜</Text>
					<Text style={ styles.fsMoreT2}>more...</Text>
				</View>
				<View style={styles.fsLists}>
					<View>
						<Image source={require('../images/fashion/鞋柜1.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>高跟鞋</Text>
					</View>
					<View>
						<Image source={require('../images/fashion/鞋柜2.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>松糕鞋</Text>
					</View>
					<View>
						<Image source={require('../images/fashion/鞋柜3.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>单鞋</Text>
					</View>
					<View>
						<Image source={require('../images/fashion/鞋柜4.png')} style={styles.itemImg}/>
						<Text style={styles.fsListText}>厚底鞋</Text>
					</View>
				</View>
			</View>
		)
	}
}
