---
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
localeTitle: Используйте некоторый метод для проверки того, что любые элементы в массиве соответствуют критериям
---
## Используйте некоторый метод для проверки того, что любые элементы в массиве соответствуют критериям

### Проблема Объяснение

Используйте некоторый метод внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция `checkPositive` должна возвращать логическое значение.

#### Полезные ссылки:

*   [Array.prototype.some ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### Решение:

```javascript
function checkPositive(arr) { 
  return arr.some((elem) => elem > 0); 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```