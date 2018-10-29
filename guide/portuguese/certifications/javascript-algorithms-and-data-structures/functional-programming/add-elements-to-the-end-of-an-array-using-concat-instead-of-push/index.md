---
title: Add Elements to the End of an Array Using concat Instead of push
localeTitle: Adicionar elementos ao final de um array usando concat Em vez de push
---
## Adicionar elementos ao final de um array usando concat Em vez de push

Onde o método `push` adiciona um novo elemento ao final do array original, o método `concat` cria um novo array contendo os elementos do array original e o novo elemento. O array original permanece o mesmo ao usar `concat` .

#### Links Relevantes:

*   [Array.prototype.concat ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## Solução

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