---
title: Use the Conditional (Ternary) Operator
localeTitle: Use o operador condicional (ternário)
---
## Use o operador condicional (ternário)

### Sugestão 1

Use o operador ternário para verificar a igualdade.

### Solução de aviso à frente !!!

```javascript
function checkEqual(a, b) { 
  return (a = b ? true : false ); 
 } 
 
 checkEqual(1, 2); 

```