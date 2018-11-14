---
title: Stand in Line
localeTitle: Hacer cola
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

En Ciencias de la Computación una _cola_ es una **estructura de datos** abstracta donde los elementos se mantienen en orden. Los nuevos elementos se pueden agregar al final de la **cola** y los elementos antiguos se quitan de la parte delantera de la **cola** .

Escriba una función `nextInLine` que tome una matriz ( **arr** ) y un número ( **elemento** ) como argumentos. Agregue el número al final de la matriz, luego elimine el primer elemento de la matriz. La función `nextInLine` debería devolver el elemento que se eliminó.

*   Cambie el código a continuación `//Your Code here` y hasta `//Change this line` .
*   Asegúrese de que está editando el interior de la función `nextInLine` .
*   Use una función de matriz que aprendió para agregar el **elemento** al final de la matriz **arr** .
*   Use una función de matriz que aprendió para eliminar el primer elemento de la matriz **arr** .
*   Devuelve el elemento eliminado.

#### Enlaces relevantes

*   [Desafío: manipular matrices con push ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-push)
*   [Desafío: Manipular matrices con cambio ()](http://www.freecodecamp.com/challenges/manipulate-arrays-with-shift)
*   [Desafío: pasar valores a funciones con argumentos](http://www.freecodecamp.com/challenges/passing-values-to-functions-with-arguments)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

El método `push()` agrega un elemento al final de una matriz.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

El método `shift()` elimina el primer elemento de una matriz. También devuelve el elemento eliminado.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

La función `nextInLine` usa **arr** y **item** . Esas son las que utilizarán las pruebas para pasar los elementos de matriz con los que se probarán. Permite que la función sea reutilizable. No codifique ninguna de las pruebas dentro de la función.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function nextInLine(arr, item) { 
  // Your code here 
  arr.push(item); 
  var removed = arr.shift(); 
  return removed;  // Change this line 
 } 
```

### Explicación del código:

*   Empuje el **artículo** al final de **arr** .
*   Llame al método `shift()` en **arr** para obtener el primer elemento y guárdelo en el lugar **eliminado** .
*   Retorno **eliminado** .

**Ejecución de ejemplo**

*   Prueba `nextInLine([2,1]);` carreras.
*   Se `nextInLine` función `nextInLine` . **arr se** convierte en \[2\]. **el artículo se** convierte en 1.
*   `arr.push(item);` Empuja 1 a \[2\]. Así que **arr** es ahora \[2,1\].
*   `var removed = arr.shift();` elimina el primer elemento. Así que **arr** es ahora \[1\]. 2 ha sido eliminado y se almacena en **eliminado** .
*   `return removed;` Se devuelve 2.

**_Nota_** : en realidad no es necesario **eliminar** la variable. El elemento eliminado se puede devolver directamente usando `return arr.shift();` .