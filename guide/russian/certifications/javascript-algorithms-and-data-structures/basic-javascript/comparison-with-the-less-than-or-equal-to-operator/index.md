---
title: Comparison with the Less Than Or Equal To Operator
localeTitle: Сравнение с меньшим или равным оператору
---
## Сравнение с меньшим или равным оператору

**`<=`** (Меньше или равно) является логическим оператором, который возвращает истинный случай, значение слева является тем **же или меньше,** чем значение справа.

## Основное решение

```javascript
function testLessOrEqual(val) { 
  if (val <= 12) 
    return "Smaller Than or Equal to 12"; 
 
  if (val <= 24) 
    return "Smaller Than or Equal to 24"; 
 
  return "More Than 24"; 
 } 

```