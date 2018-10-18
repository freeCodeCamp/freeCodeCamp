---
title: Comparison with the Inequality Operator
localeTitle: Comparação com o operador Inequality
---
## Comparação com o operador Inequality

*   `!=` (Inequality) é um operador lógico que retorna caso verdadeiro, o valor à esquerda é diferente daquele à direita.
*   O operador de desigualdade considera `7` e `"7"` o mesmo porque não compara o tipo da variável.

## Solução Básica

```javascript
function testNotEqual(val) { 
  if (val != 99) 
    return "Not Equal"; 
 
  return "Equal"; 
 } 

```