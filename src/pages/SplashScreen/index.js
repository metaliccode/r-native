import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('API');
    }, 2000);
  }, []);
  return <ImageBackground source={require('../../assets/images/apple.png')} />;
};

export default Splash;
