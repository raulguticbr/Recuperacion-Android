import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,

  
} from 'react-native';



export default function HistoriaScreen() {
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
                source={require('../../assets/backberry.jpeg')}
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
                source={require('../../assets/1eriphone.jpg')}
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
                source={require('../../assets/iphone7.jpg')}
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
  }