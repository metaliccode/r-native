import React, {Component} from 'react';
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
      <BoxGreen />
      <Gambar />
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

// class components
class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Gambar extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animal'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default App;

// function biasa
// function App() {}
