---
title: Array.prototype.reverse
localeTitle: Array.prototype.reverse
---
JavaScript数组方法`.reverse()`将颠倒数组中元素的顺序。

**句法**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  array.reverse(); 
```

## 描述

`.reverse()`反转数组元素的索引。

## 例子

**使用`.reverse()`来反转数组的元素**

```javascript
  var array = [1, 2, 3, 4, 5]; 
  console.log(array); 
  // Console will output 1, 2, 3, 4, 5 
 
  array.reverse(); 
 
  console.log(array); 
  /* Console will output 5, 4, 3, 2, 1 and 
  the variable array now contains the set [5, 4, 3, 2, 1] */ 
```

资料来源： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)