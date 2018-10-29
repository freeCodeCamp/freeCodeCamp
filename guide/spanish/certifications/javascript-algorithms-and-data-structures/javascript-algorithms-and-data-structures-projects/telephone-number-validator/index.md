---
title: Telephone Number Validator
localeTitle: Validador de números de teléfono
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

La tarea no es tan difícil de entender, implementarla es la parte más difícil. Usted tiene un para validar un número de teléfono de Estados Unidos. Esto significa que se requiere una cierta cantidad de números, mientras que no es necesario que coloque el código de país, aún necesitará el código de área y use uno de los pocos formatos permitidos.

#### Enlaces relevantes

*   [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
*   [regexpal.com](http://regexpal.com/)
*   [regex101.com/](https://regex101.com/#javascript)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

No hay forma de evitarlo, tendrá que mejorar sus habilidades de expresión regular.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Intente usar un sitio de la lista anterior para probar la expresión regular en vivo mientras lo crea.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Comience por intentar que se valide cada formato del ejemplo, cada uno debe tomar una nueva línea, una vez que los seleccione todos, luego agregue ejemplos que no deberían seleccionarse y asegúrese de que no estén seleccionados.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function telephoneCheck(str) { 
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; 
   return regex.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLo9/0)

### Explicación del código:

*   `^` denota el comienzo de la cadena.
*   `(1\s?)?` permite "1" o "1" si hay uno.
*   `\d{n}` verifica exactamente n números de dígitos, por lo que `\d{3}` verifica tres dígitos.
*   `x|y` comprueba si x O y y así `(\(\d{3}\)|\d{3})` verifica si hay tres dígitos entre paréntesis, o tres dígitos por sí mismos sin paréntesis.
*   `[\s\-]?` comprueba si hay espacios o guiones entre los grupos de dígitos.
*   `$` denota el final de la cadena. En este caso, el principio `^` y el final de la cadena `$` se utilizan en la expresión regular para evitar que coincida con una cadena más larga que pueda contener un número de teléfono válido (por ejemplo, "s 555 555 5555 3").
*   Por último, usamos `regex.test(str)` para probar si la cadena se adhiere a la expresión regular, devuelve `true` o `false` .

#### Enlaces relevantes

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
    
*   [Guía de Expresión Regular](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
    

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function telephoneCheck(str) { 
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/; 
  return re.test(str); 
 } 
 telephoneCheck("555-555-5555"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLoa/0)

### Explicación del código:

Este es un ejemplo de una solución muy completa y robusta para validar los números de teléfono de los EE. UU. Del lado del cliente. En tales casos, podría ser mucho mejor y más fácil implementar esta biblioteca [libphonenumber](https://github.com/googlei18n/libphonenumber) .

#### Enlaces relevantes

*   [Regex.test ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
*   [libphonenumber](https://github.com/googlei18n/libphonenumber)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.