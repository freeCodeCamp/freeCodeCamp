---
title: Array.prototype.shift
localeTitle: Array.prototype.shift
---
El método de matriz de JavaScript `.shift()` eliminará el primer elemento de una matriz y devolverá ese valor. Esto también cambiará la longitud de la matriz

**Sintaxis**

```javascript
  var array = [1, 2, 3, 4]; 
  array.shift(); 
```

## Descripción

`.shift()` eliminará el elemento en el índice 0 de la matriz sobre la que se llama. A continuación, devuelve el valor eliminado y cambia todos los elementos restantes hacia abajo en 1 valor de índice.

`.shift()` devolverá `undefined` si la matriz a la que se llama no contiene elementos.

## Ejemplos

**Desplazando el primer valor de una matriz**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.shift(); 
  // If we console.log(array.shift()); the console would output 1. 
 
  console.log(array); 
  /* Console will output 2, 3, 4, 5 and 
  the variable array now contains the set [2, 3, 4, 5] where 
  each element has been moved down 1 index value. */ 
```

Fuente: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)