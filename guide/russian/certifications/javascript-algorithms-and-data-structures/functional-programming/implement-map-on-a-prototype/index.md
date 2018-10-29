---
title: Implement map on a Prototype
localeTitle: Реализовать карту на прототипе
---
## Реализовать карту на прототипе

Чтобы решить эту проблему с помощью ключевого слова, это ключ.

Это даст нам доступ к объекту, который мы вызываем myMap.

Оттуда мы можем использовать цикл forEach или for для добавления элементов в уже объявленный пустой массив, когда мы модифицируем каждый элемент с помощью данного метода обратного вызова.

```javascript
// the global Array 
 var s = [23, 65, 98, 5]; 
 
 Array.prototype.myMap = function(callback){ 
  var newArray = []; 
  // Add your code below this line 
  this.forEach(a => newArray.push(callback(a))); 
  // Add your code above this line 
  return newArray; 
 
 }; 
 
 var new_s = s.myMap(function(item){ 
  return item * 2; 
 }); 
```

### Полезные ссылки

[этот. Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
[этот. Javascript W3Schools](https://www.w3schools.com/js/js_this.asp)