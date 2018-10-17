---
title: Combine Arrays with the Spread Operator
localeTitle: Combina matrices con el operador de propagación
---
## Combina matrices con el operador de propagación

*   La solución es exactamente igual al ejemplo dado. Simplemente inserte la matriz del `fragment[]` en la matriz de la `sentence[]` en el índice deseado.

## Solución:

```javascript
function spreadOut() { 
  let fragment = ['to', 'code']; 
  let sentence = ["learning", ...fragment, "is", "fun"]; // change this line 
  return sentence; 
 } 
 
 // do not change code below this line 
 console.log(spreadOut()); 

```