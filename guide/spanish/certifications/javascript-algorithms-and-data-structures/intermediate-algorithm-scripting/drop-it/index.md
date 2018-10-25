---
title: Drop it
localeTitle: Déjalo caer
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/236dcca68bf55be37bf7cbb9646f6e0156b4a3c3.png)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Básicamente, mientras que el segundo argumento no es verdadero, tendrá que eliminar el primer elemento de la izquierda de la matriz que se pasó como primer argumento.

#### Enlaces relevantes

*   [Objeto de argumentos](http://forum.freecodecamp.com/t/javascript-arguments/14283)
*   [Array.shift ()](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [Array.slice ()](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Puede usar `Array.prototype.shift()` o el filtro con el que debería estar más familiarizado para resolver este problema en unas pocas líneas de código.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Shift devuelve el elemento que se eliminó, el cual no necesitamos realmente, todo lo que necesitamos es la matriz modificada que queda.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Si aún no puede descubrir cómo resolverlo con shift, intente resolverlo con filtro y verifique cómo funciona el filtro. Si se familiariza con él, puede hacer el código con shift.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function dropElements(arr, func) { 
  // drop them elements. 
  var times = arr.length; 
  for (var i = 0; i < times; i++) { 
    if (func(arr[0])) { 
      break; 
    } else { 
      arr.shift(); 
    } 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLna/0)

### Explicación del código:

*   Crea un bucle for para comprobar cada elemento.
*   Luego verifique la función dada si es verdadera, luego deténgase, de lo contrario elimine ese elemento.
*   devuelve la matriz.

#### Enlaces relevantes

*   [Para loops](http://forum.freecodecamp.com/t/javascript-for-loop/14666)
*   [Más sobre los bucles.](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function dropElements(arr, func) { 
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length); 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnc/0)

### Explicación del código:

*   Use la función `findIndex()` ES6 para encontrar el índice del elemento que pasa la condición
*   Corte la matriz desde el índice encontrado hasta el final
*   ¡Hay un caso de borde! si la condición no se cumple con cualquiera de los elementos, 'findIndex' devolverá `-1` que desordena la entrada a `slice()` . En este caso, use un operador condicional simple para devolver `false` lugar de `-1` . Y el operador ternario (? ![:slight_smile:](https://forum.freecodecamp.com/images/emoji/emoji_one/slight_smile.png?v=3 ": slight_smile:") devuelve el índice encontrado de los elementos requeridos cuando la condición es `true` y, de lo contrario, la longitud de la matriz, de modo que el valor de retorno sea una matriz vacía como se indica.

#### Enlaces relevantes

*   [findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Operador condicional](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function dropElements(arr, func) { 
  while(arr.length > 0 && !func(arr[0])) { 
    arr.shift(); 
  } 
  return arr; 
 } 
 
 // test here 
 dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnf/0)

### Explicación del Código

*   Use un bucle while con `Array.prototype.shift()` para continuar verificando y soltando el primer elemento de la matriz hasta que la función devuelva true. También se asegura de que la matriz no esté vacía primero para evitar bucles infinitos.
*   Devuelve la matriz filtrada.

#### Enlaces relevantes

*   [Mientras bucles](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.