---
title: Array.prototype.reverse
localeTitle: Array.prototype.reverse
---
El método de matriz de JavaScript `.reverse()` invertirá el orden de los elementos dentro de la matriz.

**Sintaxis**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  array.reverse(); 
```

## Descripción

`.reverse()` invierte el índice de los elementos de una matriz.

## Ejemplos

**Utilice `.reverse()` para invertir los elementos de una matriz**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.reverse(); 
 
  console.log(array); 
  /* Console will output 5, 4, 3, 2, 1 and 
  the variable array now contains the set [5, 4, 3, 2, 1] */ 
```

Fuente: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)