---
title: Implement map on a Prototype
localeTitle: 在Prototype上实现地图
---
## 在Prototype上实现地图

要使用关键字解决此挑战，这是一个关键。

它将使我们能够访问我们调用myMap的对象。

从那里我们可以使用forEach或for循环向已经声明的空数组添加元素，因为我们使用给定的回调方法修改每个元素。

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

### 有用的链接

[这个。 Javascript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)  
[这个。 Javascript W3Schools](https://www.w3schools.com/js/js_this.asp)