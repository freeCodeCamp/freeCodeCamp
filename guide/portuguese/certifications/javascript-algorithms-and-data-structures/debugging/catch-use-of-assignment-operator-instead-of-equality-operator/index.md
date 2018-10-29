---
title: Catch Use of Assignment Operator Instead of Equality Operator
localeTitle: Pegar o uso do operador de atribuição em vez do operador de igualdade
---
## Pegar o uso do operador de atribuição em vez do operador de igualdade

*   Somente a declaração if deve ser editada neste desafio.
*   O operador `=` por si só é usado para atribuir valores e não para compará-los.

## Solução

```javascript
let x = 7; 
 let y = 9; 
 let result = "to come"; 
 
 if(x == y) { 
  result = "Equal!"; 
 } else { 
  result = "Not equal!"; 
 } 
 
 console.log(result); 

```