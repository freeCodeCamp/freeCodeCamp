---
title: Comparison with the Less Than Or Equal To Operator
localeTitle: Comparação com o menor ou igual ao operador
---
## Comparação com o menor ou igual ao operador

**`<=`** (Menor que ou igual a) é um operador lógico que retorna caso verdadeiro o valor à esquerda é o **mesmo ou menor** que o da direita.

## Solução Básica

```javascript
function testLessOrEqual(val) { 
  if (val <= 12) 
    return "Smaller Than or Equal to 12"; 
 
  if (val <= 24) 
    return "Smaller Than or Equal to 24"; 
 
  return "More Than 24"; 
 } 

```