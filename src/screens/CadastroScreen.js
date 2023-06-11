import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function CadastroScreen() {
  return (
    <View>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Senha" secureTextEntry />
      <Button title="Cadastrar" onPress={() => {}} />
    </View>
  );
}
