---
title: Combine Two Arrays Using the concat Method
localeTitle: Combine duas matrizes usando o método concat
---
## Combine duas matrizes usando o método concat

*   O método concat é usado para unir dois ou mais arrays ou strings.
*   Este método não altera os arrays existentes, mas retorna um novo array.

## Solução

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