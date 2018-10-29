---
title: Steamroller
localeTitle: Apisonadora
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Este problema parece simple, pero debe asegurarse de aplanar cualquier matriz, independientemente del nivel, lo que agrega un poco de dificultad al problema.

#### Enlaces relevantes

*   [Array.isArray ()](http://forum.freecodecamp.com/t/javascript-array-isarray/14284)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Es necesario comprobar si un elemento es una matriz o no.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Si está tratando con una matriz, entonces necesita aplanarla obteniendo el valor dentro de la matriz. Esto significa que si tiene [\[4\]\], en lugar de devolver \[4\], debe devolver 4. Si obtiene \[\[\[4\]\] entonces lo mismo, quiere el 4. Puede acceder a él con arr \[index1\] \[index2\] para ir un nivel más profundo.](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ":speech_balloon:")

> _intenta resolver el problema ahora_

## ! \[: speech\_balloon: Pista: 3

Definitivamente necesitará recursión u otra forma de ir más allá de las matrices de dos niveles para hacer que el código sea flexible y no esté rígido para las respuestas necesarias. ¡Que te diviertas!

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function steamrollArray(arr) { 
  var flattenedArray = []; 
 
  // Create function that adds an element if it is not an array. 
  // If it is an array, then loops through it and uses recursion on that array. 
  var flatten = function(arg) { 
    if (!Array.isArray(arg)) { 
      flattenedArray.push(arg); 
    } else { 
      for (var a in arg) { 
        flatten(arg[a]); 
      } 
    } 
  }; 
 
  // Call the function for each element in the array 
  arr.forEach(flatten); 
  return flattenedArray; 
 } 
 
 // test here 
 steamrollArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnh/0)

### Explicación del código:

*   Crea una nueva variable para mantener los arreglos aplanados.
*   Cree una función que agregue elementos que no sean de matriz a la nueva variable, y para los que están en matriz, los recorre para obtener el elemento.
*   Lo hace mediante el uso de recursión, si el elemento es una matriz, vuelva a llamar a la función con una capa de matriz más profunda para verificar si es una matriz o no. si no es así, presione ese elemento no de matriz en la variable que se devuelve. De lo contrario, sigue profundizando.
*   Invoque la función, la primera vez que siempre le pasará una matriz, por lo que siempre se incluirá en la rama isArray
*   Devuelve la matriz aplanada.

#### Enlaces relevantes

*   [Array.push ()](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [Array.forEach ()](http://forum.freecodecamp.com/t/javascript-array-prototype-foreach/14290)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function steamrollArray(arr) { 
  let flat = [].concat(...arr); 
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat; 
 } 
 
 flattenArray([1, [2], [3, [[4]]]]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLni/0)

### Explicación del código:

*   Use el operador de dispersión para concatenar cada elemento de `arr` con una matriz vacía
*   Use el método `Array.some()` para averiguar si la nueva matriz contiene una matriz aún
*   Si lo hace, utilice nuevamente la llamada recursiva `steamrollArray` , pasando la nueva matriz para repetir el proceso en las matrices que estaban profundamente anidadas
*   Si no lo hace, devuelve la matriz aplanada.

#### Enlaces relevantes

*   [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
*   [Array.concat](http://forum.freecodecamp.com/t/javascript-array-prototype-concat/14286)
*   [Operador de propagación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
*   [Operador Ternario ( `condition ? a : b` )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function steamrollArray(arr) { 
  return arr.toString() 
    .replace(',,', ',')       // "1,2,,3" => "1,2,3" 
    .split(',')               // ['1','2','3'] 
    .map(function(v) { 
      if (v == '[object Object]') { // bring back empty objects 
        return {}; 
      } else if (isNaN(v)) {        // if not a number (string) 
        return v; 
      } else { 
        return parseInt(v);         // if a number in a string, convert it 
      } 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CpDy/4)

### Explicación del código:

*   Primero convertimos la matriz en una cadena, que nos dará una cadena de números separados por una coma, una coma doble si hubiera una matriz vacía y un texto de objeto literal si hubiera un objeto, que podemos corregir más adelante en nuestra declaración if .
*   Reemplazamos la coma doble con una, luego la dividimos en una matriz.
*   asigne a través de la matriz y corrija los valores de los objetos y convierta los números de cadena en números regulares.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.