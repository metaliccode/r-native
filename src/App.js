import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import Comunication from './pages/Comunication';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import StylingReactNativeComponent from './components/StylingReactNativeComponent';
import CallApiVanilla from './pages/CallAPIVanilla';
import CallApiAxios from './pages/CallAPIAxios';
import CrudAPI from './pages/crudAPI';

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
        {/* <Comunication /> */}
        {/* <CallApiVanilla /> */}
        {/* <CallApiAxios /> */}
        <CrudAPI />
      </ScrollView>
    </View>
  );
};

export default App;
