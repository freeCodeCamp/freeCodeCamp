---
title: Matrix Calculator
localeTitle: 矩阵计算器
---
## 矩阵计算器

矩阵计算器用于执行加法，减法或乘法。 另外，它可以执行特定于矩阵的操作，例如矩阵转置，反转或定义矩阵的等级。

Matrix由行和列（nxm）构建。在矩阵上完成的操作通常会对矩阵的维度施加一些限制。

##### 加成：

通过添加两个**相同**尺寸的矩阵的值来完成添加。 结果是一个与原始数组尺寸相同的数组。

```javascript
// matrices a and b are represented by an array of arrays (rows of columns) 
 function addMatrices(a, b) { 
  // we might want to add here constraints for the same dimensions 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || !Array.isArray(b) || !Array.isArray(b[0])) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      result[i][j] = a[i][j] + b[i][j]; 
    } 
  } 
 
  return result; 
 } 
```

##### 减法：

通过减去**相同**维度的两个矩阵的值来完成减法。 结果是一个与原始数组尺寸相同的数组。

```javascript
// matrices a and b are represented by an array of arrays (rows of columns) 
 function subtractMatrices(a, b) { 
  // we might want to add here constraints for the same dimensions 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || !Array.isArray(b) || !Array.isArray(b[0])) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      result[i][j] = a[i][j] - b[i][j]; 
    } 
  } 
 
  return result; 
 } 
```

##### 乘法：

乘法可以通过将矩阵乘以标量或乘以矩阵来完成。 如果我们乘以两个矩阵，只有当左矩阵中的列数等于右矩阵中的行数时才能进行。

```javascript
// matrices a and b are represented by an array of arrays (rows of columns) 
 function multiplyMatrices(a, b) { 
  // we might want to add here constraints for the dimensions 
  //let's assume that b has to be either a scalar or an array 
  if (!Array.isArray(a) || !Array.isArray(a[0]) || ((!Array.isArray(b) || !Array.isArray(b[0])) && isNaN(b))) { 
    throw new Error('a, b or it\'s children is not an array'); 
  } 
 
  if (!isNaN(b)) { 
    for (let i = 0; i < a.length; i++) { 
      for (let j = 0; j < a[i].length; j++) { 
        a[i][j] = a[i][j] * b; 
      } 
    } 
    return a; 
  } 
 
  const result = []; 
  for (let i = 0; i < a.length; i++) { 
    result[i] = []; 
    for (let j = 0; j < a[i].length; j++) { 
      let sum = 0; 
      for (let k = 0; k < b[i].length; k++) { 
        sum += a[i][k] * b[k][j]; 
      } 
      result[i][j] = sum; 
    } 
  } 
 
  return result; 
 } 
```

#### 更多信息：

https://en.wikipedia.org/wiki/Matrix\_(mathematics）