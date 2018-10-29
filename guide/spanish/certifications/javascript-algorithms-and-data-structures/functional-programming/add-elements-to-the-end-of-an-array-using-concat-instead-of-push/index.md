---
title: Add Elements to the End of an Array Using concat Instead of push
localeTitle: Agregue elementos al final de una matriz usando concat en lugar de empujar
---
## Agregue elementos al final de una matriz usando concat en lugar de empujar

Cuando el método de `push` agrega un nuevo elemento al final de la matriz original, el método `concat` crea una nueva matriz que contiene los elementos de la matriz original y el nuevo elemento. La matriz original sigue siendo la misma cuando se usa `concat` .

#### Enlaces relevantes:

*   [Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## Solución

```javascript
function nonMutatingPush(original, newItem) { 
 
  // Add your code below this line 
 
  return original.concat(newItem); 
 
  // Add your code above this line 
 } 
 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingPush(first, second); 

```