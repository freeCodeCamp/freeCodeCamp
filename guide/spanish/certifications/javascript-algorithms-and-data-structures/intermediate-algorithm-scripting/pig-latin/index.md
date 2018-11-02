---
title: Pig Latin
localeTitle: Jerga
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Necesitas crear un programa que se traduzca del inglés al cerdo latino. Pig Latin toma la primera consonante (o grupo de consonantes) de una palabra en inglés, la mueve al final de la palabra y los sufijos "ay". Si una palabra comienza con una vocal, simplemente agrega "camino" al final. Puede que no sea obvio, pero debe eliminar todas las consonantes hasta la primera vocal en caso de que la palabra no comience con una vocal.

#### Enlaces relevantes

*   [Jerga](http://en.wikipedia.org/wiki/Pig_Latin)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Probablemente querrá usar expresiones regulares. Esto te permitirá convertir las palabras fácilmente.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Si el primer carácter es una vocal, tome la palabra completa y agregue 'way' al final. De lo contrario viene la parte difícil, toma la consonante (s) antes de la primera vocal y muévela hasta el final y agrega 'ay'. Esto puede ser confuso, pero no es solo la primera consonante, sino todas antes de la primera vocal.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Necesitará usar todo lo que sepa sobre la manipulación de cuerdas para obtener la última parte correcta. Sin embargo, se puede hacer con `substr` solo.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function translatePigLatin(str) { 
  // Create variables to be used 
  var pigLatin = ''; 
  var regex = /[aeiou]/gi; 
 
  // Check if the first character is a vowel 
  if (str[0].match(regex)) { 
    pigLatin = str + 'way'; 
 
  } else if(str.match(regex) === null) { 
    // Check if the string contains only consonants 
    pigLatin = str + 'ay'; 
  } else { 
 
    // Find how many consonants before the first vowel. 
    var vowelIndice = str.indexOf(str.match(regex)[0]); 
 
    // Take the string from the first vowel to the last char 
    // then add the consonants that were previously omitted and add the ending. 
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay'; 
  } 
 
  return pigLatin; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmt/0)

### Explicación del código:

*   Haga una cadena vacía para mantener su palabra latina de cerdo.
*   Asigna tu expresión regular apropiada a una variable.
*   Si el primer carácter es una vocal, simplemente agregue una **forma** al final de la cadena y devuélvala.
*   Si el primer carácter no es una vocal:
    *   Encuentre el número de consonantes antes de la primera vocal con la ayuda de `indexOf()` , `match()` y regex.
    *   Comience la cuerda latina de cerdo con la primera vocal hasta el final.
    *   Agrega letras antes de la primera vocal hasta el final de la cuerda.
    *   `substr()` se utiliza para la manipulación de cadenas aquí.
    *   Agrega **ay** al final de la cadena y devuélvela.

#### Enlaces relevantes

*   Recursos JS Regex
*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function translatePigLatin(str) { 
  function check(obj) { 
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj; 
  } 
 
  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay'); 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmw/0)

### Explicación del código:

*   Este es un enfoque declarativo y recursivo de este problema.
*   `check()` es una función que verifica que la primera letra de la cadena esté en el conjunto de vocales, `['a','i','u','e','o']` .
*   En caso de consonantes, `check()` llama a sí mismo en los siguientes caracteres hasta encontrar la primera vocal.
*   Devolverá el índice de lo que encuentre como la última consonante inicial, es decir, Schmidtsville sería 3.
*   Entonces, las cartas hasta ese índice se eliminan de la cadena y concatenan, ya sea con el mismo trozo de cadena eliminado o **w** en consecuencia, y a continuación, **Ay** independientemente.

#### Enlaces relevantes

*   [Prototipo de cuerdas JS](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Concat](http://forum.freecodecamp.com/t/javascript-string-prototype-concat/15935)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function translatePigLatin(str) { 
    var strArr = []; 
    var tmpChar; 
 
    // check if the char is consonant using RegEx 
    function isConsonant(char) { 
        return !/[aeiou]/.test(char); 
    } 
 
    // return initial str + "way" if it starts with vowel 
    // if not - convert str to array 
    if (!isConsonant(str.charAt(0))) 
        return str + "way"; 
    else 
        strArr = str.split(""); 
 
    // push all consonats to the end of the array 
    while (isConsonant(strArr[0])) { 
        tmpChar = strArr.shift(); 
        strArr.push(tmpChar); 
    } 
 // convert array to string and concatenate "ay" at the end 
 return strArr.join("")+"ay"; 
 } 
 
 // test here 
 translatePigLatin("consonant"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmv/0)

### Explicación del código:

*   `isConsonant()` se usa para verificar si un personaje es una consonante.
*   Si el primer carácter es una vocal, agregue una **forma** al final de la cadena y devuélvala.
*   Si el primer carácter no es una vocal:
    *   Divide la cadena en una matriz usando `split()` .
    *   Empuje todas las consonantes hasta el final de la matriz con la ayuda de `shift()` y `push()` .
    *   Convierta la matriz en cadena utilizando `join()` y agregue **ay** al final de la cadena. Devolverlo.

#### Enlaces relevantes

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS Array Prototype Shift](http://forum.freecodecamp.com/t/javascript-array-prototype-shift/14301)
*   [JS Array Prototype Push](http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

### ![:trophy:](https://forum.freecodecamp.com/images/emoji/emoji_one/trophy.png?v=3 ":trofeo:") Créditos:

Si encontró útil esta página, puede dar las gracias a los colaboradores copiando y pegando la siguiente línea en el chat principal:

**`Thanks @Rafase282 @sabahang @aganita @Hallaathrad for your help with Algorithm: Pig Latin`**

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.