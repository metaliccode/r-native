import React from 'react';
import {View, ScrollView} from 'react-native';
import Home from './pages/Home';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Home />
      </ScrollView>
    </View>
  );
};

export default App;
