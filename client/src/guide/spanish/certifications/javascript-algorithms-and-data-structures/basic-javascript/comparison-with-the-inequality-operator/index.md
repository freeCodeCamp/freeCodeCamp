---
title: Comparison with the Inequality Operator
localeTitle: Comparación con el operador de desigualdad
---
## Comparación con el operador de desigualdad

*   `!=` (Desigualdad) es un operador lógico que devuelve el caso verdadero, el valor de la izquierda es diferente del de la derecha.
*   El operador de desigualdad considera que `7` y `"7"` son iguales porque no compara el tipo de variable.

## Solucion basica

```javascript
function testNotEqual(val) { 
  if (val != 99) 
    return "Not Equal"; 
 
  return "Equal"; 
 } 

```