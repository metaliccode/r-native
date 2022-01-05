import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';

const Comunication = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTittle}>Komunikasi Antar Komponent</Text>
      <Cart />
    </View>
  );
};

export default Comunication;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTittle: {textAlign: 'center'},
});
