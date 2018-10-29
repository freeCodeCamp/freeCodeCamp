---
title: Remove Items Using splice()
localeTitle: Удаление элементов с помощью splice ()
---
## Удаление элементов с помощью splice ()

*   Функция `splice()` должна быть вызвана в массиве `arr` , чтобы удалить 1 или более элементов из центра массива.
*   Массив `arr` настоящее время добавляет значение 16. Просто удалите столько переменных, сколько необходимо для возврата 10.

## Решение:

```javascript
function sumOfTen(arr) { 
  // change code below this line 
  arr.splice(1,2); 
  // change code above this line 
  return arr.reduce((a, b) => a + b); 
 } 
 
 // do not change code below this line 
 console.log(sumOfTen([2, 5, 1, 5, 2, 1])); 

```