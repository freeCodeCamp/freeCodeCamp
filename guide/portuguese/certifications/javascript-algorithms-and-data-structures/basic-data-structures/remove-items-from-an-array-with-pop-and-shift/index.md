---
title: Remove Items from an Array with pop() and shift()
localeTitle: Remover itens de uma matriz com pop () e shift ()
---
## Remover itens de uma matriz com pop () e shift ()

*   O método `.pop()` e o método `.shift()` devem ser chamados e inicializados usando as variáveis `popped` e `shifted` para retornar a resposta correta da função.

## Solução:

```javascript
function popShift(arr) { 
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped]; 
 } 
 
 // do not change code below this line 
 console.log(popShift(['challenge', 'is', 'not', 'complete'])); 

```