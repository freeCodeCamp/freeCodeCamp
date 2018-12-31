---
title: Title Case a Sentence
localeTitle: Título Caso una oración
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Tenemos que devolver una frase con el título del caso. Esto significa que la primera letra siempre estará en mayúsculas y el resto en minúsculas.

#### Enlaces relevantes

*   [Objeto de cadena global](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
*   [JS String Prototype ToLowerCase](http://forum.freecodecamp.com/t/javascript-string-prototype-tolowercase/15948)
*   [JS String Prototype ToUpperCase](http://forum.freecodecamp.com/t/javascript-string-prototype-touppercase/15950)
*   [JS String Prototype Replace](http://forum.freecodecamp.com/t/javascript-string-prototype-replace/15942)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

*   Debes comenzar dividiendo la cadena en una matriz de palabras.
*   Dividir la frase.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

*   Debe hacer que la palabra sea minúscula antes de hacer la primera letra en mayúscula.
*   Use el método de reemplazo en cada palabra para poner en mayúscula la primera letra de cada palabra.

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

*   Necesitará crear una nueva cadena con partes de la anterior y al final fusionar todo en una sola cadena de nuevo.
*   En el método de reemplazo, indique el primer argumento como la posición de la primera letra utilizando charAt. Para el segundo argumento, escriba una función para devolver la letra mayúscula como reemplazo.

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
String.prototype.replaceAt = function(index, character) { 
    return this.substr(0, index) + character + this.substr(index+character.length); 
 }; 
 
 function titleCase(str) { 
    var newTitle = str.split(' '); 
    var updatedTitle = []; 
    for (var st in newTitle) { 
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase()); 
    } 
    return updatedTitle.join(' '); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/8)

### Explicación del código:

Estamos modificando la función `replaceAt` utilizando un prototipo para facilitar el uso del programa.

Divida la cadena por espacios en blanco y cree una variable para rastrear el título actualizado. Luego usamos un bucle para convertir el primer carácter de la palabra en mayúsculas y el resto en minúsculas. al crear una cadena concatenada compuesta de la palabra completa en minúsculas con el primer carácter reemplazado por su mayúscula.

#### Enlaces relevantes

*   [JS For Loops Explicado](http://forum.freecodecamp.com/t/javascript-for-loop/14666s-Explained)
*   [JS String Prototype Split](http://forum.freecodecamp.com/t/javascript-string-prototype-split/15944)
*   [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)
*   [JS Array Prototype Join](http://forum.freecodecamp.com/t/javascript-array-prototype-join/14292)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function titleCase(str) { 
  var convertToArray = str.toLowerCase().split(" "); 
  var result = convertToArray.map(function(val){ 
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase()); 
  }); 
  return result.join(" "); 
 } 
 
 titleCase("I'm a little tea pot"); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/9)

### Explicación del código:

Estamos haciendo una cadena entera en minúsculas y luego la convertimos en una matriz. Luego estamos usando la función de mapa para reemplazar el carácter en minúscula con mayúscula. Finalmente, estamos devolviendo la cadena usando el método de `join` .

#### Enlaces relevantes

*   [Mapa de prototipos JS Array](http://forum.freecodecamp.com/t/javascript-array-prototype-map/14294)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function titleCase(str) { 
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase()); 
 } 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLjU/14)

### Explicación del código:

La solución funciona primero escribiendo en minúsculas todos los caracteres de la cadena y, a continuación, solo subiendo en mayúsculas el primer carácter de cada palabra.

*   Minúsculas en toda la cadena usando `str.toLowerCase()` .
    
*   Reemplace el primer carácter de cada palabra en mayúsculas usando `.replace` .
    
*   Busque el carácter al principio de cada palabra, es decir, que coincida con cualquier carácter que siga un `space` o que coincida con el primer carácter de toda la cadena, utilizando el siguiente patrón.
    
*   Explicación de Regex:
    
*   Buscar todos los caracteres que no sean espacios en blanco `(\S` )
    
*   Al comienzo de la cuerda `(^)`
    
*   O después de cualquier carácter de espacio en blanco `(\s)`
    
    *   El modificador `g` busca otro patrón de palabra similar en toda la cadena y los reemplaza.
        
    *   Esta solución funciona con símbolos nacionales y letras acentuadas, como se ilustra en los siguientes ejemplos.  
        `international characters:` 'бабушка курит трубку' // -> 'Бабушка Курит Трубку'  
        `accented characters:` 'località àtilacol' // -> 'Località Àtilacol'
        

#### Enlaces relevantes

*   [Recursos JS Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.