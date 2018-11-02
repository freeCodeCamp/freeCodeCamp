---
title: Comparison with the Greater Than Or Equal To Operator
localeTitle: Comparación con el operador mayor o igual que el operador
---
## Comparación con el operador mayor o igual que el operador

*   `>=` (Mayor que o Igual a) es un operador lógico que devuelve el caso verdadero, el valor de la izquierda es el **mismo o superior** al de la derecha.

## Solucion basica

```javascript
function testGreaterOrEqual(val) { 
  if (val >= 20) 
    return "20 or Over"; 
 
  if (val >= 10) 
    return "10 or Over"; 
 
  return "Less than 10"; 
 } 

```