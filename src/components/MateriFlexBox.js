import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import Apple from '../assets/images/apple.png';

class MateriFlexBox extends Component {
  render() {
    return (
      // mengatur layout dengan Flex Box
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 20,
          }}>
          Materi Flex Box
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#bdc3c7',
            alignItems: 'center',
            // alignItems: 'flex-end',
            // alignItems: 'flex-start',
            // justifyContent: 'center',
            // justifyContent: 'flex-end',
            justifyContent: 'space-between',
          }}>
          {/* <View style={{flexDirection: 'column'}}> */}
          <View
            style={{
              backgroundColor: '#e74c3c',
              width: 50,
              height: 50,
            }}></View>
          <View
            style={{
              backgroundColor: '#f1c40f',
              width: 50,
              height: 50,
              //   flex: 1,
            }}></View>
          <View
            style={{
              backgroundColor: '#2ecc71',
              width: 50,
              height: 50,
              //   flex: 2,
            }}></View>
          <View
            style={{
              backgroundColor: '#8e44ad',
              width: 50,
              height: 50,
              //   flex: 3,
            }}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Home</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
          <Text>Playlist</Text>
          <Text>Video</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={Apple}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Ihsan Miftahul Huda
            </Text>
            <Text>100rb Subcriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
