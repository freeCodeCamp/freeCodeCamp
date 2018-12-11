---
title: Everything Be True
localeTitle: Todo sea verdad
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d69c7f2d86b8902a9bc83653d95932115de47e6a.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

El programa necesita verificar si el segundo argumento es un elemento de [verdad](http://forum.freecodecamp.com/t/javascript-truthy-value/15975) , y debe verificar esto para cada objeto en el primer argumento.

#### Enlaces relevantes

*   [JavaScript Truthy](http://forum.freecodecamp.com/t/javascript-truthy-value/15975)
*   [Argumentos de JavaScript](http://forum.freecodecamp.com/t/javascript-arguments/14283.md)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Recuerde iterar a través del primer argumento para verificar cada objeto.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Solo si todos ellos son verdad volveremos verdad, así que asegúrese de que todos los comprueben.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

> _intenta resolver el problema ahora_

Podría usar las funciones de bucles o devoluciones de llamada, hay varias formas de resolver este problema.

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**Soluciones por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

**Usando for-in loop y hasOwnProperty**
```
function truthCheck(collection, pre) { 
  // Create a counter to check how many are true. 
  var counter = 0; 
  // Check for each object 
  for (var c in collection) { 
    // If it is has property and value is truthy 
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) { 
      counter++; 
    } 
  } 
  // Outside the loop, check to see if we got true for all of them and return true or false 
  return counter == collection.length; 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnw/0)

### Explicación del código:

*   Primero creo un contador para verificar cuántos casos son verdaderos.
*   A continuación, compruebe cada objeto si el valor es verdadero
*   Fuera del bucle, verifico si la variable de contador tiene el mismo valor que la longitud de la **colección** , si es verdadera, luego devuelve **verdadero** , de lo contrario, devuelve **falso**

#### Enlaces relevantes

*   [JS Loops](http://forum.freecodecamp.com/t/javascript-loops/14681)
*   [Object.prototype.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

**Usando Array.every ()**
```
function truthCheck(collection, pre) { 
  return collection.every(function (element) { 
    return element.hasOwnProperty(pre) && Boolean(element[pre]); 
  }); 
 } 
 
 // test here 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLny/0)

### Explicación del código:

*   Utiliza el método nativo "todos" para probar si todos los elementos de la matriz pasan la prueba.
*   Este enlace ayudará a [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

#### Enlaces relevantes

*   [JS Array.prototype.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)
*   [MDN Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function truthCheck(collection, pre) { 
  // Is everyone being true? 
  return collection.every(obj => obj[pre]); 
 } 
 
 truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/E2u6/0)

### Explicación del código:

*   Para _cada_ objeto en la matriz de `collection` , verifique la veracidad de la propiedad del objeto pasada en `pre` parámetro `pre`
*   `Array#every` método verifica internamente si el valor devuelto por la devolución de llamada es verdadero.
*   Devuelve `true` si pasa por _cada_ objeto. De lo contrario, devuelve `false` .

#### Enlaces relevantes

*   [`Array#every`](http://devdocs.io/javascript/global_objects/array/every)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.