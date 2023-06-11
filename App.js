import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import MainScreen from './src/screens/MainScreen';
import Tela1Screen from './src/screens/Tela1Screen';
import Tela2Screen from './src/screens/Tela2Screen';
import Tela3Screen from './src/screens/Tela3Screen';
import { Image } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Ferrari" component={Tela1Screen} />
        <Stack.Screen name="Lamborguini" component={Tela2Screen} />
        <Stack.Screen name="Porsche" component={Tela3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
