---
title: Global Variables
localeTitle: Variables globales
---
Las variables globales se declaran fuera de una función para accesibilidad en todo el programa, mientras que las variables locales se almacenan dentro de una función usando `var` para uso solo dentro del [alcance de](https://developer.mozilla.org/en-US/docs/Glossary/Scope) esa función. Si declara una variable sin usar `var` , incluso si está dentro de una función, aún se verá como global:

```javascript
var x = 5; //global 
 function someThing(y) { 
 var z = x + y; 
 console.log(z); 
 } 
 
 function someThing(y) { 
 x = 5; //still global! 
 var z = x + y; 
 console.log(z); 
 } 
 
 
 function someThing(y) { 
 var x = 5; //local 
 var z = x + y; 
 console.log(z); 
 } 
```

Una variable global también es un objeto del alcance actual, como la ventana del navegador:

```javascript
var dog = “Fluffy”; 
 console.log(dog); //Fluffy; 
 
 var dog = “Fluffy”; 
 console.log(window.dog); //Fluffy 
```

Es una buena práctica minimizar variables globales. Dado que se puede acceder a la variable en cualquier parte del programa, pueden causar un comportamiento extraño.

Referencias:

*   [var -Javascript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
*   [No sabes JavaScript: alcances y cierres](https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures)

Información adicional:

*   [Mejores Prácticas de JavaScript: Evitar Globales](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)

## \* [¿Cuál es la diferencia entre una var global y una ventana.variable en javascript?](https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript)

El alcance de las variables de JavaScript es global o local. Las variables globales se declaran FUERA de la función y su valor es accesible / modificable en todo el programa.

SIEMPRE debe usar **var** para declarar sus variables (para hacerlas localmente) de lo contrario, se instalará GLOBALLY

Tenga cuidado con las variables globales porque son arriesgadas. La mayoría de las veces debes usar cierres para declarar tus variables. Ejemplo:

```javascript
    (function(){ 
      var myVar = true; 
    })(); 
```

#### Más información:

*   [Mejores Prácticas de JavaScript: Evitar Globales](http://www.w3.org/wiki/JavaScript_best_practices#Avoid_globals)
*   [Las variables globales son malas](http://c2.com/cgi/wiki?GlobalVariablesAreBad)
*   [MDN - Variables globales](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)