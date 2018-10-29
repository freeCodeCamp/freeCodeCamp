---
title: Comparison with the Greater Than Or Equal To Operator
localeTitle: Comparação com o maior que ou igual ao operador
---
## Comparação com o maior que ou igual ao operador

*   `>=` (Maior que ou Igual a) é um operador lógico que retorna caso verdadeiro o valor à esquerda é o **mesmo ou maior** que o da direita.

## Solução Básica

```javascript
function testGreaterOrEqual(val) { 
  if (val >= 20) 
    return "20 or Over"; 
 
  if (val >= 10) 
    return "10 or Over"; 
 
  return "Less than 10"; 
 } 

```