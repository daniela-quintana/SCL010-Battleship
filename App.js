import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Button, Icon } from 'react-native-elements';
//components
import LoginScreen from './components/LoginScreen'

//  class LogoTitle extends React.Component {
// 	render() {
// 	  return (
// 	  <Text title="BattlePet"></Text>
// 		//  <Image
// 		// 	source={require('./assets/icon.png')}
// 		// 	style={{ width: 30, height: 30 }}
// 		//  />
// 	  );
// 	}
//  }
 
class HomeScreen extends React.Component {
 
   constructor(props){
      super(props);
      this.state = {
         userName: '',
      }
   }

	static navigationOptions = ({ navigation }) => {
 
		return {
			headerTitle: () => (
				<Text style={{ color: "#fff", fontSize: 20}}>BattlePet</Text>
			),
			headerRight: () => (
				<Icon
				raised
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
		const usernameHandler = () => {
         console.log(this.state.userName)
      }

	  return (
			<View style={styles.screen}>
            <Text style={{fontSize:20, textAlign: 'center'}}>¡Bienvenido a Battleship! </Text>
            <Text style={{marginBottom:20, textAlign: 'center'}}>Antes de empezar ingresa tu nombre</Text> 
            <View>
		 	      <TextInput 
			         placeholder="Ingresa tu nombre"
			         style={styles.input}
			         onChangeText={(userName) => this.setState({userName})}
			         //  value={this.state.userName}
			      />
		         <Button
			         title="Comenzar a jugar"
						buttonStyle={{paddingHorizontal: 30}}
			         onPress={() => { this.props.navigation.navigate('Login'); {usernameHandler()} }}
		         />
            </View>
         </View>	  
      );
	}
}
 
class ModalScreen extends React.Component {
	render() {
	   return (
		   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text style={{ fontSize: 30 }}>¿Como Jugar?</Text>
				<Text>1. Selecciona un modo de juego</Text>
				<Text>2. Posiciona a tu mascota dentro del tu tablero</Text>


				<Button
				   onPress={() => this.props.navigation.goBack()}
				   title="Volver"
				/>
		   </View>
	   );
	}
}
 
const MainStack = createStackNavigator(
	{
	   Home: {
		   screen: HomeScreen,
	   },
	   Login: {
		   screen: LoginScreen,
	   },
	},
	{
	   initialRouteName: 'Home',
	   defaultNavigationOptions: {
		   headerStyle: {
			backgroundColor: '#1F89DC',
		   },
		   headerTintColor: '#fff',
		   headerTitleStyle: {
			fontWeight: 'normal',
		   },
	   },
	}
);
 
const RootStack = createStackNavigator(
	{
	   Main: {
		   screen: MainStack,
	   },
	   MyModal: {
		   screen: ModalScreen,
	   },
	},
	{
	   mode: 'modal',
	   headerMode: 'none',
	}
);
 
const AppContainer = createAppContainer(RootStack);
 
export default class App extends React.Component {
	render() {
	   return <AppContainer />;
	}
}
 
const styles = StyleSheet.create({
   screen: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: 'center'
   },
  
	input: {
      margin: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
	   padding: 10,
	   textAlign: "center"
   }
});

