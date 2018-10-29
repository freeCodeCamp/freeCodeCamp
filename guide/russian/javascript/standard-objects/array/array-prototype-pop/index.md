---
title: Array.prototype.pop
localeTitle: Array.prototype.pop
---
# Array.prototype.pop

Метод `pop()` удаляет последний элемент из и изменяет длину массива.

**Синтаксис**

```js
    arr.pop() 
```

**Возвращаемое значение**

*   Удаленный элемент из массива; undefined, если массив пуст.

## Описание

Метод `pop()` удаляет последний элемент из массива и возвращает это значение вызывающему.

Если вы вызываете `pop()` в пустом массиве, он возвращает undefined.

## Примеры

```js
let array = [1, 2, 3, 4]; 
 array.pop(); // removes 4 
 console.log(array); // [1, 2, 3] 
 
 [].pop() // undefined 
```

#### Дополнительная информация:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)