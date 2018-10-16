---
title: Array.prototype.shift
localeTitle: Array.prototype.shift
---
JavaScript数组方法`.shift()`将从数组中删除第一个元素并返回该值。这也将改变数组的长度

**句法**

```javascript
  var array = [1, 2, 3, 4]; 
  array.shift(); 
```

## 描述

`.shift()`将删除调用它的数组的索引0处的元素。然后它返回删除的值并将所有剩余元素向下移动1个索引值。

如果调用它的数组不包含任何元素，则`.shift()`将返回`undefined` 。

## 例子

**从数组中移出第一个值**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.shift(); 
  // If we console.log(array.shift()); the console would output 1. 
 
  console.log(array); 
  /* Console will output 2, 3, 4, 5 and 
  the variable array now contains the set [2, 3, 4, 5] where 
  each element has been moved down 1 index value. */ 
```

资料来源： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)