---
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
localeTitle: Use o método Some para verificar se todos os elementos em uma matriz atendem a um critério
---
## Use o método Some para verificar se todos os elementos em uma matriz atendem a um critério

### Explicação do Problema

Use o método some dentro da função checkPositive para verificar se algum elemento em arr é positivo. A função `checkPositive` deve retornar um valor booleano.

#### Links Relevantes:

*   [Array.prototype.some ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Solução:

```javascript
function checkPositive(arr) { 
  return arr.some((elem) => elem > 0); 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```