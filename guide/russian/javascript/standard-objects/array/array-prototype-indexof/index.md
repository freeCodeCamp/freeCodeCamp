---
title: Array.prototype.indexOf
localeTitle: Array.prototype.indexOf
---
## Array.prototype.indexOf

Метод `indexOf()` возвращает первый индекс, в котором данный элемент может быть найден в массиве. Если элемент отсутствует, он возвращает -1.

**Синтаксис**

```javascript
  arr.indexOf(searchElement[, fromIndex]) 
```

## параметры

*   **searchElement** Element, для которого вы ищете
    
*   **fromIndex** Дополнительно. Индекс, по которому вы хотите начать поиск. Если значение Index больше или равно длине массива, массив не выполняется, и метод возвращает -1. Если fromIndex является отрицательным числом, он считает смещение от конца массива (массив по-прежнему ищет вперед оттуда). Значение по умолчанию равно 0, что означает поиск всего массива.
    

## Описание

Метод `indexOf` принимает каждый элемент массива в порядке возрастания индекса и проверяет его на `searchElement` с использованием строгого равенства ( `===` ). Когда он найдет элемент, который возвращает `true` , он возвращает свой индекс.

## Примеры

```javascript
var array = [1, 2, 4, 1, 7] 
 
 array.indexOf(1); // 0 
 array.indexOf(7); // 4 
 array.indexOf(6); // -1 
 array.indexOf('1'); // -1 
 array.indexOf('hello'); // -1 
 array.indexOf(1, 2); // 3 
 array.indexOf(1, -3); // 3 
```

### Дополнительная информация:

[Ссылка MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[Ссылка MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript)