---
title: Use the Conditional (Ternary) Operator
localeTitle: Usar el Operador Condicional (Ternario)
---
## Usar el Operador Condicional (Ternario)

### Sugerencia 1

Utilice el operador ternario para comprobar la igualdad.

### Solución de advertencia por delante!

```javascript
function checkEqual(a, b) { 
  return (a = b ? true : false ); 
 } 
 
 checkEqual(1, 2); 

```