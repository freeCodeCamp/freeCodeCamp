---
title: Array.prototype.forEach
localeTitle: Array.prototype.forEach
---
## Array.prototype.forEach

'forEach'数组方法用于迭代数组中的每个项。该方法在数组Object上调用，并传递一个函数，该函数在数组中的每个项目上调用。

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach(number => console.log(number * 2)); 
 
 // 2 
 // 4 
 // 6 
 // 8 
 // 10 
```

如果需要引用数组中当前项的索引，则回调函数还可以获取索引的第二个参数。

```javascript
var arr = [1, 2, 3, 4, 5]; 
 
 arr.forEach((number, i) => console.log(`${number} is at index ${i}`)); 
 
 // '1 is at index 0' 
 // '2 is at index 1' 
 // '3 is at index 2' 
 // '4 is at index 3' 
 // '5 is at index 4' 
```

#### 更多信息：

[关于Array.prototype.forEach（）的MDN文章](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)