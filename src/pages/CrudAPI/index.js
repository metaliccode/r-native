import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({name, email, divisi, onPress, onDelete}) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.desc}>
        <TouchableOpacity onPress={onPress}>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{divisi}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text styles={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const CrudAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [divisi, setDivisi] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      //   name: name,
      name,
      email,
      divisi,
    };
    // jika btn = simpan
    if (button === 'Simpan') {
      axios.post('http://10.0.2.2:3000/users', data).then(res => {
        console.log('res: ', res);
        setName('');
        setEmail('');
        setDivisi('');
        getData();
      });
    } else if (button === 'Update') {
      axios
        .put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data)
        .then(res => {
          console.log('res: ', res);
          setName('');
          setEmail('');
          setDivisi('');
          getData();
          setButton('Simpan');
        });
    }
    // create
    // console.log('data before send: ', data);
    // axios.post('http://10.0.2.2:3000/users', data).then(res => {
    //   console.log('res: ', res);
    //   setName('');
    //   setEmail('');
    //   setDivisi('');
    //   getData();
    // });
  };

  const getData = () => {
    axios.get('http://10.0.2.2:3000/users').then(res => {
      console.log('res: ', res);
      setUsers(res.data);
    });
  };

  const selectItem = item => {
    console.log('selected Item: ', item);
    //untuk update
    setSelectedUser(item);
    // ini dulu
    setName(item.name);
    setEmail(item.email);
    setDivisi(item.divisi);
    setButton('Update');
  };

  const deleteItem = item => {
    console.log('selected Item: ', item);
    axios.delete(`http://10.0.2.2:3000/users/${item.id}`).then(res => {
      console.log('res: ', res);
      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container}>CrudAPI</Text>
      <Text>Data Pegawai</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Divisi"
        style={styles.input}
        value={divisi}
        onChangeText={value => setDivisi(value)}
      />
      {/* <Button title="Simpan" onPress={submit} /> */}
      <Button title={button} onPress={submit} />
      {users.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            divisi={user.divisi}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert(
                'Peringatan',
                'Anda Yakin akan menghapus data ini ?',
                [
                  {
                    text: 'Tidak',
                    onPress: () => {
                      console.log('btn tidak');
                    },
                  },
                  {text: 'Ya', onPress: () => deleteItem(user)},
                ],
              )
            }
          />
        );
      })}
    </View>
  );
};

export default CrudAPI;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    textAlign: 'center',
  },
  input: {
    marginVertical: 10,
    // borderRightWidth: 1,
    backgroundColor: '#ecf0f1',
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  containerItem: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  delete: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  desc: {
    marginLeft: 18,
    flex: 1,
  },
});
