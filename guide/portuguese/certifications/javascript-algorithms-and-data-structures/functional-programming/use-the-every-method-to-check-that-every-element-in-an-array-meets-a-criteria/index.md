---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
localeTitle: Use o método Every para verificar se todos os elementos em uma matriz atendem a um critério
---
## Use o método Every para verificar se todos os elementos em uma matriz atendem a um critério

### Explicação do Problema:

Use o método `every` dentro da função `checkPositive` para verificar se todos os elementos em `arr` são positivos. A função deve retornar um valor booleano.

#### Links Relevantes:

*   [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### Sugestão

Não esqueça de `return` .

## Solução

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
 
  return arr.every(val => val > 0); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
```

## Solução alternativa

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
    return arr.every(function(value) { 
        return value > 0; 
    }); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```