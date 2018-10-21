---
title: Word Blanks
localeTitle: Palabras en blanco
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Ahora usaremos nuestro conocimiento de las cuerdas para construir un juego de palabras al estilo de **Mad Libs** que llamamos "Palabras en blanco". Creará una oración estilo "Rellene los espacios en blanco" (opcionalmente humorística).

Deberá utilizar operadores de cadena para crear una nueva cadena, **resultado** , utilizando las variables proporcionadas: **myNoun** , **myAdjective** , **myVerb** y **myAdverb** .

También deberá usar cadenas adicionales, que no cambiarán, y debe estar entre todas las palabras proporcionadas. La salida debe ser una oración completa.

Hemos proporcionado un marco para probar sus resultados con diferentes palabras. Las pruebas ejecutarán su función con varias entradas diferentes para asegurarse de que todas las palabras proporcionadas aparecen en la salida, así como sus cadenas adicionales.

*   Cambie el código a continuación `//Your Code here` y hasta `//Change this line` .
*   Tenga en cuenta que está editando el interior de la función `wordBlanks()` .
*   Básicamente, habrá creado una oración con las variables de cadena proporcionadas.

#### Enlaces relevantes

*   [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)
*   [Desafío: construir cadenas con variables](http://www.freecodecamp.com/challenges/constructing-strings-with-variables)
*   [Desafío: concatenar cadenas con el operador Plus](http://www.freecodecamp.com/challenges/concatenating-strings-with-plus-operator)
*   [Desafío: concatenar cadenas con el operador Plus Equals](http://www.freecodecamp.com/challenges/concatenating-strings-with-the-plus-equals-operator)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

`+` Se puede utilizar para _concatenar_ cadenas.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Al igual que puede encadenar cadenas concatenando, puede asignarlas a una variable existente en lugar de una nueva.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

`+=` le permitirá usar una variable existente, un tipo de cadena en este caso. Recuerda agregar tus propias **letras no** entre cada variable.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) { 
    var result = ""; 
    // Your code below this line 
    result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+"."; 
 
    // Your code above this line 
  return result; 
 } 
 
 // Change the words here to test your function 
 wordBlanks("dog", "big", "ran", "quickly"); 
```

**Ejecución de ejemplo**

*   Pruebe `wordBlanks("dog", "big", "ran", "quickly");` carreras.
*   El **resultado** variable se declara con una cadena vacía `""` .
*   **el resultado** se cambiará con una nueva cadena compuesta por las cadenas concatenadas "dog", "big", " **run** ", " **quick** " a través de las variables **myNoun** , **myAdjective** , **myVerb** , **myAdverb** respectivamente; Se cambia el orden y se agregan espacios en blanco.
*   **el resultado** es devuelto.

### Explicación del código:

*   Usa el **resultado** para concatenar las variables dadas.
*   Separe las palabras con espacios en blanco y las palabras apropiadas para formar la oración completa.

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.