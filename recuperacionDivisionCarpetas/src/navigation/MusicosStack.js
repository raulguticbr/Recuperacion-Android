import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListadoMusicosScreen from '../containers/ListadoMusicosScreen';
import DetallesMusicosScreen from '../containers/DetallesMusicosScreen';


const Stack = createNativeStackNavigator();
export default function MusicosStack() {
  return (
    <Stack.Navigator initialRouteName="buscar">
      <Stack.Screen
        name="Listado de Musicos"
        component={ListadoMusicosScreen}
        options={{ headerStyle: { backgroundColor: '#D50BD5', textAlign: 'center',title:'Listado de Músicos' },headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name="Listado de Músicos"
        component={DetallesMusicosScreen}
        options={{ headerStyle: { backgroundColor: '#D50BD5', textAlign: 'center'},headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
} 