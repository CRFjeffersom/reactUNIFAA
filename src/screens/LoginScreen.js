import React from 'react';
import {View,Text,TextInput,Button,Alert,Image,StyleSheet, TouchableOpacity} from 'react-native';

export default function LoginScreen({ navigation }) {
const handleLogin = () => {
Alert.alert('Login efetuado com sucesso');
navigation.navigate('Main');
};

return (

<View style={styles.container}>

<Text style={styles.text}>Ferrari X Lamborghini X Porsche</Text> 

<TextInput style={styles.input} placeholder="E-mail" />
<TextInput style={styles.input} placeholder="Senha" secureTextEntry />
<Button style={styles.button1} title="Entrar" onPress={handleLogin} />

<Button style={styles.button2} title="Cadastro"
onPress={() => navigation.navigate('Cadastro')}
/>

<Text style={styles.text2}>Recupere sua senha</Text>

</View>
);
};

const styles = StyleSheet.create({
   container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
},

input: {
  width: '80%',
  height: 40,
  borderWidth: 1,
  borderColor: 'gray',
  marginBottom: 20,
  paddingHorizontal: 10,
},

text: {
  marginTop: 30,
   fontSize: 18,
   fontStyle: 'italic',
   marginBottom: 40,

},

button1: {
  backgroundColor: 'green',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
},

button2:{
  color: 'blue',
  marginTop: 10,
},


text2: {
  color: 'blue',
  textDecorationLine: 'underline',
  marginTop: 30,

},
});
