---
title: Array.prototype.slice
localeTitle: Array.prototype.slice
---
JavaScript数组方法`.slice()`将返回一个新的数组对象，该对象将是原始数组的一个段（一个切片）。原始数组未被修改。

**句法**

```javascript
  array.slice() 
  arr.slice(startIndex) 
  arr.slice(startIndex, endIndex) 
```

## 参数

*   **startIndex**切片应开始的从零开始的索引。如果省略该值，则它将从0开始。
    
*   **endIndex**切片将**在**此基于零的索引**之前**结束。负索引用于从数组的末尾偏移。如果省略该值，则段将切片到数组的末尾。
    

## 例子

```javascript
  var array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var everything = array.slice() 
  // everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
 
  var kitchen = array.slice(2, 4) 
  // kitchen = ['cup', 'sandwich'] 
 
  var random = array.slice(4) 
  // random = ['bag', 'phone', 'cactus'] 
 
  var noPlants = array.slice(0, -1) 
  // noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone'] 
 
  // array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus'] 
```

#### 更多信息：

资料来源： [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)