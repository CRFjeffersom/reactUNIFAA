import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tela2Screen() {
  return <View>
    <Text style={css.text}>
    A Lamborghini é uma fabricante italiana de automóveis esportivos de luxo, conhecida por seus carros de alto desempenho e design extravagante. Foi fundada por Ferruccio Lamborghini em 1963. Lamborghini começou originalmente como fabricante de tratores e, posteriormente, decidiu entrar no mercado de automóveis esportivos. O primeiro carro da marca, o Lamborghini 350 GT, foi lançado em 1964. Nos anos seguintes, a Lamborghini produziu vários modelos icônicos, como o Lamborghini Miura, o primeiro supercarro da marca, o Lamborghini Countach, conhecido por suas linhas angulares e o Lamborghini Diablo. A empresa enfrentou desafios financeiros nas décadas de 1980 e 1990, mas foi adquirida pela Audi em 1998, o que levou a um ressurgimento da marca. 
    </Text>
  </View>;
}

const css = StyleSheet.create({ 
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  }
},
);
