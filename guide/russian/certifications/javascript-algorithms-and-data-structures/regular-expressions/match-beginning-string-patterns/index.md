---
title: Match Beginning String Patterns
localeTitle: Сопоставление начальных шаблонов строк
---
## Сопоставление начальных шаблонов строк

## Эта проблема

Используйте символ каретки в регулярном выражении, чтобы найти «Cal» только в начале строки rickyAndCal.

### Подсказка 1:

Попробуйте добавить регулярное выражение в косые черты

```javascript
let testExp = /^test/; 
 // returns true or false depending on whether test is found in the beginning of the string 
```

### Подсказка 2:

Попробуйте использовать символ символа «^» за пределами скобок, как показано в приведенном выше примере

### Предупреждение о спойлере - решение впереди

## Решение

```javascript
let rickyAndCal = "Cal and Ricky both like racing."; 
 let calRegex = /^Cal/; // Change this line 
 let result = calRegex.test(rickyAndCal); 

```