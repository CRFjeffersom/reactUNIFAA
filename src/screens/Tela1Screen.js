import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function Tela1Screen() {
  return <View>
    <Text style={css.text}> A Ferrari foi fundada em 1947 por Enzo Ferrari como "Auto Avio Costruzioni". O primeiro carro sob a marca Ferrari foi lançado em 1947. Ao longo dos anos, a Ferrari estabeleceu-se como uma marca de automóveis de luxo e desempenho. Produziu modelos icônicos como o Ferrari 250 GTO e o Ferrari F40. A Ferrari também teve sucesso nas corridas, conquistando vitórias em competições renomadas. A empresa expandiu sua linha de modelos e continua a ser uma marca desejada e prestigiada. Atualmente, a Ferrari está envolvida na Fórmula 1 e mantém sua reputação de excelência e inovação.

  

</Text>





</View>;}
  
  const css = StyleSheet.create({ 
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333333',
    }
  },
  );
