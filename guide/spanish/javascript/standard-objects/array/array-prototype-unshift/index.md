---
title: Array.prototype.unshift
localeTitle: Array.prototype.unshift
---
El método de matriz de JavaScript `.unshift()` agrega uno o más elementos al principio de una matriz y devuelve la nueva longitud de la matriz.

**Sintaxis**
```
arr.unshift([element1[, ...[, elementN]]]) 
```

## Parámetros

Los elementos para agregar al frente de la matriz.

## Devoluciones

La nueva `length` de la matriz sobre la que se llamó el método.

## Ejemplos
```
var array = [1, 2, 3, 4, 5]; 
 
 array.unshift(0); 
 // If we console.log(array.shift()); the console would output 6. 
 // array is now [0, 1, 2, 3, 4, 5]; 
 
 array.unshift([-1]); 
 // array is now [[-1], 0, 1, 2, 3, 4, 5]; 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/C2V3)

Fuente [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)