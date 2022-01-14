import React, { useState } from 'react';
import {
  StyleSheet,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Entypo';
import HistoriaStack from './src/navigation/HistoriaStack';
import MusicosStack from './src/navigation/MusicosStack';




const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#000',
          activeBackgroundColor: '#830583',
          inactiveTintColor: '#FFF',
          inactiveBackgroundColor: '#D50BD5',
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Historia') {
          iconName = focused
          ? 'open-book'
          : 'book';
          } else if (route.name === 'Musicos') {
          iconName = focused ? 'spotify' : 'spotify-with-circle';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'black',
          })}
        >
        <Tab.Screen
          name="Historia"
          component={HistoriaStack}
          options={{ headerStyle: { backgroundColor: '#D50BD5' },headerTitleAlign: 'center'}}
          
        />
        <Tab.Screen
          name="Musicos"
          component={MusicosStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
} //app

const styles = StyleSheet.create({

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }

});
