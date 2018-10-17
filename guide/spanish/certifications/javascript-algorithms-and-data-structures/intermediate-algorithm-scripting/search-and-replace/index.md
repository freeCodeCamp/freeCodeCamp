---
title: Search and Replace
localeTitle: Buscar y reemplazar
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Creará un programa que toma una oración, luego busque una palabra en ella y la reemplaza por una nueva, a la vez que conserva las mayúsculas, si las hay.

#### Enlaces relevantes

*   [Objeto global de cadena](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   Encuentra el índice donde `before` está en la cadena.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Compruebe el caso de la primera letra.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   Las cadenas son inmutables, tendrá que guardar las ediciones en otra variable, incluso si debe reutilizar la misma solo para que se vea como los cambios que se realizaron usando solo esa variable.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function myReplace(str, before, after) { 
  // Find index where before is on string 
  var index = str.indexOf(before); 
  // Check to see if the first letter is uppercase or not 
  if (str[index] === str[index].toUpperCase()) { 
    // Change the after word to be capitalized before we use it. 
    after = after.charAt(0).toUpperCase() + after.slice(1); 
  } 
  // Now replace the original str with the edited one. 
  str = str.replace(before, after); 
 
  return str; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmo/0)

### Explicación del código:

*   Use `indexOf()` para encontrar la ubicación de **antes** en la cadena.
*   Si la primera letra de **antes** se escribe con mayúscula, cambie la primera letra de **después** a mayúscula.
*   Reemplace **antes** en la cadena con **después** .
*   Devuelve la nueva cadena.

#### Enlaces relevantes

*   [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [Prototipo de cuerdas JS](http://forum.freecodecamp.com/t/javascript-string-prototype-charat/15932)
*   [JS String Prototype Slice](http://forum.freecodecamp.com/t/javascript-string-prototype-slice/15943)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function myReplace(str, before, after) { 
 //Create a regular expression object 
  var re = new RegExp(before,"gi"); 
 //Check whether the first letter is uppercase or not 
  if(/[AZ]/.test(before[0])){ 
  //Change the word to be capitalized 
    after = after.charAt(0).toUpperCase()+after.slice(1); 
     } 
     //Replace the original word with new one 
  var  newStr =  str.replace(re,after); 
 
 return newStr; 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmp/0)

### Explicación del código:

*   En esta solución, la expresión regular `[AZ]` se usa para verificar si el carácter está en mayúsculas.
*   Crear un nuevo objeto de expresión regular, **re** .
*   Si la primera letra de **antes** se escribe con mayúscula, cambie la primera letra de **después** a mayúsculas.
*   Reemplazar **antes** con **después** en la cadena.
*   Devuelve la nueva cadena.

#### Enlaces relevantes

*   Recursos JS Regex

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function myReplace(str, before, after) { 
 
    // create a function that will change the casing of any number of letter in parameter "target" 
    // matching parameter "source" 
    function applyCasing(source, target) { 
        // split the source and target strings to array of letters 
        var targetArr = target.split(""); 
        var sourceArr = source.split(""); 
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array 
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){ 
            // find out the casing of every letter from sourceArr using regular expression 
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case 
            if (/[AZ]/.test(sourceArr[i])) { 
                targetArr[i] = targetArr[i].toUpperCase(); 
            } 
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case 
            else targetArr[i] = targetArr[i].toLowerCase(); 
        } 
        // join modified targetArr to string and return 
        return (targetArr.join("")); 
    } 
 
    // replace "before" with "after" with "before"-casing 
    return str.replace(before, applyCasing(before, after)); 
 } 
 
 // test here 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmq/0)

### Explicación del código:

*   Tanto el **antes** como el **después** se pasan como argumentos para `applyCasing()` .
*   La función `applyCasing()` se usa para cambiar el caso de los caracteres respectivos en **targetArr** , es decir, **después** , de acuerdo con el de los caracteres en **sourceArr** , es decir, **antes** .
*   `replace()` se utiliza para reemplazar **antes** con **después** , cuya carcasa es la misma que **antes** .

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución alternativa de código avanzado:
```
// Add new method to the String object, not overriding it if one exists already 
 String.prototype.capitalize =  String.prototype.capitalize || 
    function() { 
        return this[0].toUpperCase() + this.slice(1); 
    }; 
 
 const Util = (function () { 
 // Create utility module to hold helper functions 
    function textCase(str, tCase) { 
        // Depending if the tCase argument is passed we either set the case of the 
        // given string or we get it. 
        // Those functions can be expanded for other text cases. 
 
        if(tCase) { 
            return setCase(str, tCase); 
        } else { 
            return getCase(str); 
        } 
 
        function setCase(str, tCase) { 
            switch(tCase) { 
                case "uppercase": return str.toUpperCase(); 
                case "lowercase": return str.toLowerCase(); 
                case "capitalized": return str.capitalize(); 
                default: return str; 
            } 
        } 
 
        function getCase(str) { 
            if (str === str.toUpperCase()) { return "uppercase"; } 
            if (str === str.toLowerCase()) { return "lowercase"; } 
            if (str === str.capitalize()) { return "capitalized"; } 
            return "normal"; 
        } 
    } 
 
    return { 
        textCase 
    }; 
 })(); 
 
 function myReplace(str, before, after) { 
    const { textCase } = Util; 
    const regex = new RegExp(before, 'gi'); 
    const replacingStr = textCase(after, textCase(before)); 
 
    return str.replace(regex, replacingStr); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/@kr3at0/SearchAndReplace)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución alternativa de código avanzado 2:

```javascript
function myReplace(str, before, after) { 
  const myArr = str.split(' '); 
  const [wordToReplace] = myArr.filter(item => item === before); 
  return  wordToReplace[0].toUpperCase() !== wordToReplace[0] 
  ? myArr.map(item => item === before ? after : item).join(' ') 
  : myArr.map(item => item === before? after[0].toUpperCase() + after.slice(1) : item).join(' '); 
 } 
 
 // test: 
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"); 
```

#### Enlaces relevantes

*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS Math Min](http://forum.freecodecamp.com/t/javascript-math-min/14684)
*   Longitud de la cuerda
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.