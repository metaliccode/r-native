import React from 'react';
import {Image, Text, View, TextInput} from 'react-native';

// arrow function
const App = () => {
  return (
    // react fragment
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#3498db'}} />
      <Text>Ihsan</Text>
      <Miftahul></Miftahul>
      <Text>Rine</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Miftahul = () => {
  return <Text>Miftahul Huda</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;

// function biasa
// function App() {}
