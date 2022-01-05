import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Mac from '../assets/images/apple.png';

// styling React Native Components
const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Components</Text>
      {/* dimensi fix  */}
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#3498db',
          borderWidth: 2,
          borderColor: '#9b59b6',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      {/* wrapper card */}
      <View
        style={{
          padding: 12,
          backgroundColor: '#ecf0f1',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={Mac}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 16,
            color: '#f39c12',
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            marginTop: 12,
          }}>
          Bandung
        </Text>
        <View
          style={{
            backgroundColor: '#2ecc71',
            // paddingTop: 6,
            // paddingBottom: 6,
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default StylingReactNativeComponent;
