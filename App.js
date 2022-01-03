import React from 'react';
// Jika hanya menggunkan export biasa hrs pake {komponen}
import {View, ScrollView} from 'react-native';
import MateriFlexBox from './components/MateriFlexBox';
import SampleComponent from './components/SampleComponent';
import StylingReactNativeComponent from './components/StylingReactNativeComponent';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingReactNativeComponent /> */}
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
