import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Mac from '../../assets/images/apple.png';

const Product = props => {
  return (
    <View style={styles.container}>
      <Image source={Mac} style={styles.imgCard} />
      <Text style={styles.textCard}>New Macbook Pro 2019</Text>
      <Text style={styles.price}>Rp. 25.000.000</Text>
      <Text style={styles.textDesc}>Bandung</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnText}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#ecf0f1',
    width: 212,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginLeft: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#f39c12',
  },
  textCard: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  imgCard: {width: 188, height: 107, borderRadius: 8},
  textDesc: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  btnWrapper: {
    backgroundColor: '#2ecc71',
    // paddingTop: 6,
    // paddingBottom: 6,
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
