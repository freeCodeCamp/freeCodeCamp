---
title: Remove Items from an Array with pop() and shift()
localeTitle: Удалите элементы из массива с помощью pop () и shift ()
---
## Удалите элементы из массива с помощью pop () и shift ()

*   Метод `.pop()` метод `.shift()` должны быть вызваны и инициализированы с помощью `popped` и `shifted` переменных, чтобы вернуть правильный ответ от функции.

## Решение:

```javascript
function popShift(arr) { 
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped]; 
 } 
 
 // do not change code below this line 
 console.log(popShift(['challenge', 'is', 'not', 'complete'])); 

```