---
title: Palindrome Checker
localeTitle: Comprobador de palíndromo
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/c/ca86619bb0ec05531dbb02be3c0b7b8383e67f01.jpg)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Nuestro objetivo para resolver este problema es ordenar la cadena que se pasa y comprobar si es en realidad un palíndromo.

*   Si no está seguro de qué es un palíndromo, es una palabra o frase que cuando se invierte deletrea la misma cosa hacia adelante o hacia atrás. Un ejemplo simple es `mom` , cuando inviertes las letras, ¡deletrea lo mismo! Otro ejemplo de un palíndromo es el `race car` . Cuando eliminamos cualquier cosa que no sea un personaje, se convierte en un `racecar` que se escribe igual hacia adelante o hacia atrás.

Una vez que hayamos determinado si se trata de un palíndromo o no, queremos devolver `true` o `false` según nuestros hallazgos.

#### Enlaces relevantes

*   [String.prototype.replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [String.prototype.toLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Las expresiones regulares, `RegEx` , se pueden usar para eliminar caracteres no deseados de la cadena.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Los métodos `Array.prototype.split` y `Array.prototype.join` pueden ser de utilidad aquí. `For` y `while` bucles son otra alternativa, ¡o por qué ni siquiera `map` !

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

`String.prototype.toLowerCase` se puede usar para hacer una cadena en minúscula.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

```javascript
    function palindrome(str) { 
      return str.replace(/[\W_]/g, '').toLowerCase() === 
             str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join(''); 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/2)

### Explicación del código:

*   Comenzamos utilizando expresiones regulares para reemplazar cualquier espacio en blanco o caracteres no alfanuméricos con nada (o `null` ), que esencialmente los elimina de la cadena.
    
*   A continuación _encadenamos_ `.toLowerCase()` para eliminar las letras en mayúscula porque `A` es un personaje diferente a `a` . El problema no nos pidió que nos preocupáramos por asegurarnos de que el caso de los personajes fuera idéntico, solo la ortografía.
    
*   Nuestro siguiente paso es tomar nuestra cadena y `.split()` it, `.reverse()` y, finalmente, `.join()` nuevo.
    
*   ¡El último paso es verificar que la cadena sea la misma hacia adelante y hacia atrás y devolver nuestro resultado!
    

#### Enlaces relevantes

*   [String.prototype.split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.prototype.reverse](http://forum.freecodecamp.com/t/javascript-array-prototype-reverse/14300)
*   [Array.prototype.join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

```javascript
    function palindrome(str) { 
      str = str.toLowerCase().replace(/[\W_]/g, ''); 
      for(var i = 0, len = str.length - 1; i < len/2; i++) { 
        if(str[i] !== str[len-i]) { 
          return false; 
        } 
      } 
      return true; 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/3)

### Explicación del código:

*   Comenzamos usando los mismos métodos para reemplazar los caracteres que no queremos en la cadena usando expresiones regulares de `RegEx` , y luego hacemos nuestra cadena en minúscula.
    
*   A continuación, configuramos nuestro bucle `for` y declaramos un índice `i` para realizar un seguimiento del bucle. Establecemos nuestra secuencia de escape en cuando `i` es mayor que la longitud de la cadena dividida por dos, lo que le dice al bucle que se detenga después del punto medio de la cadena. Y finalmente configuramos `i` para incrementar después de cada bucle.
    
*   Dentro de cada bucle queremos comprobar que la letra en el elemento `[i]` es igual a la letra en la longitud de la cadena menos i, `[str.length - i]` . En cada bucle, el elemento que se comprueba en ambos lados de la cadena se mueve más cerca del centro hasta que hayamos verificado todas las letras. Si en algún punto las letras no coinciden, devolvemos `false` . Si el bucle se completa con éxito, significa que tenemos un palíndromo y, por lo tanto, devolvemos `true` .
    

#### Enlaces relevantes

*   Regex

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución de código avanzada (más ejecutante):

```javascript
    //this solution performs at minimum 7x better, at maximum infinitely better. 
    //read the explanation for the reason why. I just failed this in an interview. 
    function palindrome(str) { 
      //assign a front and a back pointer 
      let front = 0 
      let back = str.length - 1 
 
      //back and front pointers won't always meet in the middle, so use (back > front) 
      while (back > front) { 
        //increments front pointer if current character doesn't meet criteria 
        if ( str[front].match(/[\W_]/) ) { 
          front++ 
          continue 
        } 
        //decrements back pointer if current character doesn't meet criteria 
        if ( str[back].match(/[\W_]/) ) { 
          back-- 
          continue 
        } 
        //finally does the comparison on the current character 
        if ( str[front].toLowerCase() !== str[back].toLowerCase() ) return false 
        front++ 
        back-- 
      } 
 
      //if the whole string has been compared without returning false, it's a palindrome! 
      return true 
 
    } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/4)

### Explicación del código:

*   Me dieron este problema en una entrevista (spoiler: no fui contratado ![:frowning:](https://forum.freecodecamp.com/images/emoji/emoji_one/frowning.png?v=3 ":ceñudo:") ) Rápidamente llegué a la solución básica, y el entrevistador me dijo que la mejorara. El algoritmo tomaría demasiado tiempo si pasara la Biblia como la cadena. Quería que fuera instantáneo.
    
*   Las soluciones más simples funcionan muy mal en cadenas largas porque operan en toda la cadena varias veces (toLowerCase (), replace (), split (), reverse (), join ()) antes de comparar la cadena **completa** dos veces.
    
*   La belleza de esta solución es que nunca **necesita** leer toda la cadena, ni una sola vez, para saber que no es un palíndromo. ¿Por qué leer toda la cadena si puedes decir que no es un palíndromo con solo mirar dos letras?
    
*   Utiliza un bucle while en lugar de un bucle for como una mejor práctica, ya que estamos usando dos variables, una es el índice que comienza desde el principio de la cadena y la otra comienza al final de la cadena.
    

#### Enlaces relevantes

*   [Complejidad ciclomática](https://en.wikipedia.org/wiki/Cyclomatic_complexity)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.