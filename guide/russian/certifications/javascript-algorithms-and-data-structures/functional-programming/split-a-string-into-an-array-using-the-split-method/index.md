---
title: Split a String into an Array Using the split Method
localeTitle: Разбить строку на массив Используя метод split
---
## Разбить строку на массив Используя метод split

### метод

Просто разделите строку, чтобы создать новый массив слов.

Для достижения этого результата можно использовать простое регулярное выражение.

### Решение

```javascript
function splitify(str) { 
  // Add your code below this line 
  return str.split(/\W/); 
  // Add your code above this line 
 } 
 splitify("Hello World,I-am code"); 

```