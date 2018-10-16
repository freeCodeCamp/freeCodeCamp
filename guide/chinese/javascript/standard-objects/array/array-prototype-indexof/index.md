---
title: Array.prototype.indexOf
localeTitle: Array.prototype.indexOf
---
## Array.prototype.indexOf

`indexOf()`方法返回可在数组中找到给定元素的第一个索引。如果该元素不存在，则返回-1。

**句法**

```javascript
  arr.indexOf(searchElement[, fromIndex]) 
```

## 参数

*   **searchElement**您正在查找的元素
    
*   **fromIndex**可选。要在其中开始搜索的索引。如果fromIndex大于或等于数组的长度，则不搜索该数组，并且该方法返回-1。如果fromIndex是负数，则它会考虑从数组末尾开始的偏移量（数组仍然从那里向前搜索）。默认值为0，表示搜索整个数组。
    

## 描述

`indexOf`方法以递增索引顺序获取每个数组元素，并使用严格相等（ `===` ）对`searchElement`进行检查。一旦找到返回`true`的元素，它就会返回其索引。

## 例子

```javascript
var array = [1, 2, 4, 1, 7] 
 
 array.indexOf(1); // 0 
 array.indexOf(7); // 4 
 array.indexOf(6); // -1 
 array.indexOf('1'); // -1 
 array.indexOf('hello'); // -1 
 array.indexOf(1, 2); // 3 
 array.indexOf(1, -3); // 3 
```

### 更多信息：

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[MSDN链接](https://docs.microsoft.com/en-us/scripting/javascript/reference/indexof-method-array-javascript)