import React from 'react';
// Jika hanya menggunkan export biasa hrs pake {komponen}
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './components/MateriFlexBox';
import PotitionReactNative from './components/PotitionReactNative';
import SampleComponent from './components/SampleComponent';
import StylingReactNativeComponent from './components/StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        {/* <MateriFlexBox /> */}
        <PotitionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
