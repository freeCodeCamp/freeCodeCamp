---
title: JavaScript for Loops Explained
localeTitle: JavaScript para los bucles explicados
---
La sentencia for crea un bucle que consta de tres expresiones opcionales, entre paréntesis y separadas por punto y coma, seguidas de una sentencia o un conjunto de sentencias ejecutadas en el bucle.

El bucle for tiene la siguiente sintaxis:
```
for (<a href='http://forum.freecodecamp.com/t/javascript-while-loop/14668' target='_blank' rel='nofollow'>initialization]; [condition]; [final-expression]) { 
    code block to be executed 
 } 
```

\[inicialización\] se ejecuta antes de que comience el bucle (el bloque de código).

\[condición\] define la condición para ejecutar el bucle (el bloque de código).

\[final-expresión\] se ejecuta cada vez que se ejecuta el bucle (el bloque de código).

## Ejemplo en JavaScript:
```
var ourArray = []; 
 for (var i = 0; i < 5; i++) { 
    ourArray.push(i); 
 } 
```

Del ejemplo anterior, puedes leer:

\[inicialización\] establece una variable antes de que comience el ciclo (var i = 0).

\[condición\] define la condición para que se ejecute el bucle (i debe ser menor que 5).

\[expresión final\] aumenta un valor (i ++) cada vez que se ejecuta el bloque de código en el bucle.

## ¿Por qué necesitamos "para bucles"?

Para los bucles se utilizan para recorrer un bloque de código un número conocido de veces. A veces es la computadora la que sabe cuántas veces, no tú, pero aún se sabe.

Echa un vistazo a algunos de nuestros otros artículos en bucles:

*   \[Mientras bucle
*   [Para In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)