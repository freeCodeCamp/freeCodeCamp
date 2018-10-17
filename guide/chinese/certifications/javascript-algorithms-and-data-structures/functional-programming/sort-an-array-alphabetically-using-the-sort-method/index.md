---
title: Sort an Array Alphabetically using the sort Method
localeTitle: 使用sort方法按字母顺序对数组进行排序
---
## 使用sort方法按字母顺序对数组进行排序

### 方法

在给出的示例中，我们看到如何编写一个函数，该函数将以反向字母顺序返回一个新数组。

```javascript
function reverseAlpha(arr) { 
  return arr.sort(function(a, b) { 
    return a < b; 
  }); 
 } 
 reverseAlpha(['l', 'h', 'z', 'b', 's']); 
 // Returns ['z', 's', 'l', 'h', 'b'] 
```

使用此逻辑，只需对函数进行反向工程，即可按字母顺序返回新数组。

### 解

```javascript
function alphabeticalOrder(arr) { 
  // Add your code below this line 
  return arr.sort(function(a,b) { 
    return a > b; 
  }); 
  // Add your code above this line 
 } 
 alphabeticalOrder(["a", "d", "c", "a", "z", "g"]); 

```