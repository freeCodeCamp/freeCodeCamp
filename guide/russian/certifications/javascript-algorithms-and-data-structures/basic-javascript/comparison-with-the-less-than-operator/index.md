---
title: Comparison with the Less Than Operator
localeTitle: Сравнение с Менеджером оператора
---
## Сравнение с Менеджером оператора

**`<`** (Меньше) является логическим оператором, который возвращает истинный регистр, значение слева ниже, чем значение справа.

## Основное решение

```javascript
function testLessThan(val) { 
  if (val < 25) 
    return "Under 25"; 
 
  if (val < 55) 
    return "Under 55"; 
 
  return "55 or Over"; 
 } 

```