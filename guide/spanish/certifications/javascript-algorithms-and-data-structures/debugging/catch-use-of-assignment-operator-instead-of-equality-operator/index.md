---
title: Catch Use of Assignment Operator Instead of Equality Operator
localeTitle: Captura el uso del operador de asignación en lugar del operador de igualdad
---
## Captura el uso del operador de asignación en lugar del operador de igualdad

*   Solo la sentencia if debe ser editada en este desafío.
*   El operador `=` solo se usa para asignar valores, no para compararlos.

## Solución

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