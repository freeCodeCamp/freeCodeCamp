---
title: Match Anything with Wildcard Period
localeTitle: Сопоставить все с подстановочным периодом
---
## Сопоставить все с подстановочным периодом

## Подсказка 1:

Точка `.` является ключевым в этой проблеме.

## Подсказка 2:

Вы должны положить точку в правильное положение.

## Решение

```javascript
let exampleStr = "Let's have fun with regular expressions!"; 
 let unRegex = /.un/; // Change this line 
 let result = unRegex.test(exampleStr); 
```

## Explaination

Период `.` будет любой персонаж, поэтому строки «run», «sun», «fun» и «pun» будут иметь одинаковые символы.