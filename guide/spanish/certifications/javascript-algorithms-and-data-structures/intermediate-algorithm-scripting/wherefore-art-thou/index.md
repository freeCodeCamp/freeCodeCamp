---
title: Wherefore Art Thou
localeTitle: Donde estás
---
![:triangular_flag_on_post:](https://forum.freecodecamp.com/images/emoji/emoji_one/triangular_flag_on_post.png?v=3 ": triangular_flag_on_post:") Recuerda usar **`Read-Search-Ask`** si te atascas. Tratar de emparejar el programa ![:busts_in_silhouette:](https://forum.freecodecamp.com/images/emoji/emoji_one/busts_in_silhouette.png?v=3 ": busts_in_silhouette:") y escribe tu propio código ![:pencil:](https://forum.freecodecamp.com/images/emoji/emoji_one/pencil.png?v=3 ":lápiz:")

### ![:checkered_flag:](https://forum.freecodecamp.com/images/emoji/emoji_one/checkered_flag.png?v=3 ":bandera a cuadros:") Explicación del problema:

Escriba un algoritmo que tome una `array` para el primer argumento y devuelva una `array` con todos los `object` que coincidan con todas las propiedades y valores en el `Object` pasado como segundo parámetro.

#### Enlaces relevantes

*   [Para loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
*   [Array.prototype.filter ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) [Object.keys ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 1

Puede utilizar `for` bucle o el método `Array.prototype.filter` .

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 2

Intente usar el método `Object.prototype.hasOwnProperty` para saber si el nombre de la propiedad existe en un objeto (como su propia propiedad).

> _intenta resolver el problema ahora_

## ![:speech_balloon:](https://forum.freecodecamp.com/images/emoji/emoji_one/speech_balloon.png?v=3 ": speech_balloon:") Sugerencia: 3

Verifique la equivalencia del `Object` en la `collection` con el `Object` pasado como segundo parámetro a la función `whatIsInAName` .

> _intenta resolver el problema ahora_

## ¡Alerta de spoiler!

![señal de advertencia](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2d6c412a50797771301e7ceabd554cef4edcd74d.gif)

**¡Solución por delante!**

## ![:beginner:](https://forum.freecodecamp.com/images/emoji/emoji_one/beginner.png?v=3 ":principiante:") Solución de código básico:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    for(var i = 0; i < srcKeys.length; i++) { 
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) { 
        return false; 
      } 
    } 
    return true; 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmh/0)

### Explicación del código:

*   Nos filtramos a través de la matriz utilizando `.filter()` .
*   Usando un `for loop` , recorramos cada elemento del objeto.
*   Usamos una `if statement` para verificar si el objeto en la colección no tiene la clave y el valor de la propiedad no coincide con el valor en la fuente.
*   Devolvemos `false` si la `if statement` anterior es correcta. De lo contrario, volvemos `true` ;

#### Enlaces relevantes

*   Para loops
*   Array.prototype.filter ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:sunflower:](https://forum.freecodecamp.com/images/emoji/emoji_one/sunflower.png?v=3 ":girasol:") Solución de código intermedio:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  return collection.filter(function (obj) { 
    return srcKeys.every(function (key) { 
      return obj.hasOwnProperty(key) && obj[key] === source[key]; 
    }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmi/0)

### Explicación del código:

*   Nos filtramos a través de la colección usando `.filter()` .
*   A continuación, devolvemos un valor `Boolean` para el método `.filter()` .
*   Finalmente, reducimos `Boolean` valor `Boolean` que se devolverá para el método `.every()` .

#### Enlaces relevantes

*   Array.prototype.filter ()
*   Array.prototype.every ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:rotating_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/rotating_light.png?v=3 ": rotando luz:") Solución avanzada de código:
```
function whatIsInAName(collection, source) { 
  // "What's in a name? that which we call a rose 
  // By any other name would smell as sweet.” 
  // -- by William Shakespeare, Romeo and Juliet 
  var srcKeys = Object.keys(source); 
 
  // filter the collection 
  return collection.filter(function (obj) { 
    return srcKeys 
      .map(function(key) { 
        return obj.hasOwnProperty(key) && obj[key] === source[key]; 
      }) 
      .reduce(function(a, b) { 
        return a && b; 
      }); 
  }); 
 } 
 
 // test here 
 whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":cohete:") [Ejecutar código](https://repl.it/CLmj/0)

### Explicación del código:

*   Comenzamos por el filtrado a través de la `collection` utilizando `Array.filter()` .
*   A continuación, asignamos todas las claves y devolvemos valores booleanos según las condiciones de verificación: tanto la clave como su valor correspondiente deben existir dentro del objeto que estamos filtrando.
*   Luego, reducimos los valores booleanos asignados a un solo booleano que indica si todas las srcKeys pasan las condiciones marcadas anteriormente.
*   Este único booleano se utilizará para filtrar a través de la colección.

#### Enlaces relevantes

*   Array.prototype.filter ()
*   Array.prototype.reduce ()
*   [Object.hasOwnProperty ()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

## ![:clipboard:](https://forum.freecodecamp.com/images/emoji/emoji_one/clipboard.png?v=3 ":portapapeles:") NOTAS PARA LAS CONTRIBUCIONES:

*   ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **NO** agregue soluciones que sean similares a las soluciones existentes. Si cree que es **_similar pero mejor_** , intente fusionar (o reemplazar) la solución similar existente.
*   Agregue una explicación de su solución.
*   Categorice la solución en una de las siguientes categorías: **Básica** , **Intermedia** y **Avanzada** . ![:traffic_light:](https://forum.freecodecamp.com/images/emoji/emoji_one/traffic_light.png?v=3 ":semáforo:")
*   Agregue su nombre de usuario solo si ha agregado algún **contenido principal relevante** . ( ![:warning:](https://forum.freecodecamp.com/images/emoji/emoji_one/warning.png?v=3 ":advertencia:") **_NO_** _elimine ningún nombre de usuario existente_ )

> Ver ![:point_right:](https://forum.freecodecamp.com/images/emoji/emoji_one/point_right.png?v=3 ": point_right:") [**`Wiki Challenge Solution Template`**](http://forum.freecodecamp.com/t/algorithm-article-template/14272) para referencia.