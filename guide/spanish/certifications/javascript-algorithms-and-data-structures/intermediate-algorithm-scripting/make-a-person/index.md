---
title: Make a Person
localeTitle: Hacer una persona
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Cuando comencé el programa, pensé que solo tenía que crear las seis funciones mencionadas en los detalles. Sin embargo, no era tan simple. Crearlos como una función no era la forma correcta, tuve que crearlos de una manera diferente para convertirlos en una clave.

También hay una parte complicada, ya que necesitas seis claves ni más ni menos, así que al principio tuve la variable que almacenaba el nombre original como una clave, lo cual estaba equivocado.

En cuanto al uso de la matriz, que es opcional, también podría crear una nueva variable para mantener la cadena separada si lo desea, pero es más fácil tratar con una matriz ya que las cadenas son inmutables.

Lea atentamente las instrucciones, siempre es una buena sugerencia en sí misma para ejecutar el código y verificar cuáles fueron los resultados de la prueba para que sepa qué esperar pero no se centre en eso. Una vez que entienda lo que necesita hacer, este problema es muy fácil y directo.

#### Enlaces relevantes

*   [Cierres](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [Detalles del modelo de objeto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Use **esta** notación para crear las claves en lugar de las funciones regulares: Esto significa que en lugar de `var varName = function() {/*...*/}` debe usar `this.varName = function() {/*...*/}`

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

El programa tiene una prueba que verifica la cantidad de claves que usaste, tienen que ser exactamente seis, las seis mencionadas en la sección de detalles. Esto significa que si necesita trabajar con variables, `this.fullName = firstAndLast;` locales y no en una clave: `this.fullName = firstAndLast;`

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

A menudo, el código no funcionará de la manera que esperas debido a nombres de variables incorrectos, asegúrate de verificar que los deletreas de la manera correcta. Esto nos sucede a todos en algún momento.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 4

Si está teniendo problemas con la escritura de los `setter` métodos, a continuación es una plantilla para un `set` método:

```js
this.setFullName = function(input) { 
  // Insert your code here 
 } 
```

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```js
var Person = function(firstAndLast) { 
  var fullName = firstAndLast; 
 
  this.getFirstName = function() { 
    return fullName.split(" ")[0]; 
  }; 
 
  this.getLastName = function() { 
    return fullName.split(" ")[1]; 
  }; 
 
  this.getFullName = function() { 
    return fullName; 
  }; 
 
  this.setFirstName = function(name) { 
    fullName = name + " " + fullName.split(" ")[1]; 
  }; 
 
  this.setLastName = function(name) { 
    fullName = fullName.split(" ")[0] + " " + name; 
  }; 
 
  this.setFullName = function(name) { 
    fullName = name; 
  }; 
 }; 
 
 var bob = new Person('Bob Ross'); 
 bob.getFullName(); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLov/0)

### Explicación del código:

*   Cree una variable que haga una copia del nombre completo que se pasó como parámetro.
*   Luego podemos proceder a crear los seis métodos necesarios y devolver lo que se solicita.
*   Para los definidores individuales, podemos usar la división para convertir el nombre completo en una matriz de nombres y apellidos y concatenar la parte no modificada del nombre con lo que se pasó como parámetro.

#### Enlaces relevantes

*   [Cómo construir objetos](https://www.freecodecamp.org/challenges/build-javascript-objects)
*   [Construir objetos con funciones.](https://www.freecodecamp.org/challenges/construct-javascript-objects-with-functions)
*   [Declarar objetos como variables.](https://www.freecodecamp.org/challenges/declare-javascript-variables)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.