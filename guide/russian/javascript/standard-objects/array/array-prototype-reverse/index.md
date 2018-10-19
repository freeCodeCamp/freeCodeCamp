---
title: Array.prototype.reverse
localeTitle: Array.prototype.reverse
---
Метод массива JavaScript `.reverse()` изменит порядок элементов в массиве.

**Синтаксис**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  array.reverse(); 
```

## Описание

`.reverse()` меняет индекс элементов массива.

## Примеры

**Используйте `.reverse()` чтобы отменить элементы массива**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.reverse(); 
 
  console.log(array); 
  /* Console will output 5, 4, 3, 2, 1 and 
  the variable array now contains the set [5, 4, 3, 2, 1] */ 
```

Источник: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)