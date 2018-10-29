---
title: Return a Sorted Array Without Changing the Original Array
localeTitle: Devuelva una matriz ordenada sin cambiar la matriz original
---
## Devuelva una matriz ordenada sin cambiar la matriz original

### Método

En primer lugar, concatene la matriz tomada como parámetro a una nueva matriz vacía. Luego use el método `sort()` como se vio en el último desafío y cree una función para ordenar la nueva matriz en orden ascendente.

### Solución

```javascript
var globalArray = [5, 6, 3, 2, 9]; 
 function nonMutatingSort(arr) { 
  // Add your code below this line 
  return [].concat(arr).sort(function(a, b) { 
    return a - b; 
  }); 
  // Add your code above this line 
 } 
 nonMutatingSort(globalArray); 

```