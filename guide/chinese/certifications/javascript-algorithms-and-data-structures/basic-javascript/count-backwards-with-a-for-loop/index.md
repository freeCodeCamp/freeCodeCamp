---
title: Count Backwards With a For Loop
localeTitle: 用For循环向后计数
---
## 用For循环向后计数

这是一个例子：

```javascript
// Example 
 var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
```

#### 提示：1

*   为myArray创建一个新的for循环

#### 提示：2

*   从9之前的第一个奇数开始

# SPOILER警告：解决方案

```javascript
var ourArray = []; 
 
 for (var i = 10; i > 0; i -= 2) { 
  ourArray.push(i); 
 } 
 
 // Setup 
 var myArray = []; 
 
 // Only change code below this line. 
 for (var i = 9; i > 0; i-=2){ 
  myArray.push(i) 
 } 

```