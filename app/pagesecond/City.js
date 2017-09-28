import React, {Component} from 'react';
import { View,Text,Button,TextInput,Image,TouchableOpacity,SectionList } from 'react-native';
import styles from '../styles/style';
import cityData from '../data/cityData';

export default class Mseek extends Component{
	constructor(props){
		super(props)
		this.state={
			refreshing:false
		}
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
					</TouchableOpacity >
					<Text style={styles.headertitle}>城市选择</Text>
				</View>
				<View style={{backgroundColor:'#6ec4f8'}}>
					<TextInput
						style={styles.search}
						placeholder='请输入城市名称或拼音'
						placeholderTextColor='#cfcfcf'
						underlineColorAndroid='transparent'/>
				</View>
				<SectionList
					sections={cityData}
					keyExtractor={(item, index) => index}
					renderSectionHeader={({section}) => <Text style={styles.citySectionHeader}>{section.key}</Text>}
					renderItem={({item}) => <Text style={styles.cityItem}>{item.title}</Text>}
					ItemSeparatorComponent={()=><Text style={styles.itemSeparator}/>}
					refreshing={this.state.refreshing}
					onRefresh={() => {
			            this.setState({refreshing: true})
			            setTimeout(() => {
			              	alert('没有可刷新的内容！');
			              	this.setState({refreshing: false});
			            }, 2000);
			        }}
				/>
			</View>
		)
	}
}
