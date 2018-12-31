---
title: Add Items to an Array with push() and unshift()
localeTitle: Добавление элементов в массив с помощью push () и unshift ()
---
## Добавление элементов в массив с помощью push () и unshift ()

*   Как и в приведенном примере, используйте метод `.unshift()` в массиве, чтобы добавить элементы в начало массива и использовать метод `.push()` для добавления элементов в конец массива.

## Решение:

```javascript
function mixedNumbers(arr) { 
  // change code below this line 
 arr.unshift('I',2,'three'); 
 arr.push(7,'VIII', 9); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(mixedNumbers(['IV', 5, 'six'])); 

```