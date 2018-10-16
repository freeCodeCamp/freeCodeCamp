---
title: Return a Sorted Array Without Changing the Original Array
localeTitle: Retornar uma matriz classificada sem alterar a matriz original
---
## Retornar uma matriz classificada sem alterar a matriz original

### Método

Em primeiro lugar concatene a matriz tomada como um parâmetro para uma nova matriz vazia. Em seguida, use o método `sort()` como visto no último desafio e crie uma função para classificar a nova matriz em ordem crescente.

### Solução

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