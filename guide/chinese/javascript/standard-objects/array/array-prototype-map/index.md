---
title: Array.prototype.map
localeTitle: Array.prototype.map
---
## Array.prototype.map

`.map()`方法遍历给定数组并在每个元素上执行提供的函数。它返回一个新数组，其中包含每个元素上函数调用的结果。

### 例子

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

**更多信息**

这是一个交互式的Scrimba截屏视频，它解释了`Array.prototype.map()` ：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)