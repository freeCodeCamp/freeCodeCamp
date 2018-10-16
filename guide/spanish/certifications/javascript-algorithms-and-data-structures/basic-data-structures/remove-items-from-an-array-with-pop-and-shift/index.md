---
title: Remove Items from an Array with pop() and shift()
localeTitle: Eliminar elementos de una matriz con pop () y shift ()
---
## Eliminar elementos de una matriz con pop () y shift ()

*   El `.pop()` método y `.shift()` método debe ser llamado y inicializado usando los `popped` y `shifted` variables para devolver la respuesta correcta de la función.

## Solución:

```javascript
function popShift(arr) { 
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped]; 
 } 
 
 // do not change code below this line 
 console.log(popShift(['challenge', 'is', 'not', 'complete'])); 

```