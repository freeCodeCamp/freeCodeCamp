---
title: Missing Letters
localeTitle: Cartas perdidas
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Creará un programa que encontrará la letra que falta en una cadena y la devolverá. Si no falta una letra, el programa debería regresar indefinido. Actualmente no hay un caso de prueba para la cadena que falta más de una letra, pero si hubiera una, se usaría la recursión. Además, las letras siempre se proporcionan en orden para que no haya necesidad de ordenarlas.

#### Enlaces relevantes

*   [Objeto global de cadena](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype CharCodeAt](http://forum.freecodecamp.com/t/javascript-string-prototype-charcodeat/15933)
*   String.fromCharCode

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Deberá convertir el carácter al código ASCII usando los dos métodos proporcionados en la descripción.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Tendrá que verificar la diferencia en el código ASCII ya que están en orden. Usar una tabla sería muy útil.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Deberá averiguar dónde está la letra faltante, junto con el manejo del caso de que no falte una letra, ya que necesita un valor de devolución específico.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function fearNotLetter(str) { 
 
  for(var i = 0; i < str.length; i++) { 
    /* code of current character */ 
    var code = str.charCodeAt(i); 
 
    /* if code of current character is not equal to first character + no of iteration 
    hence character has been escaped */ 
    if (code !== str.charCodeAt(0) + i) { 
 
      /* if current character has escaped one character find previous char and return */ 
      return String.fromCharCode(code - 1); 
    } 
  } 
  return undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnD/0)

### Explicación del código:

*   Esta solución hace uso de un bucle `for` .
*   El código del personaje encontrado se almacena en el **código** .
*   Se verifica si el código del carácter actual es el esperado (no se omiten caracteres) utilizando el `code of current character = code of first character + number of iterations` lógico `code of current character = code of first character + number of iterations` .
*   Si falta un carácter, se encuentra el carácter que falta y se devuelve la cadena final.
*   se devuelve `undefined` si no falta ningún carácter en la cadena.

#### Enlaces relevantes

*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   Longitud de la cuerda

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
// Adding this solution for the sake of avoiding using 'for' and 'while' loops. 
 // See the explanation for reference as to why. It's worth the effort. 
 
 function fearNotLetter(str) { 
  var compare = str.charCodeAt(0), missing; 
 
  str.split('').map(function(letter,index) { 
    if (str.charCodeAt(index) == compare) { 
      ++compare; 
    } else { 
      missing = String.fromCharCode(compare); 
    } 
  }); 
 
  return missing; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnE/0)

### Explicación del código:

*   Primero definimos las variables para almacenar el código de carácter para la primera letra de la cadena y para almacenar las letras que faltan que podamos encontrar.
*   Damos vuelta a la cadena en una matriz con el fin de trazar a través de él en lugar de utilizar `for` y `while` bucles.
*   A medida que `map` través de los códigos de caracteres de nuestras letras, vamos comparando con el que debería estar en esa posición.
*   Si la letra actual coincide, movemos la variable de comparación a su siguiente posición para que podamos comparar en el siguiente ciclo.
*   De lo contrario, la letra faltante se asignará a la variable `missing` , que se devolverá una vez que el mapa haya finalizado.
*   Si no hay caracteres faltantes, devuelve `undefined` .

#### Enlaces relevantes

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Mapa de prototipos JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución de código avanzado simplificado:
```
function fearNotLetter(str) { 
  for (let i = 1; i < str.length; ++i) { 
    if (str.charCodeAt(i) - str.charCodeAt(i-1) > 1) { 
      return String.fromCharCode(str.charCodeAt(i - 1) + 1); 
    } 
  } 
 } 
```

### Explicación del código:

*   Bucle sobre la cuerda
*   Compruebe si la diferencia en los códigos de caracteres entre caracteres adyacentes en la cadena es más de 1 (tabla ASCII de chack)
*   Devuelve el carácter que falta (+1 desde donde se detectó el espacio)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function fearNotLetter(str) { 
  var allChars = ''; 
  var notChars = new RegExp('[^'+str+']','g'); 
 
  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++) 
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i); 
 
  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined; 
 } 
 
 // test here 
 fearNotLetter("abce"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnG/0)

### Explicación del código:

*   Se **crea** una nueva cadena **allChars** .
*   Crea una expresión regular **notChars** que selecciona todo excepto **str** .
*   El bucle `for` se utiliza para agregar todas las letras del rango a **allChars** .
*   `match()` se usa para quitar las letras **str** de la cadena recién creada y se devuelve.
*   Si no hay caracteres faltantes, devuelve `undefined` .

#### Enlaces relevantes

*   Recursos JS Regex
*   [Js ternario](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)
*   [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.