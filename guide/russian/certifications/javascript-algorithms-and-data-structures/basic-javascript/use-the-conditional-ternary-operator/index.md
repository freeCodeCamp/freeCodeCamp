---
title: Use the Conditional (Ternary) Operator
localeTitle: Использовать условный (тройной) оператор
---
## Использовать условный (тройной) оператор

### Подсказка 1

Используйте тройной оператор для проверки равенства.

### Предупреждение!

```javascript
function checkEqual(a, b) { 
  return (a = b ? true : false ); 
 } 
 
 checkEqual(1, 2); 

```