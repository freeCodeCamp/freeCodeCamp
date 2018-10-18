---
title: Comparison with the Less Than Operator
localeTitle: Comparación con el operador menor que
---
## Comparación con el operador menor que

**`<`** (Menos que) es un operador lógico que devuelve el caso verdadero, el valor de la izquierda es más bajo que el de la derecha.

## Solucion basica

```javascript
function testLessThan(val) { 
  if (val < 25) 
    return "Under 25"; 
 
  if (val < 55) 
    return "Under 55"; 
 
  return "55 or Over"; 
 } 

```