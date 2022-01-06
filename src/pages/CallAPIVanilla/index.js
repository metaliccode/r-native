import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallApiVanilla = () => {
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
  useEffect(() => {
    // // Call API dengan Methode GET
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    // // Call Api dengan Methode POST
    // const dataForApi = {
    //   name: 'Ihsan Miftahul Huda',
    //   job: 'Fullstack Developer',
    // };
    // console.log('Data Object: ', dataForApi);
    // console.log('Data Stringify: ', JSON.stringify(dataForApi));
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForApi),
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('Post response', json);
    //   });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForApi = {
      name: 'ihsan Miftahul Huda',
      job: 'Fullstack Developer',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi),
    })
      .then(response => response.json())
      .then(json => {
        console.log('Post response', json);
        setDataJob(json);
      });
  };

  return (
    <View>
      <Text style={styles.container}>Call Api dengan Vanilla JS</Text>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.text}>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <Button title="POST DATA" onPress={postData} />
      <Text style={styles.text}>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallApiVanilla;

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
