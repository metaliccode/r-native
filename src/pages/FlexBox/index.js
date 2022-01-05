import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import Apple from '../../assets/images/apple.png';

// class FlexBox extends Component {
//   // lifecycle components
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');

//     this.state = {
//       subcriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subcriber: 400,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> component did update');
//   }

//   componentWillUnmount() {
//     console.log('==> component will unmount');
//   }

//   render() {
//     console.log('==> render');
//     return (
//       // mengatur layout dengan Flex Box
//       <View>
//         <Text
//           style={{
//             fontSize: 24,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             marginTop: 20,
//           }}>
//           Materi Flex Box
//         </Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#bdc3c7',
//             alignItems: 'center',
//             // alignItems: 'flex-end',
//             // alignItems: 'flex-start',
//             // justifyContent: 'center',
//             // justifyContent: 'flex-end',
//             justifyContent: 'space-between',
//           }}>
//           {/* <View style={{flexDirection: 'column'}}> */}
//           <View
//             style={{
//               backgroundColor: '#e74c3c',
//               width: 50,
//               height: 50,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: '#f1c40f',
//               width: 50,
//               height: 50,
//               //   flex: 1,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: '#2ecc71',
//               width: 50,
//               height: 50,
//               //   flex: 2,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: '#8e44ad',
//               width: 50,
//               height: 50,
//               //   flex: 3,
//             }}></View>
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Home</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//           <Text>Playlist</Text>
//           <Text>Video</Text>
//         </View>
//         <View
//           style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
//           <Image
//             source={Apple}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Ihsan Miftahul Huda
//             </Text>
//             <Text>{this.state.subcriber}rb Subcriber</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// react hook functional components
const FlexBox = () => {
  const [Subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('Did Mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      // didupdate && didunmount
      console.log('did update');
    };
  }, [Subscriber]);

  // did update
  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [Subscriber]);

  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
        }}>
        Materi Flex Box
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#bdc3c7',
          alignItems: 'center',
          // alignItems: 'flex-end',
          // alignItems: 'flex-start',
          // justifyContent: 'center',
          // justifyContent: 'flex-end',
          justifyContent: 'space-between',
        }}>
        {/* <View style={{flexDirection: 'column'}}> */}
        <View
          style={{
            backgroundColor: '#e74c3c',
            width: 50,
            height: 50,
          }}></View>
        <View
          style={{
            backgroundColor: '#f1c40f',
            width: 50,
            height: 50,
            //   flex: 1,
          }}></View>
        <View
          style={{
            backgroundColor: '#2ecc71',
            width: 50,
            height: 50,
            //   flex: 2,
          }}></View>
        <View
          style={{
            backgroundColor: '#8e44ad',
            width: 50,
            height: 50,
            //   flex: 3,
          }}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Home</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
        <Text>Playlist</Text>
        <Text>Video</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={Apple}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Ihsan Miftahul Huda
          </Text>
          <Text>{Subscriber}rb Subcriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
