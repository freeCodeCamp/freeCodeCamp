---
title: Array of
localeTitle: 数组
---
## 数组

无论参数的数量或类型如何，Array.of（）方法都会创建一个具有可变数量参数的新Array实例。

句法：

```javascript
Array.of(element0[, element1[, ...[, elementN]]]) 
```

## 例

```javascript
Array.of(7);       // [7] - creates an array with a single element 
 Array.of(1, 2, 3); // [1, 2, 3] 
 
 Array(7);          // [ , , , , , , ] - creates an empty array with a length property of 7 
 Array(1, 2, 3);    // [1, 2, 3] 
```

#### 更多信息：

有关更多信息，请访问[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of)