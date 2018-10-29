---
title: Array.prototype.pop
localeTitle: Array.prototype.pop
---
# Array.prototype.pop

`pop()`方法从中删除最后一个元素并更改数组的长度。

**句法**

```js
    arr.pop() 
```

**返回值**

*   从数组中删除的元素;如果数组为空，则为undefined。

## 描述

`pop()`方法从数组中删除最后一个元素，并将该值返回给调用者。

如果在空数组上调用`pop()` ，则返回undefined。

## 例子

```js
let array = [1, 2, 3, 4]; 
 array.pop(); // removes 4 
 console.log(array); // [1, 2, 3] 
 
 [].pop() // undefined 
```

#### 更多信息：

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)