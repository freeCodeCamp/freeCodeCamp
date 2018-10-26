---
title: Remove Items Using splice()
localeTitle: Quitar elementos utilizando empalme ()
---
## Quitar elementos utilizando empalme ()

*   Se debe llamar a la función `splice()` en la matriz `arr` para eliminar 1 o más elementos del centro de la matriz.
*   La matriz `arr` actualmente suma el valor de 16. Simplemente elimine todas las variables necesarias para obtener 10.

## Solución:

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