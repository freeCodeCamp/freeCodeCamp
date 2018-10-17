---
title: Array.prototype.unshift
localeTitle: Array.prototype.unshift
---
Метод массива JavaScript `.unshift()` добавляет один или несколько элементов в начало массива и возвращает новую длину массива.

**Синтаксис**
```
arr.unshift([element1[, ...[, elementN]]]) 
```

## параметры

Элементы для добавления к фронту массива.

## Возвращает

Новая `length` массива, на который был вызван метод.

## Примеры
```
var array = [1, 2, 3, 4, 5]; 
 
 array.unshift(0); 
 // If we console.log(array.shift()); the console would output 6. 
 // array is now [0, 1, 2, 3, 4, 5]; 
 
 array.unshift([-1]); 
 // array is now [[-1], 0, 1, 2, 3, 4, 5]; 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ": Ракета:") [Код запуска](https://repl.it/C2V3)

Источник [MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)