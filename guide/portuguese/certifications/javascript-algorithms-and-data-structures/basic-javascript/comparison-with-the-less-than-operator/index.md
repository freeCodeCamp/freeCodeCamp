---
title: Comparison with the Less Than Operator
localeTitle: Comparação com o menor que o operador
---
## Comparação com o menor que o operador

**`<`** (Less Than) é um operador lógico que retorna caso verdadeiro, o valor à esquerda é menor que o da direita.

## Solução Básica

```javascript
function testLessThan(val) { 
  if (val < 25) 
    return "Under 25"; 
 
  if (val < 55) 
    return "Under 55"; 
 
  return "55 or Over"; 
 } 

```