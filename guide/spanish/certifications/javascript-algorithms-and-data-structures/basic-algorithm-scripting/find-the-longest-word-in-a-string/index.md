---
title: Find the Longest Word in a String
localeTitle: Encuentra la palabra más larga en una cadena
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Tienes que repasar cada palabra y descubrir cuál es la más larga y no devolver la palabra, sino cuántos caracteres tiene.

#### Enlaces relevantes

*   [Longitud de la cuerda de JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Debe dividir la cadena en una matriz de palabras.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Tendrá que encontrar una manera de realizar un seguimiento global de la mayor longitud actual.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

¿Recuerda cómo obtener la longitud de los elementos en la matriz? `Array[index].length` .

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function findLongestWordLength(str) { 
  var words = str.split(' '); 
  var maxLength = 0; 
 
  for (var i = 0; i < words.length; i++) { 
    if (words[i].length > maxLength) { 
      maxLength = words[i].length; 
    } 
  } 
 
  return maxLength; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/5)

### Explicación del código:

Toma la cadena y conviértela en una matriz de palabras. Declare una variable para realizar un seguimiento de la longitud máxima y el bucle de 0 a la longitud de la matriz de palabras.

Luego busque la palabra más larga comparando la palabra actual con la anterior y almacenando la nueva palabra más larga. Al final del ciclo, simplemente devuelva el valor numérico de la variable maxLength.

#### Enlaces relevantes

*   [JS Array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

**Utilizando `.reduce()`**
```
function findLongestWordLength(s) { 
  return s.split(' ') 
    .reduce(function(x, y) { 
      return Math.max(x, y.length) 
    }, 0); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/6)

### Explicación del código:

Para más información sobre `reduce` [haga clic aquí.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

En caso de que se esté preguntando sobre ese `0` después de la función de devolución de llamada, se usa para dar un valor inicial a la `x` , de modo que `Math.max` sabrá dónde comenzar.

#### Enlaces relevantes

*   [JS Reducir](http://forum.freecodecamp.com/t/javascript-array-prototype-reduce/14299)
*   [JS Reduce Made Easy](http://forum.freecodecamp.com/t/using-array-prototype-reduce-to-reduce-conceptual-boilerplate-for-problems-on-arrays/14687)
*   [JS Math Max](http://forum.freecodecamp.com/t/javascript-math-max/14682.md)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:

**Usando la recursividad**
```
function findLongestWordLength(str) { 
 
  //split the string into individual words 
  //(important!!, you'll see why later) 
  str = str.split(" "); 
 
  //str only has 1 element left that is the longest element, 
  //return the length of that element 
  if(str.length == 1){ 
    return str[0].length; 
  } 
 
  //if the first element's length is greater than the second element's (or equal) 
  //remove the second element and recursively call the function) 
  if(str[0].length >= str[1].length){ 
    str.splice(1,1); 
    return findLongestWordLength(str.join(" ")); 
  } 
 
  //if the second element's length is greater thant the first element's start 
  //call the function past the first element 
  if(str[0].length <= str[1].length){ 
    // from the first element to the last element inclusive. 
    return findLongestWordLength(str.slice(1,str.length).join(" ")); 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/7)

### Explicación del código:

La primera línea divide la cadena en palabras individuales. Luego verificamos si a `str` solo le queda 1 elemento, entonces ese es el elemento más largo y lo devolvemos. Si la longitud del primer elemento es mayor que la del segundo elemento (o igual), eliminamos el segundo elemento y llamamos recursivamente a la función `findLongestWord` . Sin embargo, si la longitud del segundo elemento es mayor que el comienzo del primer elemento, entonces llamamos a la función más allá del primer elemento.

#### Enlaces relevantes

*   [Funciones js](https://www.youtube.com/watch?v=R8SjM4DKK80)
*   [Conceptos básicos de recursión](https://www.youtube.com/watch?v=k7-N8R0-KY4)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.