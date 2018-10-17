---
title: Array.prototype.splice
localeTitle: Array.prototype.splice
---
## Array.prototype.splice

El método de empalme es similar a [Array.prototype.slice](https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice) , pero a diferencia de `slice()` muta la matriz a la que se llama. También difiere en que se puede usar para agregar valores a una matriz, así como para eliminarlos.

### Parámetros

`splice()` puede tomar uno o más

#### empalme (inicio)

Si solo se incluye un parámetro, entonces `splice(start)` eliminará todos los elementos de la matriz desde el `start` hasta el final de la matriz.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(2); 
 // exampleArray is now ['first', 'second']; 
```

Si el `start` es negativo, contará hacia atrás desde el final de la matriz.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(-1); 
 // exampleArray is now ['first', 'second', 'third']; 
```

#### empalme (inicio, deleteCount)

Si se incluye un segundo parámetro, entonces `splice(start, deleteCount)` eliminará los elementos `deleteCount` de la matriz, comenzando con el `start` .

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth']; 
```

#### empalme (inicio, deleteCount, newElement1, newElement2,….)

Si se incluyen más de dos parámetros, los parámetros adicionales serán elementos nuevos que se agregarán a la matriz. La ubicación de estos elementos agregados comenzará al `start` .

Los elementos se pueden agregar sin eliminar ningún elemento pasando `0` como segundo parámetro.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 0, 'new 1', 'new 2'); 
 // exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth'] 
```

Los elementos también pueden ser reemplazados.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 exampleArray.splice(1, 2, 'new second', 'new third'); 
 // exampleArray is now ['first', 'new second', 'new third', 'fourth'] 
```

### Valor de retorno

Además de cambiar la matriz en la que se llama, `splice()` también devuelve una matriz que contiene los valores eliminados. Esta es una forma de cortar una matriz en dos matrices diferentes.

```js
let exampleArray = ['first', 'second', 'third', 'fourth']; 
 let newArray = exampleArray.splice(1, 2); 
 // exampleArray is now ['first', 'fourth'] 
 // newArray is ['second', 'third'] 
```

#### Más información:

[MDN - Array.prototype.slice ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)