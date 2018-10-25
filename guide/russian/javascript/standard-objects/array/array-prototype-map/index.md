---
title: Array.prototype.map
localeTitle: Array.prototype.map
---
## Array.prototype.map

Метод `.map()` проходит через данный массив и выполняет предоставленную функцию для каждого элемента. Он возвращает новый массив, который содержит результаты вызова функции для каждого элемента.

### Примеры

**ES5**

```js
var arr = [1, 2, 3, 4]; 
 var newArray = arr.map(function(element) { return element * 2}); 
 console.log(newArray); // [2, 4, 6, 8] 
```

**ES6**

```js
const arr = [1, 2, 3, 4]; 
 const newArray = arr.map(element => element * 2); 
 console.log(newArray); 
 //[2, 4, 6, 8] 
```

**Дополнительная информация**

Вот интерактивный скринкаст Scrimba, который объясняет `Array.prototype.map()` :

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)