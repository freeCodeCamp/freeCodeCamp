---
title: Array.prototype.forEach
localeTitle: Array.prototype.forEach
---
## Array.prototype.forEach

Метод массива 'forEach' используется для итерации по каждому элементу массива. Метод вызывается в массиве Object и передается функция, вызываемая для каждого элемента массива.

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach(number => console.log(number * 2)); 
 
 // 2 
 // 4 
 // 6 
 // 8 
 // 10 
```

Функция обратного вызова также может принимать второй параметр индекса, если вам нужно ссылаться на индекс текущего элемента в массиве.

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach((number, i) => console.log(`${number} is at index ${i}`)); 
 
 // '1 is at index 0' 
 // '2 is at index 1' 
 // '3 is at index 2' 
 // '4 is at index 3' 
 // '5 is at index 4' 
```

#### Дополнительная информация:

[Статья MDN на Array.prototype.forEach ()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)