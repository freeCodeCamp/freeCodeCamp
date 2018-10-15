---
title: Array.prototype.slice
localeTitle: Array.prototype.slice
---
El método de matriz de JavaScript `.slice()` devolverá un nuevo objeto de matriz que será un segmento (una porción) de la matriz original. La matriz original no se modifica.

**Sintaxis**

```javascript
  array.slice() 
  arr.slice(startIndex) 
  arr.slice(startIndex, endIndex) 
```

## Parámetros

*   **startIndex** El índice de base cero donde debe comenzar la división. Si se omite el valor, comenzará en 0.
    
*   **endIndex** La **división** terminará **antes de** este índice de base cero. Se utiliza un índice negativo para compensar desde el final de la matriz. Si se omite el valor, el segmento se dividirá hasta el final de la matriz.
    

## Ejemplos

```javascript
  var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var everything = array.slice() 
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var kitchen = array.slice(2, 4) 
  // kitchen = ['cup', 'sandwich'] 
 
  var random = array.slice(4) 
  // random = ['bag', 'phone', 'cactus'] 
 
  var noPlants = array.slice(0, -1) 
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone'] 
 
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
```

#### Más información:

Fuente: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)