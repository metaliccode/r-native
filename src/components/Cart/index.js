import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import GambarCart from '../../assets/images/cart.png';

const Cart = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Potition React Native</Text>
      <View style={styles.cartWrapper}>
        <Image source={GambarCart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#3498db',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // untuk lock item
    position: 'relative',
    marginTop: 40,
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#34495e', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#2ecc71',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    // bebas bergerak
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
