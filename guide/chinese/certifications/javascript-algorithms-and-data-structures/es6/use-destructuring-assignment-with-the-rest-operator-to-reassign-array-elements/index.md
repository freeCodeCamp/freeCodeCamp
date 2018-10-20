---
title: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
localeTitle: 使用与Rest运算符的Destructuring Assignment重新分配数组元素
---
## 使用与Rest运算符的Destructuring Assignment重新分配数组元素

请记住，rest运算符允许可变数量的参数。在这个挑战中，你必须摆脱数组的前两个元素。

## 提示1：

将前两个元素分配给两个随机变量。

## 提示2：

将数组的剩余部分设置为`...arr` 。

\=======

## 提示1

使用destructuring来创建`arr`变量。

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## 提示2

将`list`参数传播到`arr` 。

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## 提示3

使用`,,`排除`arr`数组的前两个元素。

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [,,...arr] = list; // change this 
  // change code above this line 
  return arr; 
 } 
```

## 剧透警报 - 提前解决！

```javascript
function removeFirstTwo(list) { 
  "use strict"; 
  // change code below this line 
  const [a, b, ...arr] = list; 
  // change code above this line 
  return arr; 
 } 

```