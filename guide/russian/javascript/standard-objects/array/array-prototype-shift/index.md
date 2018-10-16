---
title: Array.prototype.shift
localeTitle: Array.prototype.shift
---
Метод массива JavaScript `.shift()` удаляет первый элемент из массива и возвращает это значение. Это также изменит длину массива

**Синтаксис**

```javascript
  var array = [1, 2, 3, 4]; 
  array.shift(); 
```

## Описание

`.shift()` удалит элемент по индексу 0 массива, на который он вызывается. Затем он возвращает удаленное значение и сдвигает все оставшиеся элементы на 1 значение индекса.

`.shift()` возвратит `undefined` если массив, который он вызывается, не содержит элементов.

## Примеры

**Перенос первого значения из массива**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.shift(); 
  // If we console.log(array.shift()); the console would output 1. 
 
  console.log(array); 
  /* Console will output 2, 3, 4, 5 and 
  the variable array now contains the set [2, 3, 4, 5] where 
  each element has been moved down 1 index value. */ 
```

Источник: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)