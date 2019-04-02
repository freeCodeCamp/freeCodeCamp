---
title: Spinal Tap Case
localeTitle: Caja del grifo espinal
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Convierte la cadena dada en una oración en minúscula con palabras unidas por guiones.

#### Enlaces relevantes

*   [Objeto global de cadena](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   Recursos JS Regex
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Crea una expresión regular para todos los espacios en blanco y guiones bajos.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

También tendrás que hacer todo en minúsculas.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

La parte difícil es hacer que la parte de la expresión regular funcione, una vez que lo haga, simplemente gire la mayúscula a la minúscula y reemplace los espacios con guiones bajos utilizando `replace()` .

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function spinalCase(str) { 
  // Create a variable for the white space and underscores. 
  var regex = /\s+|_+/g; 
 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
 
  // Replace space and underscore with - 
  return str.replace(regex, '-').toLowerCase(); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnS/0)

### Explicación del código:

*   **expresiones regulares** contiene la expresión regular `/\s+|_+/g` , que seleccionará todos los espacios en blanco y caracteres de subrayado.
*   La primera `replace()` pone un espacio antes de los caracteres en mayúsculas se encuentran en la cadena **str** manera que los espacios pueden ser reemplazados por guiones más adelante.
*   Al devolver la cadena, otro `replace()` reemplaza los espacios y los guiones bajos con guiones usando **expresiones regulares** .

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function spinalCase(str) { 
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([az])([AZ])/g, '$1 $2'); 
  // Split on whitespace and underscores and join with dash 
  return str.toLowerCase().split(/(?:_| )+/) .join('-'); 
 } 
 
 // test here 
 spinalCase('This Is Spinal Tap'); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLnT/0)

### Explicación del código:

*   Al igual que en la primera solución, la primera `replace()` pone un espacio antes de los caracteres en mayúsculas se encuentran en la cadena **str** manera que los espacios pueden ser reemplazados por guiones más adelante.
*   En lugar de utilizar `replace()` aquí para reemplazar los espacios en blanco y los guiones bajos con guiones, la cadena se `split()` en la expresión regular `/(?:_| )+/` Y `join()` -ed en `-` .

#### Enlaces relevantes

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function spinalCase(str) { 
  // "It's such a fine line between stupid, and clever." 
  // --David St. Hubbins 
 
  return str.split(/\s|_|(?=[AZ])/).join('-').toLowerCase() 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/EUZV)

### Explicación del código:

*   Dividir la cadena en una de las siguientes condiciones ( _convertida a una matriz_ )
    *   se encuentra un carácter de espacio en blanco \[ `\s` \]
    *   se encuentra el carácter de subrayado \[ `_` \]
    *   o es seguido por una letra mayúscula \[ `(?=[AZ])` \]
*   Unirse a la matriz utilizando un guión ( `-` )
*   Minúsculas toda la cadena resultante

#### Enlaces relevantes

*   [String # split](http://devdocs.io/javascript/global_objects/string/split)
*   [RegExp](http://devdocs.io/javascript/global_objects/regexp)
*   [Arrray # unirse](http://devdocs.io/javascript/global_objects/array/join)
*   [Cadena # toLowerCase](http://devdocs.io/javascript/global_objects/string/tolowercase)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.