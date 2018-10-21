---
title: Do...While Loop
localeTitle: Do ... While Loop
---
El `do...while` bucle está estrechamente relacionado con [`while`](http://forum.freecodecamp.com/t/javascript-while-loop/14668) bucle. En el bucle do while, la condición se verifica al final del bucle.

Aquí está la **sintaxis** de `do...while` loop:

## Sintaxis:
```
 do { 
 
   *Statement(s);* 
 
 } while (*condition*); 
```

**instrucción (es):** una instrucción que se ejecuta **al menos una vez** antes de que se evalúe la condición o expresión booleana y se vuelva a ejecutar cada vez que la condición se evalúe como verdadera.

**condición:** aquí, una condición es una expresión booleana . Si la expresión booleana se evalúa como verdadera, la instrucción se ejecuta de nuevo. Cuando la expresión booleana se evalúa como falsa, los bucles terminan.

## Ejemplo:
```
var i = 0; 
 do { 
  i = i + 1; 
  console.log(i); 
 } while (i < 5); 
 
 Output: 
 1 
 2 
 3 
 4 
 5 
```

fuente: [**hacer ... mientras**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do…while)