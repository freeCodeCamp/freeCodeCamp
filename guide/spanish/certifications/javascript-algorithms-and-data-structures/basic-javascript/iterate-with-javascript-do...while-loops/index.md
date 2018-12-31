---
title: Iterate with JavaScript Do...While Loops
localeTitle: Iterar con JavaScript Do ... While Loops
---
## Iterar con JavaScript Do ... While Loops

*   `Do...While` Loops se asegura de que el código se ejecute al menos una vez, y después de la ejecución, si la condición dentro de `while()` es **verdadera** , continúa con el bucle, de lo contrario, se detiene.

## Solución

```javascript
var myArray = []; 
 var i = 10; 
 
 do { 
  myArray.push(i); 
  i++; 
 } while(i <= 10); 

```