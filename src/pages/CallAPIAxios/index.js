import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallApiAxios = ({navigation}) => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    axios
      .get('https://reqres.in/api/users/5')
      .then(result => {
        console.log('result', result);
        setDataUser(result.data.data);
      })
      .catch(err => console.log('err', err));
  };

  const postData = () => {
    const dataForApi = {
      name: 'ihsan Miftahul Huda',
      job: 'Fullstack Developer',
    };

    axios
      .post('https://reqres.in/api/users', dataForApi)
      .then(result => setDataJob(result.data))
      .catch(err => console.log('err', err));
  };

  return (
    <View>
      <Text style={styles.container}>Call Api dengan AXIOS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.text}>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <Button title="POST DATA" onPress={postData} />
      <Text style={styles.text}>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
      <Button
        title="Ke Halaman CRUD API"
        onPress={() => navigation.navigate('CRUD')}
      />
      {/* <Button
        title="Open Camera"
        onPress={() => navigation.navigate('Camera')}
      /> */}
    </View>
  );
};

export default CallApiAxios;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    textAlign: 'center',
    marginBottom: 5,
  },
  text: {
    marginVertical: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
