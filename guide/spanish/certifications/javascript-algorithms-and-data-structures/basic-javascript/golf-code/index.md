---
title: Golf Code
localeTitle: Codigo de golf
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

En el juego de golf, cada hoyo tiene un **par, lo que** significa el número promedio de **golpes** que se espera que un golfista realice para hundir la bola en un hoyo para completar el juego. Dependiendo de qué tan por encima o **por** debajo de tus **golpes** , hay un apodo diferente.

Su función se pasará **par** y **trazos** argumentos. Debe devolver la cadena correcta de acuerdo con esta tabla que enumera los trazos en orden de prioridad; arriba (más alto) a abajo (más bajo):

Trazos | Regreso  
: --------- | : -------------  
1 | "¡Hoyo en uno!"  
<= par - 2 | "Águila"  
par - 1 | "Pajarito"  
par | "Par"  
par + 1 | "Espectro"  
par + 2 | "Doble Bogey" > = par + 3 | "¡Vete a casa!"

**Par** y **trazos** siempre serán numéricos y positivos.

*   Cambie el código a continuación `// Only change code below this line` y arriba `// Only change code above this line` .
*   Asegúrese de que está editando el interior de la función `golfScore` .
*   Tendrá que hacer que la función devuelva exactamente la misma cadena que se muestra en la tabla, dependiendo del valor de los parámetros **par** y los **trazos** que se pasan a su función.

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

`+number -number` puede utilizarse para aumentar o disminuir un parámetro en su condición.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Usas `if / else if` cadenas para devolver diferentes valores en diferentes escenarios.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Controle el flujo de su función según el orden de prioridad de las tablas: de arriba (más alto) a más bajo (más bajo) para devolver valores de cadena coincidentes.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return "Hole-in-one!"; 
  } else if (strokes <= par -2){ 
    return "Eagle"; 
  } else if (strokes == par -1) { 
    return "Birdie"; 
  } else if (strokes == par) { 
    return "Par"; 
  } else if (strokes == par +1) { 
    return "Bogey"; 
  } else if (strokes == par +2) { 
    return "Double Bogey"; 
  } else { 
    return "Go Home!"; 
  } 
  // Only change code above this line 
 } 
 // Change these values to test 
 golfScore(5, 4); 
```

### Explicación del código:

*   Compare los parámetros **par** y **trazos** para devolver valores de cadena apropiados.
*   `if / else if` cadena se utiliza para el control de flujo.
*   Cuerda "ir a casa!" se devuelve para cada condición donde los **trazos** son mayores o iguales al **par + 3** .

## Solución de código alternativo:

```javascript
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]; 
 function golfScore(par, strokes) { 
  // Only change code below this line 
  if (strokes == 1){ 
    return names[0]; 
  } 
  else if (strokes <= par-2){ 
    return names[1]; 
  } 
  else if (strokes == par -1){ 
    return names[2]; 
  } 
  else if (strokes == par){ 
    return names[3]; 
  } 
  else if (strokes == par +1){ 
    return names[4]; 
  } 
  else if (strokes == par +2){ 
    return names[5]; 
  } 
  else {return names[6];} 
  // Only change code above this line 
 } 
 
 // Change these values to test 
 golfScore(5, 4); 
```

· Ejecutar en [repl.it](https://repl.it/@AdrianSkar/Basic-JS-Golf-code)

\## explicación del código Como ya tenemos una matriz definida en los `names` las variables, podemos aprovecharla y utilizarla para nuestras declaraciones de devolución usando índices (por ejemplo: `names[0] is the first one` ). De esa manera, si alguna vez necesita cambiar un resultado específico, no tendría que buscarlo dentro de la función, estaría al principio, en su matriz.

### Recursos

*   [Golf](https://en.wikipedia.org/wiki/Golf)
*   [Desafío: Encadenar Si En Else Declaraciones](http://www.freecodecamp.com/challenges/chaining-if-else-statements)
*   [Desafío: Comparación con el operador mayor que igual](http://www.freecodecamp.com/challenges/comparison-with-the-greater-than-equal-to-operator)
*   [Desafío: Comparación con el operador menos que igual](http://www.freecodecamp.com/challenges/comparison-with-the-less-than-equal-to-operator)
*   ["Array" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)