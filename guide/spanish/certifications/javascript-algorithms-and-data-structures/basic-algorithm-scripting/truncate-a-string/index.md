---
title: Truncate a String
localeTitle: Truncar una cadena
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Necesitamos reducir la longitud de la cadena o **truncarla** si es más larga que las longitudes máximas especificadas y agregar `...` al final. Si no es tan largo entonces lo mantenemos como está.

#### Enlaces relevantes

*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Las cadenas son inmutables en JavaScript, por lo que necesitaremos una nueva variable para almacenar la cadena truncada.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Deberá usar el método slice () y especificar dónde comenzar y dónde parar.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

No olvide que cuando truncamos la palabra, también debemos contar la longitud agregada por `...`

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function truncateString(str, num) { 
  // Clear out that junk in your trunk 
  if (str.length > num && num > 3) { 
    return str.slice(0, (num - 3)) + '...'; 
  } else if (str.length > num && num <= 3) { 
    return str.slice(0, num) + '...'; 
  } else { 
    return str; 
  } 
 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/55)

### Explicación del código:

*   Primero, comenzamos con una simple declaración `if` para determinar uno de los tres resultados ...
*   Si la longitud de nuestra cadena es mayor que el `num` que queremos truncar, y nuestro punto de truncado tiene al menos tres caracteres o más en la cadena, devolvemos un segmento de nuestra cadena que comienza en el carácter 0 y termina en el `num - 3` . Luego agregamos nuestro `'...'` al final de la cadena.
*   Sin embargo, si la longitud de nuestra cadena es mayor que el `num` pero el `num` está dentro de los primeros tres caracteres, no tenemos que contar nuestros puntos como caracteres. Por lo tanto, devolvemos la misma cadena que la anterior, con una diferencia: el punto final de nuestro sector ahora es solo `num` .
*   Por último, si ninguna de las situaciones anteriores son ciertos, significa nuestra longitud de la cadena es menor que nuestra truncamiento `num` . Por lo tanto, podemos devolver la cadena.

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function truncateString(str, num) { 
  if (str.length <= num) { 
    return str; 
  } else { 
    return str.slice(0, num > 3 ? num - 3 : num) + '...'; 
  } 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/54)

### Explicación del código:

*   Primero necesitamos una instrucción if para probar si la longitud de la cadena completa que se pasa como primer argumento ya se encuentra dentro del límite de tamaño pasado como segundo argumento. Si es así, podemos devolver la cadena que se pasó.
    
    if (str.length <= num) volver str
    
*   Si nuestra instrucción `if` falla, nos movemos a `else` , donde devolveremos un "segmento" de la cadena. El método slice extrae una sección de una cadena y devuelve una nueva cadena. Aquí pasamos 0 como punto de partida para nuestra rebanada. Para determinar el punto final, utilizamos un operador ternario: `num > 3 ? num - 3 : num` . En nuestro ternario, si `num` es mayor que 3, debemos tener en cuenta los tres puntos a nuestra longitud total, y así terminamos nuestra división en `num-3` . Si num es menor o igual a 3, nuestra división obtiene una variable final de solo `num` . Finalmente, el `'...'` se agrega al final de nuestra nueva cadena y se devuelve.
    
    } else { devuelve str.slice (0, num> 3? num - 3: num) + '…'; }
    
*   **NOTA** Para comprender el código anterior, debe comprender cómo funciona un operador ternario. El operador ternario se usa frecuentemente como acceso directo para la sentencia `if` y sigue este formato: `condition ? expr1 : expr2` . Si la `condition` evalúa como verdadera, el operador devuelve el valor de `expr1` . De lo contrario, devuelve el valor de `expr2` .
    

#### Enlaces relevantes

*   [Operador condicional (ternario)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
*   [String.prototype.slice ()](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/JS-String-Prototype-Slice)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.