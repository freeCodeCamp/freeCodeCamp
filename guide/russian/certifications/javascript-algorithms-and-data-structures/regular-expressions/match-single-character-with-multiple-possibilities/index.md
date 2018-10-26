---
title: Match Single Character with Multiple Possibilities
localeTitle: Совместный персонаж с несколькими возможностями
---
## Совместный персонаж с несколькими возможностями

### экстракт

Используя метод match (), вы можете извлекать части строки, которые соответствуют вашему регулярному выражению. В этой задаче вы извлекаете гласные «a, e, i, o, u» из предоставленной строки.

### Подсказка 1:

Вы пытаетесь использовать метод test ()? Помните, что этот метод возвращает True или False - нам нужно извлечь гласные из строки.

### Подсказка 2:

Вы пробовали использовать совпадение символа «\[\]» без запятых? т.е. \[abcd\] vs \[a, b, c, d\]

### Оповещение о спойлере - решение впереди!

## Решение

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it."; 
 let vowelRegex = /[aeiou]/ig; // Change this line 
 let result = quoteSample.match(vowelRegex); // Change this line 

```