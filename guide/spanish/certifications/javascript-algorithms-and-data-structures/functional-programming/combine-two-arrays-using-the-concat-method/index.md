---
title: Combine Two Arrays Using the concat Method
localeTitle: Combina dos matrices usando el método concat
---
## Combina dos matrices usando el método concat

*   El método concat se utiliza para unir dos o más matrices o cadenas.
*   Este método no muta las matrices existentes, pero devuelve una nueva matriz.

## Solución

```javascript
function nonMutatingConcat(original, attach) { 
  // Add your code below this line 
 
  return original.concat(attach); 
 
  // Add your code above this line 
 } 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingConcat(first, second); 

```