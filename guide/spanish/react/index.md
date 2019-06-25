---
title: React
localeTitle: React
---
# React

React es una biblioteca de JavaScript para construir interfaces de usuario. Fue votado como el más querido en la categoría "Marcos, bibliotecas y otras tecnologías" de la Encuesta de desarrolladores 2017 de Stack Overflow. 1

React es una biblioteca de JavaScript y las aplicaciones React creadas en ella se ejecutan en el navegador, NO en el servidor. Las aplicaciones de este tipo solo se comunican con el servidor cuando es necesario, lo que las hace muy rápidas en comparación con los sitios web tradicionales que obligan al usuario a esperar a que el servidor vuelva a renderizar páginas completas y las envíe al navegador.

React se utiliza para crear interfaces de usuario, lo que el usuario ve en su pantalla e interactúa para usar su aplicación web. Esta interfaz se divide en componentes, en lugar de tener una página enorme, se divide en partes más pequeñas conocidas como componentes. En términos más generales, este enfoque se llama modularidad.

*   Es declarativo: React usa un paradigma declarativo que hace que sea más fácil razonar acerca de su aplicación.
*   Es eficiente: React calcula el conjunto mínimo de cambios necesarios para mantener actualizado su DOM.
*   Y es flexible: React trabaja con las bibliotecas y los marcos que ya conoce.

## ¿Por qué aprender React?

1.  React implica una composición que es un montón de componentes que envuelven las funcionalidades en un contenedor encapsulado. Muchos sitios web populares utilizan React implementando el patrón arquitectónico MVC. Facebook (Parcialmente), Instagram (Completamente), Khan Academy (Parcialmente), Codecademy (Parcialmente), New York Times (Parcialmente), Yahoo Mail (Completamente), la nueva aplicación de galería de fotos y videos de Dropbox (completamente) son los sitios web populares más conocidos que utilizan React. ¿Cómo se construyen estas grandes aplicaciones utilizando React? La respuesta simple es construir pequeñas aplicaciones o componentes. Ejemplo:

```jsx
const Component2 = () => { 
  return ( 
    <div></div> 
  ); 
 }; 
 const Component3 = () => { 
  return ( 
    <div></div> 
  ); 
 }; 
 const Component1 = () => { 
  return ( 
    <div> 
      <Component2 /> 
      <Component3 /> 
    </div> 
  ); 
 }; 
 
 ReactDOM.render( 
  <Component1 />, 
  document.getElementById("app") 
 ); 
```

2.  React es declarativo en su mayor parte en lo que nos interesa más qué hacer que cómo realizar una tarea específica. La programación declarativa es un paradigma de programación que expresa la lógica de una computación sin describir su flujo de control. La programación declarativa viene con ciertas ventajas, como la reducción de los efectos secundarios (se produce cuando modificamos cualquier estado o mutamos algo o hacemos una solicitud de API), minimizamos la mutabilidad (ya que se abstraen muchos), mejor legibilidad, menos errores.
    
3.  Flujo de datos unidireccional. La interfaz de usuario en React es en realidad la función del estado que significa que a medida que el estado se actualiza, también actualiza la interfaz de usuario. Así que nuestra interfaz de usuario avanza a medida que cambia el estado.
    

## Ventajas de React

Algunas razones para usar React son:

