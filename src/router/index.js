import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CallApiAxios, CrudApi, Splash} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import CameraS from '../pages/CameraS';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Splash" component={Tab1} /> */}
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="API" component={CallApiAxios} />
      <Stack.Screen name="CRUD" component={CrudApi} />
      {/* <Stack.Screen name="Camera" component={CameraS} /> */}
    </Stack.Navigator>
  );
};

export default Router;

export function Tab1() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'API') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'CRUD') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="API" component={CallApiAxios} />
      <Tab.Screen name="CRUD" component={CrudApi} />
    </Tab.Navigator>
  );
}
