import React, { useState } from 'react';
import {
  ScrollView,
  TextInput,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  Button,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();
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

function ListadoMusicosScreen({ navigation }) {
  const [instrumento, setInstrumento] = useState(null);

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center',marginHorizontal:20}}>
        <View style={{justifyContent: 'center',alignItems: 'center',marginBottom: 40}}>
        <View style={{ flexDirection: 'row', marginVertical: 30, alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{ marginRight: 40, marginTop: 5 ,fontSize:20}}>Instrumentos: </Text>
          <TextInput
            style={{ borderColor: 'black', borderWidth: 1, width: 200, height: 50 }}
            onChangeText={(x) => setInstrumento(x)}
            value={instrumento}
            
          />
        </View>
        <Button
          title="Buscar"
          onPress={() => navigation.navigate('Listado de Músicos', { instrumento: instrumento })}
          color='black'
         
        />
        </View>
        

        <FlatList
          data={datos}
          renderItem={pintarMusicos}
          keyExtractor={item => item.id}
          
        />

      </View>
    </ScrollView>
  );
  function pintarMusicos({ item }) {
    return (

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
            <Text>{item.nombre}</Text>
            <Text style={{color: 'orange'}}>{item.instrumento}</Text>

          </View>

        </View>
      </View>
    );

  }


} //ListadoScreen

function HistoriaScreen() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
        }}>
        <Text style={{ marginBottom: 20 ,marginTop: 20 }}>
          Bienvenido a la historia de los dispositivos moviles
        </Text>

        {/* //Aqui empieza el dispositivo */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
            marginHorizontal: 50,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 300, height: 400, marginBottom: 25 }}
              source={require('./assets/backberry.jpeg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>Esto es una BlackBerry</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Fecha de lanzamiento:{' '}
            <Text style={{ fontWeight: 'normal' }}>19 de enero de 1999</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Historia:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              BlackBerry es una marca de teléfonos inteligentes desarrollada por
              la compañía canadiense BlackBerry,que integra el servicio de
              correo electrónico móvil desde 1999; aunque incluye las
              aplicaciones típicas de un teléfono inteligente: libreta de
              direcciones, agenda, calendario, lista de tareas, bloc de notas,
              navegador, aplicaciones de redes sociales, así como cámara de
              fotografía integrada en todos los dispositivos. BlackBerry se hizo
              famosa por su teclado QWERTY incorporado, y por su capacidad para
              enviar y recibir correos electrónicos de Internet accediendo a las
              redes de las compañías de telefonía celular que brindan este
              servicio. Debido a esta popularidad, el término blackberry también
              ha pasado a ser de uso común para hacer referencia a cualquier
              teléfono celular inteligente que incorpore un teclado
              completo.BlackBerry solía usar un Sistema operativo propio, el
              BlackBerry OS, el cual además de las prestaciones de un teléfono
              inteligente incorpora su propio servicio de mensajería llamado
              BBM. Aunque actualmente sus teléfonos corren el sistema operativo
              Android.El término fue acuñado por la compañía de marcas Lexicon
              Branding, inspirándose en la semejanza de las teclas de los
              teléfonos BlackBerry con las drupas de las que está compuesta la
              mora.
            </Text>
          </Text>
          <Text style={{ marginBottom: 50, marginTop: 10, fontWeight: 'bold' }}>
            Conclusión:
            <Text style={{ fontWeight: 'normal' }}>
              Este teléfono movil actualmente esta desfasado, en comparacion con
              el mercado actual es totalmente obsoleto, no es tactil, no dispone
              de casi ninguna aplicacion fuera de llamar, sms...etc.
            </Text>
          </Text>
        </View>
        {/* Aqui acaba el dispositivo */}

        {/* //Aqui empieza el dispositivo */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
            marginHorizontal: 50,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 225, height: 250, marginBottom: 25 }}
              source={require('./assets/1eriphone.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>Este es el primer iphone</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Fecha de lanzamiento:{' '}
            <Text style={{ fontWeight: 'normal' }}>29 de junio de 2007</Text>
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Historia:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              iPhone es una línea de teléfonos inteligentes de alta gama
              diseñada y comercializada por Apple Inc. Ejecuta el sistema
              operativo móvil iOS, conocido hasta mediados de 2010 como "iPhone
              OS". El iPhone dispone de cámara de fotos y un reproductor de
              música (equivalente al del iPod), además de software para enviar y
              recibir mensajes de texto y de voz. También ofrece servicios de
              Internet, como leer correo electrónico, cargar páginas web y
              conectividad por Wi-Fi. La primera generación de teléfonos eran
              GSM cuatribanda con la tecnología EDGE; la segunda generación
              incluía UMTS con HSDPA.; la sexta generación ya incluía 4G LTE.
              Steve Jobs anunció públicamente el iPhone en la Macworld
              Conference and Expo el 9 de enero de 2007, tras varios rumores y
              especulaciones que circulaban desde hacía meses.El iPhone se
              introdujo inicialmente en los Estados Unidos el 29 de junio de
              2007. Fue nombrado «Invento del año» por la revista Time en
              2007.El 11 de julio de 2008 salió a la venta el iPhone 3G,
              disponible en 22 países y en 70 para finales de año. Esta versión
              soportaba la transmisión de datos por 3G a una velocidad más
              rápida y tecnología AGPS. Para el evento WWDC 2009 se presentó el
              iPhone 3GS (S de Speed, velocidad), con el mismo diseño que el 3G,
              pero con hardware mejorado. El iPhone 3GS era hasta dos veces más
              rápido que su predecesor cargando páginas web o ejecutando
              aplicaciones, saca partido del estándar OpenGL ES 2.0 para ofrecer
              mejores gráficos 3D, soporta HSDPA a 7,2 MB (también conocido como
              3.5G), cuenta con una nueva cámara de 3 megapíxeles con enfoque
              automático y grabación de vídeo, control por voz, brújula y
              soporte integrado para el Nike+iPod.[cita requerida] El 26 de
              junio de 2010 en la WWDC 2010 Apple presentó el iPhone 4, con un
              diseño renovado tanto estéticamente, abandonando su estética
              redondeada, como a nivel hardware. Contiene el SoC Apple A4,
              creado por Intrinsity y Samsung, que es el mismo que contiene el
              iPad , el Samsung Exynos 4210 al igual que el Samsung Galaxy S2),
              aunque reducido de frecuencia de trabajo, 512 MB de memoria RAM,
              un panel LCD IPS de alta resolución autodenominado Retina Display,
              2 cámaras, una de 5 megapixeles con opción para grabar en HD 720p
              y la otra VGA.
            </Text>
          </Text>
          <Text style={{ marginBottom: 50, marginTop: 10, fontWeight: 'bold' }}>
            Conclusión:
            <Text style={{ fontWeight: 'normal' }}>
              Aunque este telefono tenga mucho tiempo y en comparacion no ya con
              los de su propia familia, sino, también con los de otras marcas,
              se puede seguir utilizando para la vida moderna actualmente,
              aunque con ciertas limitaciones de aplicaciones que existen y este
              ya no las soporta. Quizas para alguien con una vida sencilla le
              basta este telefono.
            </Text>
          </Text>
        </View>
        {/* Aqui acaba el dispositivo */}

        {/* //Aqui empieza el dispositivo */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginTop: 25,
            marginHorizontal: 50,
          }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={{ width: 225, height: 250, marginBottom: 50 }}
              source={require('./assets/iphone7.jpg')}
            />
          </View>
          <Text style={{ textAlign: 'center' }}>Este es el iphone 7</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Fecha de lanzamiento:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              16 de septiembre de 2016
            </Text>
          </Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>
            Historia:{' '}
            <Text style={{ fontWeight: 'normal' }}>
              El iPhone 7 es un teléfono inteligente de gama alta diseñado por
              Apple Inc., presentado el 16 de septiembre de 2016 junto con el
              iPhone SE como sucesor del iPhone 6s, durante el evento Keynote
              realizado en San Francisco (California, EE. UU.).Su presentación
              se realizó el 17 de septiembre de 2016 en el Apple Special Event
              en el auditorio Bill Graham Civic Auditorium en San Francisco
              (California). En la misma se anunció que la preventa comenzaría el
              día 9 de ese mismo mes y que el lanzamiento oficial de los
              dispositivos sería el 11 de octubre en los países de la primera
              oleada, extendiéndose al resto del mundo a partir del 17 de
              diciembre. El 21 de marzo de 2017 y sin aviso previo más que
              algunos rumores, Apple lanzó una edición especial del iPhone 7 en
              color rojo. Esta versión está disponible únicamente en capacidades
              de 128 y 256 GB y forma parte de la iniciativa Product (RED), por
              lo que parte del dinero recaudado con las ventas de este modelo se
              destinarán a la lucha contra el VIH en el África subsahariana.
            </Text>
          </Text>
          <Text style={{ marginBottom: 50, marginTop: 10, fontWeight: 'bold' }}>
            Conclusión:
            <Text style={{ fontWeight: 'normal' }}>
              Este telefono actualmente no esta en el mercado de dispositivos
              nuevos, pero se puede adquirir de forma reacondicionada o en el
              mercado de segunda mano. Bajo mi opinion sigue siendo muy buen
              telefono a pesar de la gran competencia que tiene hoy en dia,
              sigue actualizando la version de software mas actual y es
              compatible con todas las aplicaciones actuales, sigue siendo
              rapido y util.
            </Text>
          </Text>
        </View>
        {/* Aqui acaba el dispositivo */}
      </View>
    </ScrollView>
  );
} //informacionScreen
function DetallesMusicosScreen({ route }) {
 
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
} //DetallesScreen
const Stack = createNativeStackNavigator();
function MusicosStack() {
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
} //LISTADO STACK
const Stack2 = createNativeStackNavigator();
function HistoriaStack() {
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
