---
title: No Repeats Please
localeTitle: No se repite por favor
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Esta tarea requiere que devolvamos el número de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas. Se debe asumir que todos los caracteres en la cadena proporcionada son únicos. Por ejemplo, `aab` debe devolver 2 porque tiene 6 permutaciones totales ( `aab` , `aab` , `aba` , `aba` , `baa` , `baa` ), pero solo 2 de ellas ( `aba` y `aba` ) no tienen la misma letra (en este caso `a` ) repitiendo

Para lograrlo, tendremos que ver cada posible permutación de una cadena. Hay varias maneras de hacer eso. Una pregunta de entrevista común es crear una función que recopile todas las permutaciones de una cadena. Hay varios tutoriales disponibles en Internet sobre cómo hacerlo.

#### Métodos potenciales utilizados como solución

##### Método recursivo

Esta tarea puede ser desalentadora incluso después de ver un tutorial. Para escribir una solución recursiva, deseará enviar a cada nuevo uso de la función tres entradas:

1.  Una nueva cadena (o matriz de caracteres) que se está construyendo.
2.  Una posición en su nueva cadena que se va a llenar a continuación.
3.  Una idea de qué caracteres (más específicamente las posiciones) de la cadena original aún no se han utilizado.

El pseudo código se verá así:
```
var str = ???; 
 permAlone(current position in original string, characters used already in original string, created string) { 
  if (current string is finished) { 
    print current string; 
  } else { 
    for (var i = 0; i < str.length; i++) { 
      if (str[i] has not been used) { 
        put str[i] into the current position of new string; 
        mark str[i] as used; 
        permAlone(current position in original string, characters used already in original string, created string); 
        remove str[i] as used because another branch in the tree for i + 1 will likely use it; 
      } 
    } 
  } 
 } 
 permAlone(0, nothing used yet, empty new string (or array the same size as str)); 
```

Otra forma de pensar sobre este problema es comenzar desde un espacio vacío. Introduce la primera letra al espacio. Este espacio ahora contendrá la primera sub-permutación. Aquí hay un diagrama que ilustra la idea:

![diagrama](//discourse-user-assets.s3.amazonaws.com/original/2X/6/69896bacc8bd3b2e347beb4b304a7f97caa6d9ab.png)

##### Método no recursivo
```
// An approach to introduce a new character to a permutation 
 var ch = '?'; 
 var source = ['?', '?', '?'];     // Current sub-permutation 
 var temp, dest = []; 
 
 for (var i = 0; i <= source.length; ++i) { 
  temp = source.slice(0);         // Copy the array 
  temp.splice(i, 0, ch);          // Insert the new character 
  dest.push(temp);                // Store the new sub-permutation 
 } 
```

Encontrar cada permutación se podría hacer de manera no recursiva al incluir lo anterior en una función que toma una matriz de origen y devuelve una matriz de destino. Para cada letra de la cadena de entrada, pase ese carácter, así como la matriz devuelta de la llamada anterior de la función.

Una forma de visualizar esto es considerando un árbol que comienza con el primer carácter de la cadena:

![Árbol de permutación](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8187f2b06cdc02cf62286c18ce15bfcdc99bc68c.png)

#### Enlaces relevantes

*   [Permutaciones](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
*   [Algoritmo de Heap](https://en.wikipedia.org/wiki/Heap%27s_algorithm)
*   Recursos JS Regex
*   [Objeto String JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   La forma más fácil es usar el algoritmo de Heap para obtener recursivamente una lista de todas las permutaciones.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Una vez que tenga la lista, simplemente cree una expresión regular para capturar los caracteres que se repiten.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   Querrá tener las permutaciones como una matriz de cadenas unidas en lugar de caracteres separados.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function permAlone(str) { 
 
  // Create a regex to match repeated consecutive characters. 
  var regex = /(.)\1+/g; 
 
  // Split the string into an array of characters. 
  var arr = str.split(''); 
  var permutations = <a href='https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:"' target='_blank' rel='nofollow'>]; 
  var tmp; 
 
  // Return 0 if str contains same character. 
  if (str.match(regex) !== null && str.match(regex)[0] === str) return 0; 
 
  // Function to swap variables' content. 
  function swap(index1, index2) { 
    tmp = arr[index1]; 
    arr[index1] = arr[index2]; 
    arr[index2] = tmp; 
  } 
 
  // Generate arrays of permutations using the algorithm. 
  function generate(int) { 
    if (int === 1) { 
      // Make sure to join the characters as we create  the permutation arrays 
      permutations.push(arr.join('')); 
    } else { 
      for (var i = 0; i != int; ++i) { 
        generate(int - 1); 
        swap(int % 2 ? 0 : i, int - 1); 
      } 
    } 
  } 
 
  generate(arr.length); 
 
  // Filter the array of repeated permutations. 
  var filtered = permutations.filter(function(string) { 
    return !string.match(regex); 
  }); 
 
  // Return how many have no repetitions. 
  return filtered.length; 
 } 
 
 // Test here. 
 permAlone('aab'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLop/0)

### Explicación del código:

*   **expresiones regulares** contiene la expresión regular para que coincida con caracteres consecutivos repetidos.
*   La cadena **str** se divide en una serie de personajes, **arr.**
*   Se devuelve 0 si **str** contiene los mismos caracteres.
*   La función `swap()` se utiliza con el propósito de intercambiar los contenidos de los contenidos de dos variables.
*   El siguiente bloque de código utiliza el algoritmo de Heap para generar matrices de permutaciones en **permutaciones** .
*   La variable **filtrada** filtra las **permutaciones** para incluir solo permutaciones no repetidas.
*   `filtered.length` devuelve el número de permutaciones totales de la cadena proporcionada que no tienen letras consecutivas repetidas.

#### Enlaces relevantes

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)
*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [array.length](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
*   [JS Array Prototype Filter](http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.