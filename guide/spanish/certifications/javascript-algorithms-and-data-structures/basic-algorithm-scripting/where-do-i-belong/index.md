---
title: Where Do I Belong
localeTitle: Dónde pertenezco
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Esto puede ser un problema difícil de entender. Debe encontrar en qué lugar de la matriz se debe insertar un número por orden y devolver el índice a donde debe ir.

#### Enlaces relevantes

*   [JS Array Sort](http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Lo primero que debe hacer es ordenar la matriz de menor a mayor, solo para facilitar el código. Aquí es donde entra la ordenación, necesita una función de devolución de llamada, por lo que debe crearla.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Una vez que la matriz esté ordenada, solo busque el primer número que sea más grande y devuelva el índice.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Si no hay un índice para ese número, también tendrá que lidiar con ese caso.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function getIndexToIns(arr, num) { 
  arr.sort(function(a, b) { 
    return a - b; 
  }); 
 
  for (var a = 0; a < arr.length; a++) { 
    if (arr[a] >= num) 
      return a; 
  } 
 
  return arr.length; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/36)

## Explicación del código:

*   Primero, `.sort(callbackFuntion)` la matriz utilizando `.sort(callbackFuntion)` para clasificarla de menor a mayor, de izquierda a derecha.
*   Luego uso un bucle for para comparar los elementos de la matriz a partir del más pequeño. Cuando un elemento de la matriz es mayor que el número con el que comparamos, devolvemos el índice como un entero.

#### Enlaces relevantes

*   [parseInt ()](http://forum.freecodecamp.com/t/javascript-parseint/14686)

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function getIndexToIns(arr, num) { 
  // Find my place in this sorted array. 
  var times = arr.length; // runs the for loop once for each thing in the array 
  var count = 0; 
  for (var i=0;i<times;i++){ 
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num 
    return count; // the above equals num's position in a sorted array 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/2547)

## Explicación del código:

*   No ordeno la matriz de entrada arr
*   Ejecuto un recuento de bucles for cuando la entrada num es más grande que un número de entrada arr.
*   Este número es equivalente a la posición de num que estaría en una matriz ordenada.

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

por [@HarinaPana](/u/harinapana)
```
function getIndexToIns(arr, num) { 
 
  arr.sort(function(a, b) { 
  return a - b; 
  }); 
 
  var i = 0; 
  while (num > arr[i]) { 
  i++; 
  } 
 
  return i; 
 } 
 
 getIndexToIns([40, 60], 50); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/4135)

## Explicación del código:

*   Ordenar la matriz existente.
*   Iterar a través de la matriz mientras se comprueba si _num_ es más grande.
*   El bucle se detendrá cuando _num_ no sea mayor que _i_ y devolverá el último elemento marcado.

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

por [@faustodc](/u/faustodc)
```
function getIndexToIns(arr, num) { 
  arr.push(num); 
  arr.sort(function(a, b){return ab}); 
  return arr.indexOf(num); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/EB10/1)

## Explicación del código:

*   Primero agregamos el número `num` a la matriz usando `push()` que lo agrega como el último elemento de la matriz.
*   Luego usamos `sort()` con la función de `function(a, b){return ab}` devolución de llamada `function(a, b){return ab}` para ordenar los números en orden ascendente.
*   Finalmente, devolvemos la posición o el índice de `num` en la matriz con la función `indexOf()` .

#### Enlaces relevantes

*   [empujar()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [ordenar()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
*   [índice de()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

**Utilizando `.findIndex()`**
```
function getIndexToIns(arr, num) { 
  // sort and find right index 
  var index = arr.sort((curr, next) => curr > next) 
    .findIndex((currNum)=> num <= currNum); 
  // Returns proper answer 
  return index === -1 ? arr.length : index; 
 } 
 
 getIndexToIns([40, 60], 500); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/63)

## Explicación del código:

*   Primero ordene la matriz en orden ascendente, esto se hace actualmente usando funciones de matriz para una huella mínima.
*   Una vez que la matriz está ordenada, aplicamos directamente el `.findIndex()` donde vamos a comparar cada elemento de la matriz hasta que encontremos donde `num <= currNum` significa que el número que queremos insertar es menor o igual al número actual Número en la iteración.
*   Luego usamos operaciones ternarias para verificar si obtuvimos un índice devuelto o `-1` . Sólo tenemos `-1` cuando no se encontró el índice es decir, cuando tenemos una falsa para todos los elementos que int matriz, y para tal caso, eso significaría que `num` debe insertarse al final de la lista, por tanto, por qué usamos `arr.length` .

#### Enlaces relevantes

*   [Array.findIndex ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
*   [Funciones de flecha](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [Operador ternario](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

por [@nivrith](/u/nivrith)
```
function getIndexToIns(arr, num) { 
 
 return arr.concat(num).sort((a,b) => ab).indexOf(num); 
 
 } 
 
 getIndexToIns([1,3,4],2); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/IUJE/0)

## Explicación del código:

*   Utilizamos el encadenamiento de métodos para invocar un método tras otro para resolver el problema en una sola línea. Primero fusionamos `arr` y `num` invocando el método arr.concat (num)
*   Luego usamos `sort()` con la **función de flecha de** devolución de llamada `(a, b) => return ab` para ordenar los números en orden ascendente
*   Por último, devolvemos la posición o el índice de `num` en la matriz con el método `indexOf()`

#### Enlaces relevantes

*   [Método de encadenamiento en JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
*   [concat ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
*   [Funciones de flecha](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.