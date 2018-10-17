---
title: Add Items Using splice()
localeTitle: Добавление элементов с помощью splice ()
---
## Добавление элементов с помощью splice ()

*   Использование функции сращивания (), вы должны удалить первые 2 элемента из массива `arr` и заменить их `DarkSalmon` и `BlanchedAlmond` .
*   Помните, что функция сращивания может принимать до трех параметров.

## Пример:

```javascript
arr.splice(0, 1, "Two"); 
 /*  The first two paramemters are the same as they were in the previous challenge. 
    `0` will start the `splice()` function off at index 0. 
    The second parameter `1` will remove only 1 variable from the array. 
    The final variable "Two" will replace the variable in arr[0]. 
    Note: The final parameter can take more than 1 arguement. 
 */ 
```

## Решение:

```javascript
function htmlColorNames(arr) { 
  // change code below this line 
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond"); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick'])); 

```