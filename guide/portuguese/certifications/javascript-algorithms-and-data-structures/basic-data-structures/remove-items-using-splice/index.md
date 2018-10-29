---
title: Remove Items Using splice()
localeTitle: Remover itens usando splice ()
---
## Remover itens usando splice ()

*   A função `splice()` deve ser chamada na matriz `arr` para remover 1 ou mais elementos do centro da matriz.
*   A matriz `arr` atualmente acrescenta-se ao valor de 16. Basta remover tantas variáveis neccessary para retornar 10.

## Solução:

```javascript
function sumOfTen(arr) { 
  // change code below this line 
  arr.splice(1,2); 
  // change code above this line 
  return arr.reduce((a, b) => a + b); 
 } 
 
 // do not change code below this line 
 console.log(sumOfTen([2, 5, 1, 5, 2, 1])); 

```