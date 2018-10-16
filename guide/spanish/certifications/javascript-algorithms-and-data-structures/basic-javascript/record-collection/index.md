---
title: Record Collection
localeTitle: Colección de discos
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Se le proporciona un objeto JSON que representa (una pequeña parte de) su colección de registros. Cada álbum se identifica con un número de identificación único y tiene varias propiedades. No todos los álbumes tienen información completa.

Escriba una función que tome un **id** , una propiedad ( **prop** ) y un **valor** .

Para la **identificación** dada en la **colección** :

Si el **valor** no está en blanco ( **valor! == ""** ), entonces actualice o establezca el **valor** para la **prop** .

Si la **prop** es **"tracks"** y el **valor** no está en blanco, verifique si el elemento dado en la matriz tiene la propiedad de "tracks". Si el elemento tiene la propiedad de "pistas", presione el **valor** hacia el final de la matriz de "pistas". Si el elemento no tiene la **propiedad** , cree el par de propiedad y valor.

Si el **valor** está en blanco, elimine esa **prop** .

Siempre devuelve todo el objeto de colección.

*   Cambie el código a continuación `// Only change code below this line` y hasta `// Alter values below to test your code` .
*   Tenga en cuenta que está editando el interior de la función `updateRecords` .
*   Para el parámetro **id** dado, que está asociado al objeto de **colección** :
    *   Si el parámetro de **valor** no es una cadena vacía, actualice (o establezca) el parámetro de **valor** para el parámetro **prop** .
    *   Si el parámetro **prop** es igual a `"tracks"` y el **valor** no es una cadena vacía, presione el **valor** en el extremo de la matriz de **tracks** .
    *   Si el **valor** es una cadena vacía, elimine esa **prop** del objeto.
*   Finalmente, devuelve el objeto de **colección** .

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Use una instrucción `else if` para verificar los pasos necesarios.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

El segundo paso que se enumera en las instrucciones debe ser el primero en su `else if` instrucción `else if` .

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Para acceder al valor de una clave en este objeto, utilizará la `collection[id][prop]` .

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function updateRecords(id, prop, value) { 
  if (prop === "tracks" && value !== "") { 
   if(collection[id][prop]) { 
    collection[id][prop].push(value); 
   } 
   else { 
    collection[id][prop]=[value]; 
   } 
  } else if (value !== "") { 
    collection[id][prop] = value; 
  } else { 
    delete collection[id][prop]; 
  } 
 
  return collection; 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/C2AZ/0)

### Explicación del código:

*   Primero verifica si la **prop** es igual a las **pistas** Y si el **valor** no es una cadena en blanco. Si ambas pruebas pasan, el **valor** se inserta en la matriz de **pistas** .
*   Si esa primera verificación no se pasa, a continuación solo verifica si el **valor** no es una cadena en blanco. Si esa prueba pasa, se agregan una nueva clave ( **prop** ) y un valor ( **valor** ) al objeto, o una clave existente se actualiza si ya existe la **prop** .
*   Si ambas comprobaciones fallan (lo que significa que el **valor** debe ser una cadena vacía), la clave ( **prop** ) se elimina del objeto.

**Ejecución de ejemplo**

*   `updateRecords(5439, "artist", "ABBA");` carreras.
*   **prop** es igual a "artista", no a "pistas", por lo que la primera parte de la sentencia `else if` falla.
*   **el valor** no es una cadena en blanco, por lo que la segunda parte de la otra parte si la declaración pasa.
*   `artist: "ABBA"` se agrega a la `id` `5439` .

### Recursos:

*   [El desafío de la FCC: acceder a las propiedades de los objetos con notación de corchete](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/)
*   [El desafío de la FCC: agregar nuevas propiedades a un objeto de JavaScript](http://www.freecodecamp.com/challenges/add-new-properties-to-a-javascript-object)
*   [El desafío de la FCC: eliminar propiedades de un objeto JavaScript](http://www.freecodecamp.com/challenges/delete-properties-from-a-javascript-object)
*   [El desafío de la FCC: acceder a objetos anidados](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects/)
*   ["Array.prototype.push ()" - _referencia de JavaScript de MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
*   ["eliminar operador" - _referencia de JavaScript MDN_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)