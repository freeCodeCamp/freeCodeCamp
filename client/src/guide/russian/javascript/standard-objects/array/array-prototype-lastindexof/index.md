---
title: Array.prototype.lastIndexOf
localeTitle: Array.prototype.lastIndexOf
---
## Array.prototype.lastIndexof

Метод `lastIndexOf()` возвращает последний индекс, в котором данный элемент может быть найден в массиве, или -1, если он отсутствует. Массив выполняется в обратном порядке, начиная `fromIndex` .

**Синтаксис**

```javascript
  arr.lastIndexOf(searchElement, fromIndex = arr.length - 1]) 
```

## параметры

*   **searchElement**
    
    *   Элемент для поиска в массиве.
*   **fromIndex**
    
    *   _Необязательно_ . Индекс, с которого нужно начать поиск назад. По умолчанию используется длина массива минус единица, т. Е. Будет проверен весь массив. Если индекс больше или равен длине массива, будет проверен весь массив. Если значение отрицательное, оно принимается за смещение от конца массива. Обратите внимание, что даже когда индекс отрицательный, массив по-прежнему выполняется с обратной стороны. Если вычисленный индекс меньше 0, возвращается -1, т.е. массив не будет искать.

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) | [Ссылка MSDN](https://msdn.microsoft.com/en-us/LIBRary/ff679972%28v=vs.94%29.aspx)

## Возвращает

Индекс последнего вхождения `searchElement` в массиве, или -1, если `searchElement` не найден.

## Описание

`lastIndexOf` сравнивает `searchElement` с элементами массива с использованием строгого равенства (тот же метод, который используется оператором === или triple-equals, operator).

## замечания

Поиск происходит в порядке убывания индекса (последний член сначала). Для поиска в порядке возрастания используйте метод `indexOf` .

Необязательный аргумент `fromIndex` указывает индекс массива, с которого начинается поиск. Если `fromIndex` больше или равно длине массива, выполняется поиск всего массива. Если `fromIndex` отрицательный, поиск начинается с длины массива плюс `fromIndex` . Если вычисленный индекс меньше 0, возвращается -1.

## Примеры

```javascript
  var array = [2, 5, 9, 2]; 
  array.lastIndexOf(2);     // 3 
  array.lastIndexOf(7);     // -1 
  array.lastIndexOf(2, 3);  // 3 
  array.lastIndexOf(2, 2);  // 0 
  array.lastIndexOf(2, -2); // 0 
  array.lastIndexOf(2, -1); // 3 
 
  // Create an array. 
  var ar = ["ab", "cd", "ef", "ab", "cd"]; 
 
  // Determine the first location, in descending order, of "cd". 
  document.write(ar.lastIndexOf("cd") + "<br/>"); 
 
  // Output: 4 
 
  // Find "cd" in descending order, starting at index 2. 
  document.write(ar.lastIndexOf("cd", 2) + "<br/>"); 
 
  // Output: 1 
 
  // Search for "gh" (which is not found). 
  document.write(ar.lastIndexOf("gh")+ "<br/>"); 
 
  // Output: -1 
 
  // Find "ab" with a fromIndex argument of -3. 
  // The search in descending order starts at index 3, 
  // which is the array length minus 2. 
  document.write(ar.lastIndexOf("ab", -3) + "<br/>"); 
  // Output: 0 

```