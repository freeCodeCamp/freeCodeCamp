---
title: Array.prototype.pop
localeTitle: Array.prototype.pop
---
# Array.prototype.pop

El método `pop()` elimina el último elemento y cambia la longitud de una matriz.

**Sintaxis**

```js
    arr.pop() 
```

**Valor de retorno**

*   El elemento eliminado de la matriz; indefinido si la matriz está vacía.

## Descripción

El método `pop()` elimina el último elemento de una matriz y devuelve ese valor a la persona que llama.

Si llama a `pop()` en una matriz vacía, devuelve undefined.

## Ejemplos

```js
let array = [1, 2, 3, 4]; 
 array.pop(); // removes 4 
 console.log(array); // [1, 2, 3] 
 
 [].pop() // undefined 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)