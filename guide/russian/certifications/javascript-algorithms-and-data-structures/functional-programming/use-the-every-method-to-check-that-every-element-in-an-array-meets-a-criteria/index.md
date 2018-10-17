---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
localeTitle: Используйте каждый метод для проверки того, что каждый элемент в массиве соответствует критерию
---
## Используйте каждый метод для проверки того, что каждый элемент в массиве соответствует критерию

### Проблема Объяснение:

Используйте `every` метод внутри функции `checkPositive` чтобы проверить, является ли каждый элемент в `arr` положительным. Функция должна возвращать логическое значение.

#### Полезные ссылки:

*   [Array.prototype.every ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### намек

Не забудьте `return` .

## Решение

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
 
  return arr.every(val => val > 0); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
```

## Альтернативное решение

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
    return arr.every(function(value) { 
        return value > 0; 
    }); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```