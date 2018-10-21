---
title: Repeat a String Repeat a String
localeTitle: Repetir una cadena Repetir una cadena
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

El programa es muy simple, tenemos que tomar una variable y devolver esa variable repetida cierta cantidad de veces. No es necesario agregar espacio ni nada, simplemente repítalo en una sola cadena.

#### Enlaces relevantes

*   [Objeto de cadena global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

No puede editar cadenas, tendrá que crear una variable para almacenar la nueva cadena.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Cree un bucle para repetir el código tantas veces como sea necesario.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Haga que la variable creada almacene el valor actual y agregue la palabra a la misma.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function repeatStringNumTimes(str, num) { 
  var accumulatedStr = ''; 
 
  while (num > 0) { 
    accumulatedStr += str; 
    num--; 
  } 
 
  return accumulatedStr; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/19)

### Explicación del código:

*   Cree una variable de cadena vacía para almacenar la palabra repetida.
*   Use un bucle while o para repetir el código tantas veces como sea necesario de acuerdo con `num`
*   Luego, solo tenemos que agregar la cadena a la variable creada en el paso uno, y aumentar o disminuir el `num` dependiendo de cómo establezca el bucle.
*   Al final del bucle, devuelva la variable para la palabra repetida.

#### Enlaces relevantes

*   JS mientras bucle
*   [JS For Loops Explicado](https://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function repeatStringNumTimes(str, num) { 
  if(num < 0) 
    return ""; 
  if(num === 1) 
    return str; 
  else 
    return str + repeatStringNumTimes(str, num - 1); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/21)

### Explicación del código:

*   Esta solución utiliza la recursión.
*   Verificamos si `num` es negativo y devolvemos una cadena vacía si es verdadero.
*   Luego verificamos si es igual a 1 y, en ese caso, devolvemos la cadena.
*   Si no, agregamos la cadena a una llamada de nuestra función con `num` disminuyendo en 1, lo que agregará otra `str` y otra ... hasta que finalmente `num` sea ​​1. Y devolvemos todo el proceso.

#### Enlaces relevantes

*   [Funciones - Recursion](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function repeatStringNumTimes(str, num) { 
  return num > 0 ? str.repeat(num) : ''; 
 } 
 
 repeatStringNumTimes("abc", 3); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/85)

### Explicación del código:

*   Esta solución tiene un enfoque declarativo.
*   Es similar a la tercera solución, excepto que utiliza la forma de operador ternario de la sentencia `if` .

#### Enlaces relevantes

*   [Js ternario](https://forum.freecodecamp.com/t/javascript-ternary-operator/15973)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](https://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.