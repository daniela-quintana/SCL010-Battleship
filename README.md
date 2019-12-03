# Battleship

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos del proyecto](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Usuario](#5-usuario)
* [6. Benchmark](#6-benchmark)
* [7. Historias de Usuario](#7-historias-de-usuario)
* [8. Diagrama de Flujo](#8-diagrama-de-flujo)
* [9. Prototipado](#9-prototipado)
* [10. Look & Feel](#10-look-&-feel)

## 1. Preámbulo

<img src=" " width="100%"/>

Los videojuegos son una verdadera prueba cuando se trata de tecnología. Uno de los factores de éxito para el equipo de android, por ejemplo, fue que pudiesen tener un juego corriendo en los primeros teléfonos. La idea era que si un juego podía ejecutarse en la plataforma, un programa más simple con pantallas mucho más fáciles de trabajar que solo tuviese botones y texto debería funcionar aun mejor.

Entonces la idea de este proyecto es llevar los frameworks de aplicaciones web al límite de lo que pueden ofrecer, tratar de explorar sus funcionalidades más avanzadas y lograr un producto que destaque en sí por sus funcionalidades y estética.

[Concrete Latinoamérica](https://www.accenture.com/cl-es/concrete-disrupcion-digital) (parte de Accenture), nos plantea este desafío como oportunidad de desarrollo técnica y profesional, adquiriendo nuevas prácticas de metodologías ágiles y conocimiento extendido en React JS.

<br>

## 2. Resumen del proyecto


Battleship es un juego clásico, con múltiples versiones en juegos de mesa y en linea (si no lo conoces, puedes verlo en este link:
[battle-ship](https://es.wikipedia.org/wiki/Batalla_naval_(juego))).

El juego es para dos personas. Consiste en que en un tablero cada jugador coloca un conjunto de barcos, ocultando su posición del contrincante. Luego, por turnos, van anunciando una posición del tablero y el enemigo informa si le han
dado a uno de sus barcos o no. El juego termina cuando un jugador ha conseguido hundir todos los barcos del otro.

Este proyecto mantiene la misma estructura de juego pero con una temática diferente, con el fin de actualizarlo y hacerlo más atractivo para las nuevas generaciones.

Continúa siendo un juego para dos jugadores que se enfrentan entre sí para detectar los elementos (barcos originalmente) de su oponente, mediante sistema de turnos hasta completar el objetivo de lograr derribar todos los elementos del jugador oponente, desarrollado para plataformas móviles tales como teléfonos celulares y/o tablets.

<br>

## 3. Objetivos del proyecto

1. El objetivo principal es lograr generar un nuevo juego basándose en la mecánica y estructura de juego original de battleship para captar un nuevo público objetivo.
Determinar el público objetivo, crear el perfil de usuario que jugará esta nueva versión de Battleship.

2. Definir la nueva temática de juego, la cual dará guía a los elementos gráficos, interacciones, animaciones y estilo de los elementos dentro del juego.

3. Diseñar una interfaz llamativa utilizando tecnologías de CSS y animaciones para lograr el desarrollo de un juego llamativo, interactivo, que capte la atención de las personas.

4. Integrar tecnologías de _React JS_, _React Native_ y _Redux_ para el desarrollo del juego, a modo que sea diseñado para plataformas móviles (teléfonos celulares y tablets).

5. Implementar Firebase como sistema de base de datos (backend), para modalidad de juego online y enviar invitaciones a amigos.

6. Realizar testing de componentes de desarrollo a través de _Jest_.

<br>

## 4. Consideraciones generales

Este proyecto se ha desarrollado por:
[Daniela Quintana Martinez ](https://github.com/daniela-quintana/) y [Fernanda Vega Leiva](https://github.com/fernandabelenVL), ambas estudiantes de [Laboratoria Chile](https://www.laboratoria.la/) (mención Front-End), junto con el apoyo y mentoría de [Maurício Martinez Marques](https://www.linkedin.com/in/maur%C3%ADcio-martinez-marques/), iOS Tech Lead de Concrete Latinoamérica.

Para el proceso de planificación se han utilizado herramientas tales como Trello y Github Projects, a través de metodologías ágiles tales como SCRUM, manteniendo siembre la comunicación activa dentro del equipo de trabajo durante todo el proceso de planteamiento, desarrollo y ejecución del proyecto por medio de sprints semanales y daily.

El desarrollo se realiza a través de React JS, enfocado a dispositivos móviles y tablets utilizando React Native.

## 5. Definición de Usuario

<br>

## 6. Benchmark

<img 
src="https://firebasestorage.googleapis.com/v0/b/scl010-battleship-f2180.appspot.com/o/Images%2F01-minijuegos.png?alt=media&token=42098470-03cb-4f74-9f9f-e6337edb55ce" 
width="100%"/>

Ver Juego: [Battleship - minijuegos.com](https://www.minijuegos.com/juego/mp-battleship)

Ver Juego: [Battleships Armada - .paisdelosjuegos.es](https://www.paisdelosjuegos.es/juego/battleships-armada.html)

Ver Juego: [Batalla naval - battleship-game.org](https://battleship-game.org/es/)

Ver Juego: Battle Fleet [iOs](https://apps.apple.com/us/app/fleet-battle-sea-battle-game/id904275738) - [Android](https://play.google.com/store/apps/details?id=de.smuttlewerk.fleetbattle&hl=es)

Ver Juego: Conceptis Seabattle [iOs](https://apps.apple.com/us/app/conceptis-seabattle/id1226168254) - [Android](https://play.google.com/store/apps/details?id=com.conceptispuzzles.battleships&hl=es_CL)


### Conclusiones:

A partir de las observaciones extraídas del análisis de diferentes plataformas de juego Battleship, tanto en versiones de computador como mobile, podemos extraer las siguientes conclusiones:
* Conclusión 1
* Conclusión 2
* Conclusión 3

<br>

## 7. Historias de Usuario

1. Como usuario jugador de battleship me gusta poder ingresar mi nombre.

_Criterios de consideración:_

2. Como usuario jugador de battleship me gustaría elegir un identificador (color, avatar, etc.)

_Criterios de consideración:_

3. Como usuario jugador de battleship me gustaría poder invitar a un amigo a jugar conmigo.

_Criterios de consideración:_

4. Como usuario jugador de battleship me gustaría poder tener la opción de  invitar a un amigo o jugar contra la computadora.

_Criterios de consideración:_

5. Como usuario jugador de battleship me gustaría poder elegir las casillas donde que quiero que vayan mis “barcos”.

_Criterios de consideración:_

6. Como usuario jugador de battleship me gustaría poder clickear las cuadrados del tablero para jugar.

_Criterios de consideración:_

7. Como usuario jugador de battleship me gustaría poder visualizar los "barcos" que me quedan por derribar de mi oponente.

_Criterios de consideración:_

8. Como usuario jugador de battleship me gustaría poder ver en tiempo real si la casilla seleccionada derribó o no el "barco" de mi oponente.

_Criterios de consideración:_

9. Como usuario jugador de battleship me gustaría poder elegir el nivel dificultad de juego que quiero (número de casillas 5x5, 8x8, 10x10, 12x12).

_Criterios de consideración:_

10. Como usuario jugador de battleship me gustaría poder tener una pantalla de resultados al terminar el juego (ganador-perdedor).

_Criterios de consideración:_

11. Como usuario jugador de battleship me gustaría poder volver al inicio para comenzar un nuevo juego.

_Criterios de consideración:_

12. Como usuario jugador de battleship me gustaría poder abandonar el juego en caso de que lo necesite.

_Criterios de consideración:_

<br>

## 8. Diagrama de Flujo

<img src="https://firebasestorage.googleapis.com/v0/b/scl010-battleship-f2180.appspot.com/o/Images%2Fdiagrama-de-flujo.png?alt=media&token=fe3a3893-ef36-404c-9d0e-bc5fdf99a8a4" width="100%">

<br/>
<br/>

## 9. Prototipado

* Sketch
* Wireframe

<br>

## 10. Look & Feel

<br>

## Links de Interés

* [Tablero Trello](https://trello.com/b/myWBjzhV/battleship)
* [Concrete Latinoamérica junto a Laboratoria](https://medium.com/concretelatinoam%C3%A9rica/desaf%C3%ADo-concrete-laboratoria-19e0b1b66b45)

## Desarrollado por:
* Daniela Quintana Martinez: [Github](https://github.com/daniela-quintana) - [LinkedIn](https://www.linkedin.com/in/daniela-quintana/)
* Fernanda Vega Leiva: [Github](https://github.com/fernandabelenVL) - [LinkedIn](https://www.linkedin.com/in/fernanda-vega/)

Junto con el apoyo y mentoría de:
* Maurício Martinez Marques - [iOS Tech Lead en Concrete Latinoamerica](https://www.linkedin.com/in/maur%C3%ADcio-martinez-marques/)
* Concrete Latinoamérica - [Visitar sitio web](https://www.accenture.com/cl-es/concrete-disrupcion-digital)
* Laboratoria Chile - [Visitar sitio web](https://www.laboratoria.la/)


