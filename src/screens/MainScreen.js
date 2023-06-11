import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Ferrari"
        onPress={() => navigation.navigate('Ferrari')}
        style={styles.button}
      />

      <Button
        title="Lamborguini"
        onPress={() => navigation.navigate('Lamborguini')}
        style={styles.button}
      />

      <Button
        title="Porsche"
        onPress={() => navigation.navigate('Porsche')}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    padding: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
});