import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HistoriaScreen from '../containers/HistoriaScreen';



const Stack2 = createNativeStackNavigator();
export default function HistoriaStack() {
  return (
    <Stack2.Navigator>
      <Stack2.Screen
        name="historia"
        component={HistoriaScreen}
        options={{ headerShown: false }}
      />
    </Stack2.Navigator>
  );
}