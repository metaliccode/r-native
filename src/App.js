import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import Home from './pages/Home';

const App = () => {
  // react hook
  const [isShow, setisShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisShow(false);
    }, 6000);
  }, []);
  return (
    <View>
      <ScrollView>
        {/* <Home /> */}
        {isShow && <FlexBox />}
      </ScrollView>
    </View>
  );
};

export default App;
