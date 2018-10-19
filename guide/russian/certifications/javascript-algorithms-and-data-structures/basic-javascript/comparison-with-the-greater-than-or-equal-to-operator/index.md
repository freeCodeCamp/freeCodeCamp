---
title: Comparison with the Greater Than Or Equal To Operator
localeTitle: Сравнение с более высоким или равным оператору
---
## Сравнение с более высоким или равным оператору

*   `>=` (Больше или равно) является логическим оператором, который возвращает истинный случай, значение слева является тем **же или более высоким,** чем значение справа.

## Основное решение

```javascript
function testGreaterOrEqual(val) { 
  if (val >= 20) 
    return "20 or Over"; 
 
  if (val >= 10) 
    return "10 or Over"; 
 
  return "Less than 10"; 
 } 

```