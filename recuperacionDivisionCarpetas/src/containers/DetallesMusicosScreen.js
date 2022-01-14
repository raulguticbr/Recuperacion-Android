import React, { useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  
} from 'react-native';


const datos = [
  { id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón' ,ciudad:'Sevilla',imagen:''},
  { id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín' ,ciudad:'Huelva'},
  { id: 3, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra' ,ciudad:'Badajoz'},
  { id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta' ,ciudad:'Albacete'},
  { id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano' ,ciudad:'Madrid'},
  { id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín' ,ciudad:'Cadiz'},
  { id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón' ,ciudad:'Sevilla'},
  { id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta' ,ciudad:'Barcelona'},
  { id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta' ,ciudad:'Valencia'},
  { id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano' ,ciudad:'Zaragoza'},
  { id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón' ,ciudad:'Murcia'},
  { id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra' ,ciudad:'A Coruña'},
  { id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra' ,ciudad:'Bilbao'}
];

export default function DetallesMusicosScreen({ route }) {
 
    function pintarMusicos2({ item }) {
     
          if(route.params.instrumento===item.instrumento){
            return(
              <View style={{
                borderBottomColor: 'blue',
                borderBottomWidth: 2,
              }}>
                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                  <Image
                    style={{ width: 100, height: 100, marginRight: 50 }}
                    source={require('./assets/contacto.jpg')}
                  />
                  <View>
                    <Text style={{marginBottom:20}}>{item.nombre}</Text>
                    <Text style={{ fontWeight: 'bold' }}>Edad: <Text style={{ fontWeight: 'normal' }}>{item.edad}</Text></Text>
                    <Text style={{ fontWeight: 'bold' }}>Ciudad: <Text style={{ fontWeight: 'normal' }}>{item.ciudad}</Text></Text>
                    <Text style={{color: 'orange'}}>{item.instrumento}</Text>
        
                  </View>
        
                </View>
              </View>
            );
          }
          else{
            return(
              <View>
                
              </View>
            );
          }
       
  
    }
  
    return (
      <View style={{ flex: 1, justifyContent: 'center',marginHorizontal:20 }}>
        <FlatList
            data={datos}
            renderItem={pintarMusicos2}
            keyExtractor={item => item.id}
          />
      </View>
    );
  } 
  