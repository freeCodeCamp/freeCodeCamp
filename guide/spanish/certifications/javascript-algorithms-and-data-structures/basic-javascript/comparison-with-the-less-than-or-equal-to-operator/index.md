---
title: Comparison with the Less Than Or Equal To Operator
localeTitle: Comparación con el operador menor o igual que
---
## Comparación con el operador menor o igual que

**`<=`** (Menos que o igual a) es un operador lógico que devuelve el caso verdadero, el valor de la izquierda es el **mismo o inferior** al de la derecha.

## Solucion basica

```javascript
function testLessOrEqual(val) { 
  if (val <= 12) 
    return "Smaller Than or Equal to 12"; 
 
  if (val <= 24) 
    return "Smaller Than or Equal to 24"; 
 
  return "More Than 24"; 
 } 

```