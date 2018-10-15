---
title: Mutations
localeTitle: Mutaciones
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

*   Devuelva verdadero si la cadena en el primer elemento de la matriz contiene todas las letras de la cadena en el segundo elemento de la matriz.

#### Enlaces relevantes

*   [String.indexOf ()](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   Si todo está en minúsculas, será más fácil de comparar.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Puede ser más fácil trabajar con nuestras cadenas si fueran matrices de caracteres.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   Un bucle podría ayudar. Use `indexOf()` para verificar si la letra de la segunda palabra está en la primera.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:

**Procesal**
```
function mutation(arr) { 
  var test = arr[1].toLowerCase(); 
  var target = arr[0].toLowerCase(); 
  for (var i=0;i<test.length;i++) { 
    if (target.indexOf(test[i]) < 0) 
      return false; 
  } 
  return true; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/30)

### Explicación del código:

Primero hacemos las dos cadenas en la matriz en minúsculas. `test` mantendrá lo que estamos buscando en el `target` .  
Luego hacemos un bucle a través de nuestros personajes de prueba y si no se encuentra alguno de ellos, `return false` .

Si se encuentran _todos_ , el bucle terminará sin devolver nada y podemos `return true` .

#### Enlaces relevantes

*   [String.toLowerCase ()](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [Para bucles](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:

**Declarativo**
```
function mutation(arr) { 
  return arr[1].toLowerCase() 
    .split('') 
    .every(function(letter) { 
      return arr[0].toLowerCase() 
        .indexOf(letter) != -1; 
    }); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/31)

### Explicación del código:

Toma la segunda cadena, en minúscula y conviértela en una matriz; luego asegúrese de que _cada_ una de sus _letras_ sea ​​parte de la primera cadena en minúsculas.

Básicamente, `Every` le daremos letra por letra para comparar, lo que hacemos al usar `indexOf` en la primera cadena. `indexOf` le dará -1 si falta la `letter` actual. Verificamos que no sea así, ya que si esto sucede incluso una vez, `every` será falso.

#### Enlaces relevantes

*   [Array.split ()](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [Array.every ()](http://forum.freecodecamp.com/t/javascript-array-prototype-every/14287)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.