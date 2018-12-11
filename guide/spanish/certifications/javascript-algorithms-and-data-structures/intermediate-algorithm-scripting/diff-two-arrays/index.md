---
title: Diff Two Arrays
localeTitle: Diferencia dos matrices
---
![](//discourse-user-assets.s3.amazonaws.com/original/2X/2/24043ff6eaf64c58ca15936ec29bd7c22809c9de.gif)

![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Verifique dos matrices y devuelva una nueva matriz que contenga solo los elementos que no estén en ninguna de las matrices originales.

#### Enlaces relevantes

*   [para Loop (Devdocs)](https://devdocs.io/javascript/statements/for)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Combine la lista para facilitar la comparación de funciones.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Utilice el filtro para obtener la nueva matriz, tendrá que crear una función de devolución de llamada.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

La mejor manera de realizar la función de devolución de llamada es verificar si el número de la nueva matriz combinada no se encuentra en **ambas** matrices originales y devolverlo.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico (Solución imperativa):

```javascript
    function diffArray(arr1, arr2) { 
      var newArr = []; 
 
      function onlyInFirst(first, second) { 
      // Looping through an array to find elements that don't exist in another array 
        for (var i=0;i<first.length;i++) { 
          if (second.indexOf(first[i]) === -1) { 
            // Pushing the elements unique to first to newArr 
            newArr.push(first[i]); 
          } 
        } 
      } 
 
      onlyInFirst(arr1, arr2); 
      onlyInFirst(arr2, arr1); 
 
      return newArr; 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLme/0)

### Explicación del código:

Lee los comentarios en el código.

#### Enlaces relevantes

*   [para Loop (Devdocs)](https://devdocs.io/javascript/statements/for)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio (Solución declarativa):

```javascript
    function diffArray(arr1, arr2) { 
      return arr1 
        .concat(arr2) 
        .filter( 
            item => !arr1.includes(item) || !arr2.includes(item) 
        ) 
    } 
 
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CNYb/0)

### Explicación del código:

Explica la solución aquí y agrega cualquier enlace relevante.

#### Enlaces relevantes

*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución de código avanzada (solución declarativa):
```
function diffArray(arr1, arr2) { 
    return arr1 
      .filter(el => !arr2.includes(el)) 
      .concat( 
        arr2.filter(el => !arr1.includes(el)) 
      ) 
 } 
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CNYU/0)

### Explicación del código:

Explica la solución aquí y agrega cualquier enlace relevante.

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución alternativa de código avanzado (solución declarativa):
```
function diffArray(arr1, arr2) { 
  return [ 
    ...diff(arr1, arr2), 
    ...diff(arr2, arr1) 
  ] 
 
  function diff(a, b) { 
    return a.filter(item => b.indexOf(item) === -1); 
  } 
 } 
```

#### Enlaces relevantes

*   [Array.prototype.includes (Devdocs)](https://devdocs.io/javascript/global_objects/array/includes)
*   [Array.prototype.filter (Devdocs)](https://devdocs.io/javascript/global_objects/array/filter)
*   [Array.prototype.concat (Devdocs)](https://devdocs.io/javascript/global_objects/array/concat)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.