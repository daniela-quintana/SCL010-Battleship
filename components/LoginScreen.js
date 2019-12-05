import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button, Avatar, Icon, Overlay} from 'react-native-elements';

class LoginScreen extends React.Component {
	static navigationOptions = ({ navigation, navigationOptions }) => {
		const { params } = navigation.state;		
  
		return {
		   title: params ? params.otherParam : 'Modo de Juego',
		   headerStyle: {
			   backgroundColor: navigationOptions.headerTintColor,
		   },
		    headerTintColor: navigationOptions.headerStyle.backgroundColor,
			 headerRight: () => (
				<Icon
				reverse
					name='question'
					type='font-awesome'
					color="#196EB0"
					size={15}
					onPress={() => navigation.navigate('MyModal')}
		      />
			)

		};
	};
  
		
   render() {
	const { navigation } = this.props;
	return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         
	         <Text style={styles.mainTitle}>Bienvenido</Text>
	         
	         <Avatar
				   rounded
				   size="xlarge"
				   icon={{name: 'user', type: 'font-awesome'}}
				   onPress={() => console.log("Works!")}
				   activeOpacity={0.7}
				   showEditButton
				/>
				<Text style={styles.userName}>Usuario</Text>
				
	         <View style={{marginTop: 30}}>
	            <Button 
	               title="Jugar online"
	               type="outline"
	               buttonStyle={{marginBottom: 10}}
	            />
					<Button title="Jugar contra la computadora" type="outline" buttonStyle={{marginBottom: 10}}/>
	            <Button title="Invita a un amigo a jugar" buttonStyle={{marginBottom: 10}}/>
	         </View>
	         				
         </View>
      );
   }
}
 
export default LoginScreen;

const styles = StyleSheet.create({
	screen: {
	padding: 40, 
	flex: 1, 
	justifyContent: "center", 
	alignItems: 'center'
	},
	
	input: {
	width: '100%',
	margin: 10,
	borderBottomColor: 'black',
	borderBottomWidth: 1,
	padding: 10
	},
	
	mainTitle: {
		fontSize: 20,
		marginBottom: 20
	},
	
	userName: {
		fontSize: 25,
		color: "#1F89DC",
		marginVertical: 15
	}
	
 });