1.  Rápido. Las aplicaciones creadas en React pueden manejar actualizaciones complejas y sentirse rápidas y receptivas.
2.  Modular. En lugar de escribir archivos de código grandes y densos, puede escribir muchos archivos más pequeños y reutilizables. La modularidad de React puede ser una solución hermosa para los [problemas de mantenimiento](https://en.wikipedia.org/wiki/Spaghetti_code) de JavaScript.
3.  Escalable Los programas grandes que muestran una gran cantidad de datos cambiantes es donde React se desempeña mejor.
4.  Flexible. Puede usar React para proyectos interesantes que no tienen nada que ver con hacer una aplicación web. La gente todavía está descubriendo el potencial de React. [Hay espacio para explorar](https://medium.mybridge.co/22-amazing-open-source-react-projects-cb8230ec719f) .

### DOM virtual

La magia de React proviene de su interpretación del DOM y su estrategia para crear interfaces de usuario.

React usa el DOM virtual para representar virtualmente un árbol HTML, y luego, cada vez que cambia un estado y obtenemos un nuevo árbol HTML que debe llevarse al DOM del navegador, en lugar de escribir todo el árbol nuevo, React solo escribirá diferencia entre el nuevo árbol y el árbol anterior (ya que React tiene ambos árboles en la memoria). Este proceso se conoce como reconciliación de árboles.

### Reconciliación

React tiene un algoritmo de diferencia inteligente que utiliza para regenerar solo en su nodo DOM lo que realmente necesita regenerarse mientras mantiene todo lo demás tal como está. Este proceso de diferenciación es posible debido al DOM virtual de React.

Al usar el DOM virtual, React mantiene la última versión de DOM en la memoria y cuando tiene una nueva versión de DOM para llevar al navegador, esa nueva versión de DOM también estará en la memoria, por lo que React puede calcular la diferencia entre la versión nueva y la antigua. .

React le indicará al navegador que actualice solo la diferencia computada y no todo el nodo DOM. No importa cuántas veces regeneremos nuestra interfaz, React llevará al navegador solo las nuevas actualizaciones "parciales".

## React desde cero

¿Le gustaría comenzar a aprender lo básico de reaccionar sin atascarse creando un entorno de desarrollo? Lo más probable es que si eres nuevo en el desarrollo web, configurar un entorno de desarrollo puede hacer que te sientas un poco intimidado cuando solo estás tratando de aprender React o simplemente aprender sobre Reaccionar por primera vez.

En este artículo vamos a ver cómo podemos empezar a utilizar React utilizando solo un editor de texto y un navegador, y nada más.

[!["Ver](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[### 1 - Configurar el código de la placa de la caldera con Emmet

Comencemos con el paso 1. Comenzaremos con un archivo en nuestro navegador llamado "index.html". Comenzaremos con el código HTML de la placa de la caldera. Para un inicio rápido, recomiendo usar Emmet con cualquier editor de texto que tenga y en la primera línea escribiendo en `html:5` luego presione la tecla Mayús para obtener el código a continuación. O puede seguir adelante y copiar y pegar el código de abajo.

```javascript
html:5 
```

Esto resultará en el siguiente código:

```javascript
<!DOCTYPE html> 
 <html lang="en"> 
 <head> 
  <meta charset="UTF-8"> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
  <title>Document</title> 
 </head> 
 <body> 
 
 </body> 
 </html> 
```

Podemos rellenar el título de "¡Hora de React!".

Este contenido no aparecerá en su página web. Cualquier cosa en la sección principal del archivo HTML serán metadatos que nuestro navegador usará para interpretar nuestro código en la sección del cuerpo. Este título será lo que aparece en la pestaña de nuestra página, no en realidad en la página.

### 2 - Obtenga etiquetas de script para aprovechar el poder de React y las bibliotecas de Babel

Ok, el punto uno está marcado en nuestra lista. Veamos el artículo dos. Vamos a configurar nuestro entorno de desarrollador utilizando etiquetas de script para traer a React y Babel. Este no es un entorno de desarrollador de la vida real. Eso sería una configuración bastante elaborada. También nos dejaría con una gran cantidad de códigos de calderas y bibliotecas que nos sacarían del tema de aprender lo básico de React. El objetivo de esta serie es repasar la sintaxis básica de React y comenzar a codificar. Vamos a utilizar etiquetas `<script>` para traer la biblioteca React, la biblioteca React DOM (por qué) y la biblioteca Babel.

```javascript
<head> 
  ... 
  <!-- REACT LIBRARY --> 
  <script src="https://unpkg.com/react@15.5.4/dist/react.js"></script> 
  <!-- REACT DOM LIBRARY --> 
  <script src="https://unpkg.com/react-dom@15.5.4/dist/react-dom.js"></script> 
  <!-- BABEL LIBRARY --> 
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"></script> 
  ... 
  <title>Time to React!</title> 
 </head> 
```

Usted es libre de usar versiones más actualizadas de estas bibliotecas a medida que salen. No deben crear ningún cambio importante en el contenido que cubrimos.

¿Qué estamos haciendo aquí? El elemento: HTML `<script>` se utiliza para incrustar o hacer referencia a un script ejecutable. El atributo "src" apunta a los archivos de script externos para la biblioteca React, la biblioteca ReactDOM y la biblioteca Babel. Esto es como si tuvieras una máquina de afeitar eléctrica. Literalmente, no es bueno para usted, no importa cuán elegante sea la afeitadora eléctrica, a menos que pueda enchufarla a la pared y tener acceso a la electricidad. Nuestro código React que escribiremos no nos servirá si nuestro navegador no puede conectarse a estas bibliotecas para comprender e interpretar lo que estamos haciendo. Así es como nuestra aplicación va a ganar el poder de React, será cómo insertamos React en el Dom. La razón por la que tenemos React y ReactDOM como dos bibliotecas diferentes es porque hay casos de uso como React Native, donde no se necesita la representación al DOM para el desarrollo móvil, por lo que la biblioteca se dividió para que las personas tomen la decisión de lo que necesitan, dependiendo de En el proyecto en el que están trabajando. Como necesitaremos nuestro React para llegar al DOM, usaremos ambos scripts. Babel es la forma en que aprovechamos el script ECMA más allá de ES5 y tratamos algo llamado JSX (JavaScript como XML) que usaremos en React. Vamos a echar un vistazo más profundo a la magia de Babel en una próxima lección :) Muy bien, hemos completado los pasos 1 y 2. Hemos configurado nuestro código de placa de caldera y nuestro entorno de desarrollador.

### 3 - Renderizar React al DOM

Nuestros próximos dos pasos serán elegir nuestra ubicación dentro de DOM a la que queramos procesar nuestro contenido React. Y usando otra etiqueta de script para nuestro contenido React dentro del cuerpo. En general, como buena práctica de separación de inquietudes, esto estaría en su propio archivo y luego se vincularía a este documento html. Lo haremos más tarde en las próximas lecciones. Por ahora, dejaremos que esto permanezca dentro del cuerpo del documento html en el que estamos actualmente. Ahora vamos a ver lo sencillo que es elegir un lugar en el DOM para representar nuestro contenido React. Iremos dentro del cuerpo. Y la mejor práctica no es solo lanzar React en la etiqueta del cuerpo que se mostrará, sino también crear un elemento separado, a menudo un div, que pueda tratar como un elemento raíz para insertar su contenido de React.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
 </body> 
```

Crearemos un elemento `<div>` simple y le daremos un id de "aplicación". Podremos apuntar a esta ubicación para insertar nuestro contenido de React de la misma manera que podría usar CSS para apuntar a una ID para el estilo que elija. Cualquier contenido de reacción se representará dentro de las etiquetas div con el ID de la aplicación. Mientras tanto, dejaremos un texto que diga que "React no se ha procesado todavía". Si vemos esto cuando obtenemos una vista previa de nuestra página, significa que en algún lugar nos perdimos la representación de React. Ahora, vamos a seguir adelante y crear una etiqueta de script dentro de nuestro cuerpo donde crearemos con reaccionar por primera vez. La sintaxis que vamos a necesitar para nuestra etiqueta de script es agregar un atributo de "tipo". Esto especifica el tipo de medio de la secuencia de comandos. Anteriormente, en nuestra cabeza utilizamos un atributo src que apuntaba a los archivos de script externos para la biblioteca React, la biblioteca ReactDOM y la biblioteca Babel.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  </script> 
 </body> 
```

El "tipo" de script que estamos usando se ajustará entre comillas y lo estableceremos en `"text/babel"` . Necesitaremos esta capacidad para usar babel de inmediato, ya que trabajamos con JSX. Primero, vamos a hacer reaccionar al DOM. Usaremos el método `ReactDOM.render()` para hacer esto. Este será un método, y recuerda que un método es solo una función asociada a un objeto. Este método tendrá dos argumentos.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  ReactDOM.render(React What, React Where); 
 </script> 
 </body> 
```

El primer argumento es el "qué" de React. El segundo argumento es el "dónde" de la ubicación donde desea que se coloque en el DOM. Comencemos por llamar a nuestro método ReactDOM.render (). Nuestro primer argumento será nuestro JSX.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
  ReactDOM.render( 
    <h1>Hello World</h1>, 
    React Where 
  ); 
 </script> 
 </body> 

```](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) 

[El estado](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) [oficial de los documentos de reacción](https://reactjs.org/docs/introducing-jsx.html) : "Esta sintaxis de etiqueta divertida no es ni una cadena ni HTML. Se llama JSX y es una extensión de sintaxis para JavaScript. Recomendamos usarlo con React para describir cómo debería ser la interfaz de usuario. JSX puede recordarle un lenguaje de plantilla, pero viene con todo el poder de JavaScript. JSX produce "elementos" de React.

Muchas veces, JSX enloquece a las personas que han sido desarrolladores por un tiempo porque parece HTML. A una edad muy temprana los desarrolladores aprenden a separar las preocupaciones. HTML tiene su lugar, CSS tiene su lugar y JavaScript tiene su lugar. JSX parece desdibujar las líneas. Está utilizando lo que parece HTML, pero como dice Facebook, viene con todo el poder de JavaScript.

Esto puede asustar a los veteranos, así que muchos tutoriales de reacción comienzan sin JSX, lo que puede ser bastante complejo. No haremos eso. Debido a que este curso está dirigido a aquellos que son muy jóvenes en sus carreras, es posible que no traigas esas banderas rojas cuando veas esta sintaxis.

Y JSX es realmente muy intuitivo. Probablemente pueda leer este código con bastante facilidad y ver que esta va a ser la etiqueta de encabezado más grande que muestre el texto "Hola mundo". Sin misterio y bastante sencillo. Ahora, veamos cuál sería nuestro segundo argumento.

```javascript
<body> 
  <div id="app">React has not rendered yet</div> 
  <script type="text/babel"> 
    ReactDOM.render( 
      <h1>Hello World</h1>, 
      document.getElementById("app") 
    ); 
  </script> 
 </body> 
```

Aquí es donde queremos que nuestro contenido de reacción se rinda al dominio. Probablemente has hecho esto unas cuantas veces en el pasado. Solo escribiremos `document.getElementById()` . Y pasaremos al argumento de la id de la aplicación. Y eso es todo. Ahora nos dirigiremos al div con el id de la aplicación para insertar nuestro contenido de reacción.

Queremos asegurarnos de que nuestro contenido está guardado. Adelante, abre esto en el navegador y deberías ver "Hola mundo". Como probablemente pueda adivinar, usar React no es la forma más rápida ni mejor de crear una aplicación Hello World. Todavía no estamos viendo los beneficios de esto. Pero ahora, sabemos que todo está funcionando.

Adelante, abre la consola y mira los "elementos". Puede hacerlo en un mac con el comando + shift + j o en un Windows y Linux: Ctrl + Shift + J

Si hace clic en la etiqueta de cabecera podemos ver nuestras bibliotecas de scripts que incluimos. Entonces podemos bajar al cuerpo de nuestro documento. Vamos a hacer clic en nuestro div con el id de "aplicación". Y cuando lo hacemos, vemos nuestra etiqueta `<h1>` con el contenido "Hello World".

[Ver el código completo aquí](https://github.com/robgmerrill/hello-react/blob/master/section-one/index.html)

o

[!["Ver](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[

### Resumen

Así que vamos a hacer un resumen rápido. En nuestra etiqueta principal, tomamos las etiquetas de secuencia de comandos de React, ReactDOM y Babel. Estas son las herramientas que nuestro navegador necesita en sus metadatos para leer nuestro código React y JSX en forma específica. Luego localizamos la posición dentro del DOM en la que queríamos insertar nuestro React creando un elemento div con el id de "aplicación". A continuación, creamos una etiqueta de script para ingresar nuestro código React. Utilizamos el método ReactDOM.render () que toma dos argumentos. El "qué" del contenido de React, en este caso nuestro JSX, y el segundo argumento es el "dónde" en el que desea insertar el contenido de React en el DOM. En este caso es la ubicación con el id de "app".

](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI)

[Como alternativa a JSX, puede utilizar el compilador de ES6 y Javascript como Babel.](http://www.youtube.com/watch?feature=player_embedded&v=100pKUE3OPI) [https://babeljs.io/](https://babeljs.io/)

### Más información:

*   [React Homepage](https://reactjs.org/)
*   [Twitter de Dan Abramov](https://twitter.com/dan_abramov)
*   [React Tutoriales en Egghead.io](https://egghead.io/browse/frameworks/react)

### Fuentes

1.  ["Resultados de la encuesta del desarrollador 2017".](https://insights.stackoverflow.com/survey/2017#technology-most-loved-dreaded-and-wanted-frameworks-libraries-and-other-technologies) _Desbordamiento de pila._ Acceso: 28 de octubre de 2017.
