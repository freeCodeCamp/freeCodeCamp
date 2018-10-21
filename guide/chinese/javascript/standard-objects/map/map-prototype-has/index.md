---
title: Map.prototype.has
localeTitle: Map.prototype.has
---
## Map.prototype.has

给定带有元素的`Map` ， `has()`函数允许您根据传递的键确定Map中是否存在元素。

`has()`函数返回一个_`Boolean`元_ （ `true`或`false` ），表示Map包含元素。

将`key`参数传递给`has()`函数，该函数将用于在Map中查找具有该键的元素。

例：

```js
// A simple Map 
 const campers = new Map(); 
 
 // add some elements to the map 
 // each element's key is 'camp' and a number 
 campers.set('camp1', 'Bernardo'); 
 campers.set('camp2', 'Andrea'); 
 campers.set('camp3', 'Miguel'); 
 
 // Now I want to know if there's an element 
 // with 'camp4' key: 
 campers.has('camp4'); 
 // output is `false` 
```

`campers` Map目前没有带`'camp4'`键的元素。因此， `has('camp4')`函数调用将返回`false` 。

```js
// If we add an element with the 'camp4' key to the map 
 campers.set('camp4', 'Ana'); 
 
 // and try looking for that key again 
 campers.has('camp4'); 
 // output is `true` 
```

由于地图现在确实有一个带有`'camp4'`键的元素，所以`has('camp4')`函数调用此时将返回`true` ！

在更真实的场景中，您可能不会自己手动将元素添加到Map中，因此`has()`函数在这些情况下将变得非常有用。

#### 更多信息：

*   [MDN上的Map.prototype.has（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has)