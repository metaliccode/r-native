import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
        }}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Componene Dinamis dengan props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Youtube Channel"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Kelas Online"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
          <Story
            judul="Food Vlogger"
            gambar="https://placeimg.com/100/100/tech"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
