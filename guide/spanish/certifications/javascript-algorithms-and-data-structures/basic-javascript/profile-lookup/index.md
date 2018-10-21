---
title: Profile Lookup
localeTitle: Búsqueda de perfiles
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Tenemos una variedad de objetos que representan a diferentes personas en nuestras listas de contactos.

Un `lookUpProfile()` función que toma **primerNombre** y una propiedad **(prop)** como argumentos ha sido pre-escrito para ti.

La función debe comprobar si es **primerNombre** **primerNombre** de un contacto real y la propiedad dada **(prop)** es una propiedad de ese contacto.

Si ambos son verdaderos, entonces devuelva el _valor_ de esa propiedad.

Si **primerNombre** no se corresponde con contactos a continuación, volver `No such contact` .

Si la **propiedad** no corresponde a ninguna propiedad válida, devuelva `No such property`

*   Cambie el código a continuación `// Only change code below this line` y hasta `// Only change code above this line` .
*   Asegúrese de que está editando el interior de la función `lookUpProfile()` .
    *   Esta función incluye dos parámetros, **firstName** y **prop.**
*   La función debe mirar a través de la lista de **contactos** para el parámetro **primerNombre** dado.
    *   Si se encuentra una coincidencia, la función debe buscar el parámetro **prop** dado.
    *   Si se encuentran tanto el **FirstName** como el **prop** asociado, debe devolver el valor del **prop** .
    *   Si **primerNombre** se encuentra y no se encuentra un **puntal** asociado, debe devolver `No such property` .
*   Si **primerNombre** no se encuentra en cualquier lugar, debe devolver `No such contact` .

#### Enlaces relevantes

*   [Desafío: acceder a las propiedades de los objetos con notación de corchete](http://www.freecodecamp.com/challenges/accessing-objects-properties-with-bracket-notation)
*   [Desafío: Iterar con JavaScript para bucles](http://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Use un bucle `for` para recorrer la lista de **contactos** .

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Use un anidado `if` la declaración comprobar primero si el **nombre** coincide, y luego comprueba `if` los partidos **prop.**

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Deje su `return "No such contact"` fuera del bucle `for` como un final definitivo.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
for (var x = 0; x < contacts.length; x++){ 
    if (contacts[x].firstName === name) { 
        if (contacts[x].hasOwnProperty(prop)) { 
            return contacts[x][prop]; 
        } else { 
            return "No such property"; 
        } 
    } 
 } 
 return "No such contact"; 
```

### Explicación del código:

*   El bucle `for` ejecuta, comenzando por el primer objeto en la lista de **contactos** .
*   Si el parámetro **firstName** pasado a la función coincide con el valor de la clave `"firstName"` en el primer objeto, la instrucción `if` pasa.
*   Luego, usamos el método `.hasOwnProperty()` (verifica si hay una propiedad dada y devuelve un valor booleano) con **prop** como argumento. Si es cierto, se devuelve el valor de **prop** .
    *   Si la segunda instrucción `if` falla, `No such property` se devuelve `No such property` .
*   Si la primera instrucción `if` falla, el bucle `for` continúa hasta el siguiente objeto en la lista de **contactos** .
*   Si el parámetro **firstName** no se corresponde con los **contactos** finales objeto, el `for` las salidas de bucle y `No such contact` se devuelve.

**Ejecución de ejemplo**

*   `lookUpProfile("Akira","likes");` carreras.
*   `"Akira"` coincide con la clave `"firstName"` en el primer objeto, por lo que la instrucción `if` devuelve verdadero.
*   `"likes"` se encuentra dentro del primer objeto, por lo que la segunda declaración `if` devuelve true.
*   Se devuelve el valor de `"likes"` : `"Pizza", "Coding", "Brownie Points"` .

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") **`Wiki Challenge Solution Template`** para referencia.