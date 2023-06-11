import React from 'react';
import { View, Text, StyleSheet  } from 'react-native';

export default function Tela3Screen() {
  return <View>
    <Text style={css.text}> A Porsche é uma fabricante alemã de automóveis esportivos de luxo, fundada em 1931 por Ferdinand Porsche. No início, a empresa se concentrou em consultoria e desenvolvimento de veículos para outras marcas, como a Volkswagen. O primeiro carro com o nome Porsche foi o lendário Porsche 356, lançado em 1948. O modelo foi um sucesso e marcou o início da produção de automóveis pela Porsche. Em 1963, a empresa lançou o icônico Porsche 911, que se tornou um dos modelos mais emblemáticos e duradouros da marca. Nos anos seguintes, a Porsche expandiu sua linha de modelos com carros como o Porsche 928, o Porsche 944 e o Porsche Boxster. Em 2002, a empresa lançou o Porsche Cayenne, seu primeiro SUV, que se tornou um sucesso de vendas. A Porsche também está envolvida em competições de automobilismo, com vitórias notáveis nas 24 Horas de Le Mans e na Fórmula E.
    
    

    </Text>
  </View>;
}
const css = StyleSheet.create({ 
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333'
  }
  },
  );