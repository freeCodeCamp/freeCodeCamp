---
title: Slice and Splice
localeTitle: Rebanada y empalme
---
## Rebanada y empalme

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Necesitamos copiar cada elemento de la primera matriz en la segunda matriz comenzando en el índice n. También tenemos que asegurarnos de que las matrices originales no estén mutadas. Es decir, no podemos realizar ningún cambio en las matrices originales.

#### Enlaces relevantes

*   [str.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
*   [str.splice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Crea una copia de la segunda matriz dentro de la función. Esto asegurará que la matriz original no esté mutada. Esto se puede hacer usando la operación de división en la segunda matriz y asignándola a una variable.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Recorre todos los elementos de la primera matriz. Para cada elemento de la primera matriz, empalme en la matriz copiada en el índice dado como argumento.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Incrementa el índice después de realizar el empalme.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](https://discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function frankenSplice(arr1, arr2, n) { 
  // It's alive. It's alive! 
  let localArray = arr2.slice(); 
  for (let i = 0; i < arr1.length; i++) { 
    localArray.splice(n, 0, arr1[i]); 
    n++; 
  } 
  return localArray; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU)

### Explicación del código:

*   Nuestro objetivo es tomar todos los elementos de `arr1` e insertarlos en `arr2` comenzando con la posición de índice `n` . Al mismo tiempo, debemos asegurarnos de que ni `arr` ni `arr2` hayan sido mutados.
    
*   Usando la función `slice()` podemos crear una réplica exacta de `arr2` y asignar el resultado de la operación a una variable, `localArray` .
    
*   Ahora que tenemos una matriz en la que podemos mutar, podemos iterar a través de cada elemento en la primera matriz. Para cada elemento de la primera matriz, podemos usar la función `splice()` para insertar el elemento en el índice `n` de `localArray` .
    
*   Incrementamos el índice `n` en uno. Esto asegurará que cada elemento del `arr1` se inserte en `localArray` en la posición de índice adecuada.
    
*   Finalmente, devolvemos el `localArray` y `localArray` la función.
    

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.