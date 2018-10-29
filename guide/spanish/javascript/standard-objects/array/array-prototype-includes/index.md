---
title: Array.prototype.includes
localeTitle: Array.prototype.includes
---
## Array.prototype.includes

El método `includes()` determina si una matriz incluye un valor. Devuelve verdadero o falso.

Se necesitan dos argumentos:

1.  `searchValue` - El elemento a buscar en la matriz.
2.  `fromIndex` : la posición en la matriz para comenzar a buscar el valor de búsqueda `searchValue` . Si se proporciona un valor negativo, comienza desde la longitud de la matriz menos el valor negativo.

### Ejemplo

```js
const a = [1, 2, 3]; 
 a.includes(2); // true 
 a.includes(4); // false 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)