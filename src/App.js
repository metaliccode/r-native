import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Comunication from './pages/Comunication';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import StylingReactNativeComponent from './components/StylingReactNativeComponent';

const App = () => {
  // react hook
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* {isShow && <FlexBox />} */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Comunication />
      </ScrollView>
    </View>
  );
};

export default App;
