---
title: Use Caution When Reinitializing Variables Inside a Loop
localeTitle: 在循环内重新初始化变量时请小心
---
## 在循环内重新初始化变量时请小心

*   必须通过重新定义`row[]`的范围来解决这一挑战。
*   以下是所需矩阵的示例。

```javascript
[ 
 [0][0], 
 [0][0], 
 [0][0] 
 ] 
```

*   然而，当前的矩阵 - 见下文 - 远离所需的矩阵

```javascript
[ 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0], 
 [0][0][0][0][0][0] 
 ] 
```

*   由于`row[]`数组被声明为嵌套for循环之外的全局变量，因此发生此错误。
*   但是，要正确填充矩阵，必须在每次外部循环迭代后重置`row[]`数组。

## 解

```javascript
function zeroArray(m, n) { 
  let newArray = []; 
  for (let i = 0; i < m; i++) { 
     let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */ 
    for (let j = 0; j < n; j++) { 
 
      row.push(0); 
    } 
    newArray.push(row); 
  } 
  return newArray; 
 } 
 let matrix = zeroArray(3, 2); 
 console.log(matrix); 

```