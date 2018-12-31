---
title: Sorted Union
localeTitle: Unión ordenada
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

El programa debe devolver una nueva matriz de valores únicos de dos matrices originales en el orden en que aparecen. Por lo tanto, no se requiere clasificación y no debe haber duplicados.

#### Enlaces relevantes

*   [Argumentos de JS](http://forum.freecodecamp.com/t/javascript-arguments/14283)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Como no tiene idea de cuántos parámetros se pasaron, sería mejor recorrer los **argumentos** antes de recorrer los arreglos.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

No es necesario utilizar bucles. Puede usar funciones como `map()` , `reduce()` u otras si lo desea.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Tendrá que verificar si el valor actual ya está en la matriz que se devolverá para cada valor.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function uniteUnique(arr1, arr2, arr3) { 
  // Creates an empty array to store our final result. 
  var finalArray = []; 
 
  // Loop through the arguments object to truly made the program work with two or more arrays 
  // instead of 3. 
  for (var i = 0; i < arguments.length; i++) { 
    var arrayArguments = arguments[i]; 
 
    // Loops through the array at hand 
    for (var j = 0; j < arrayArguments.length; j++) { 
      var indexValue = arrayArguments[j]; 
 
      // Checks if the value is already on the final array. 
      if (finalArray.indexOf(indexValue) < 0) { 
        finalArray.push(indexValue); 
      } 
    } 
  } 
 
  return finalArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnM/0)

### Explicación del código:

*   Crea una matriz vacía **finalResulta** para almacenar el resultado final.
*   Recorra el objeto de **argumentos** en el bucle externo y almacénelo en **arrayArguments** .
*   El bucle interno se utiliza para recorrer los elementos de la matriz individual.
*   Si el elemento no existe ya en **finalArray** , agréguelo.
*   Devuelve **finalArray** .

#### Enlaces relevantes

*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)

## Solución alternativa de código básico

```javascript
function uniteUnique(arr) { 
  var args = [...arguments]; 
  var result = []; 
  for(var i = 0; i < args.length; i++) { 
    for(var j = 0; j < args[i].length; j++) { 
       if(!result.includes(args[i][j])) { 
        result.push(args[i][j]); 
      } 
    } 
  } 
  return result; 
 } 
 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function uniteUnique(arr1, arr2, arr3) { 
 var newArr; 
 //Convert the arguments object into an array 
  var args = Array.prototype.slice.call(arguments); 
  //Use reduce function to flatten the array 
  newArr = args.reduce(function(arrA,arrB){ 
  //Apply filter to remove the duplicate elements in the array 
    return arrA.concat(arrB.filter(function(i){ 
      return arrA.indexOf(i) === -1; 
    })); 
  }); 
 
   return newArr; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnO/0)

### Explicación del código:

*   **El** objeto de **argumentos** se convierte en una matriz utilizando `slice()` .
*   `reduce()` se utiliza para aplanar la matriz, es decir, para cada elemento que esté en la matriz (o matrices anidadas), extraiga sus elementos en una matriz unidimensional.
*   Después de aplanar la matriz, se usa `filter()` para eliminar elementos duplicados de **newArr** .

#### Enlaces relevantes

*   [Rebanada de prototipo JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-slice/14302)
*   [JS Array Prototype Reduce](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Array prototipo Concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [JS Array Prototype Filter](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function uniteUnique() { 
  var concatArr = []; 
  var i = 0; 
  while (arguments[i]){ 
    concatArr = concatArr.concat(arguments[i]); i++; 
  } 
  uniqueArray = concatArr.filter(function(item, pos) { 
    return concatArr.indexOf(item) == pos; 
  }); 
  return uniqueArray; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnN/0)

### Explicación del código:

*   La cantidad de argumentos puede cambiar dinámicamente, por lo que no debemos molestarnos en proporcionar nuestra función `uniteUnique()` con argumentos.
*   Utilizamos un `while` de bucle para concatenar todos los argumentos en una matriz llamada **concatArr.**
*   Usamos `filter()` para eliminar los elementos duplicados al verificar el índice de cada elemento y eliminar los mismos elementos con diferentes posiciones.
*   Los pedidos se conservarán aquí.

#### Enlaces relevantes

*   JS While Loop

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución de código alternativo utilizando ES2015
```
//jshint esversion:6 
 
 function uniteUnique(...arrays) { 
 
  //make an array out of the given arrays and flatten it (using the spread operator) 
  const flatArray = [].concat(...arrays); 
 
  // create a Set which clears any duplicates since it's a regulat set and not a multiset 
  return [...new Set(flatArray)]; 
 } 
 
 // test here 
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CcWk/0)

### Explicación del código:

*   Primero usamos `concat()` con una matriz vacía `<a href='http://exploringjs.com/es6/ch_maps-sets.html#_set' target='_blank' rel='nofollow'>]` como punto de partida y el operador de propagación `...` para crear una matriz fuera del objeto Argumentos y allanarla al mismo tiempo
*   luego usamos el nuevo objeto **Set** ES2015 para almacenar solo valores únicos
*   (para aprender más sobre Sets, lee \[aquí)

#### Enlaces relevantes

*   [Array.prototype.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Argumentos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
*   [Conjunto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.