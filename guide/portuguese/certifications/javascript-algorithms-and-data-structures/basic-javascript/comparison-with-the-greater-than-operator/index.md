---
title: Comparison with the Greater Than Operator
localeTitle: Comparação com o operador Maior que
---
## Comparação com o operador Maior que

`>` (Maior que) é um operador lógico que retorna caso verdadeiro o valor à esquerda é maior que o da direita.

## Solução Básica

```javascript
function testGreaterThan(val) { 
  if (val > 100) 
    return "Over 100"; 
 
  if (val > 10) 
    return "Over 10"; 
 
  return "10 or Under"; 
 } 

```