---
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
localeTitle: Use el método para verificar que cualquier elemento de una matriz cumpla con los criterios
---
## Use el método para verificar que cualquier elemento de una matriz cumpla con los criterios

### Explicación del problema

Use algún método dentro de la función checkPositive para verificar si algún elemento en arr es positivo. La función `checkPositive` debe devolver un valor booleano.

#### Enlaces relevantes:

*   [Array.prototype.some ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Solución:

```javascript
function checkPositive(arr) { 
  return arr.some((elem) => elem > 0); 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```