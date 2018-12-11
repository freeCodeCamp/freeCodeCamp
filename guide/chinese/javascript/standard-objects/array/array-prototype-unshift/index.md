---
title: Array.prototype.unshift
localeTitle: Array.prototype.unshift
---
JavaScript数组方法`.unshift()`将一个或多个元素添加到数组的开头，并返回数组的新长度。

**句法**
```
arr.unshift([element1[, ...[, elementN]]]) 
```

## 参数

要添加到数组前面的元素。

## 返回

调用方法的数组的新`length` 。

## 例子
```
var array = [1, 2, 3, 4, 5]; 
 
 array.unshift(0); 
 // If we console.log(array.shift()); the console would output 6. 
 // array is now [0, 1, 2, 3, 4, 5]; 
 
 array.unshift([-1]); 
 // array is now [[-1], 0, 1, 2, 3, 4, 5]; 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/C2V3)

来源[MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)