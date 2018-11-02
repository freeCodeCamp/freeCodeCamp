---
title: Comparison with the Greater Than Operator
localeTitle: Сравнение с более крупным оператором
---
## Сравнение с более крупным оператором

`>` (Greater Than) - это логический оператор, который возвращает истинный случай, значение слева выше, чем значение справа.

## Основное решение

```javascript
function testGreaterThan(val) { 
  if (val > 100) 
    return "Over 100"; 
 
  if (val > 10) 
    return "Over 10"; 
 
  return "10 or Under"; 
 } 

```