---
title: Array.prototype.indexOf
localeTitle: Array.prototype.indexOf
---
## Array.prototype.indexOf

El método `indexOf()` devuelve el primer índice en el que se puede encontrar un elemento determinado en la matriz. Si el elemento no está presente, devuelve -1.

**Sintaxis**

```javascript
  arr.indexOf(searchElement[, fromIndex]) 
```

## Parámetros

*   Elemento **searchElement** que buscas
    
*   **fromIndex** Opcional. El índice en el que desea iniciar la búsqueda. Si theIndex es mayor o igual que la longitud de la matriz, no se busca la matriz y el método devuelve -1. Si el fromIndex es un número negativo, se considera un desplazamiento desde el final de la matriz (la matriz todavía se busca hacia adelante desde allí). El valor predeterminado es 0, lo que significa que se busca en toda la matriz.
    

## Descripción

El método `indexOf` toma cada elemento de la matriz en orden de índice ascendente y lo `searchElement` con `searchElement` utilizando una igualdad estricta ( `===` ). Una vez que encuentra un elemento que devuelve `true` , devuelve su índice.

## Ejemplos

```javascript
var array = [1, 2, 4, 1, 7] 
 
 array.indexOf(1); // 0 
 array.indexOf(7); // 4 
 array.indexOf(6); // -1 
 array.indexOf('1'); // -1 
 array.indexOf('hello'); // -1 
 array.indexOf(1, 2); // 3 
 array.indexOf(1, -3); // 3 
```

### Más información:

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[Enlace MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript)