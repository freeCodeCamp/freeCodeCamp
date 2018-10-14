---
title: Dot Product
localeTitle: 点产品
---
## 点产品

点积是将两个向量相乘以获得单个数字的方法。 点积在物理学和线性代数中很常见。

您可以将两个向量**a**和**b**的点积写为**a** · **b** 。

两个向量必须具有相同的长度才能得到点积。

要查找点积，请将`nth`一个向量中的第`nth`元素乘以第二`nth`向量中的`nth`元素。 为所有元素执行此操作。 然后，找到所有这些产品的总和。 这个总和是点积！

### 点产品的属性

两个向量的点积也可以表示为`a · b = ||a|| * ||b|| * cos(theta)` 。 在这个公式中， `||a||`是矢量**a**的大小， `theta`是两个矢量之间的角度。

两个正交（也称为垂直）矢量的点积总是0。

### 工作实例

例如，假设您有向量**a**和**b** 。 设`a = (1 2 3 4)` ， `b = (-1 0 1 2)` 。

点积为`(1)(-1) + (2)(0) + (3)(1) + (4)(2) = -1 + 0 + 3 + 8 = 12` 。 所以在这种情况下，你会说**a** · **b** = 12。

### 代码示例

这是JavaScript中的示例函数。 它返回两个向量参数的点积：

```javascript
/** 
 * @param {array} a - A vector/array of numbers 
 * @param {array} b - A vector/array of numbers with the same length as a 
 * @returns {number} - The dot product of a and b 
 */ 
 function dotProduct(a, b) { 
  // Check if the lengths are the same - if not, there can't be a dot product 
  if (a.length !== b.length) { 
    throw "vector lengths must be equal"; 
  } 
 
  // Create a variable to store the sum as we calculate it 
  let product = 0; 
 
  // Loop through the vectors, calculate products, and add them to the total 
  for (let i = 0; i < a.length; i++) { 
    // You may want to ensure that a[i] and b[i] are both finite numbers 
    product += a[i] * b[i]; 
  } 
 
  return product; 
 } 
```

### 更多信息：

[矢量](../vectors/index.md)