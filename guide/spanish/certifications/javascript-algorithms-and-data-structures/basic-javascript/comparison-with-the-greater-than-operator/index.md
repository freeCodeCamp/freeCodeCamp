---
title: Comparison with the Greater Than Operator
localeTitle: Comparación con el operador mayor que
---
## Comparación con el operador mayor que

`>` (Greater Than) es un operador lógico que devuelve el caso verdadero, el valor de la izquierda es más alto que el de la derecha.

## Solucion basica

```javascript
function testGreaterThan(val) { 
  if (val > 100) 
    return "Over 100"; 
 
  if (val > 10) 
    return "Over 10"; 
 
  return "10 or Under"; 
 } 

```