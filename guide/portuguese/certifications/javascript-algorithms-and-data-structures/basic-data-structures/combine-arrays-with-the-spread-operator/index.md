---
title: Combine Arrays with the Spread Operator
localeTitle: Combine Arrays com o Operador de Spread
---
## Combine Arrays com o Operador de Spread

*   A solução é exatamente igual ao exemplo dado. Simplesmente insira a matriz `fragment[]` na matriz `sentence[]` no índice desejado.

## Solução:

```javascript
function spreadOut() { 
  let fragment = ['to', 'code']; 
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line 
  return sentence; 
 } 
 
 // do not change code below this line 
 console.log(spreadOut()); 

```