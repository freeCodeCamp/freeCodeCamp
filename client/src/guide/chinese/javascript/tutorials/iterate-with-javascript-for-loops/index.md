---
title: Iterate with JavaScript for Loops
localeTitle: 使用JavaScript迭代循环
---
JavaScript的循环的最常见的类型被称为`for loop` ，因为它运行`for`的特定次数。
```
var ourArray = []; 
 for(var i = 0; i < 5; i++) { 
  ourArray.push(i); 
 } 
```

ourArray现在包含\[0,1,2,3,4\]

## 更多关于for循环
```
for(var i = 0; i < 5; i++) {  // There are 3 parts here 
```

循环有三个部分。它们用分号分隔。

1.  初始化： `var i = 0;` - 此代码仅在循环开始时运行一次。它通常用于声明计数器变量（使用`var` ）并初始化计数器（在这种情况下，它设置为0）。
    
2.  条件： `i < 5;` - 只要这是`true` ，循环就会运行。这意味着只要`i`等于5，循环就会停止循环。请注意，循环内部永远不会将`i`视为5，因为它将在此之前停止。如果此条件最初为`false` ，则循环将永远不会执行。
    
3.  增量： `i++` - 此代码在每个循环结束时运行。它通常是一个简单的增量（ `++`运算符），但实际上可以是任何数学变换。它用于向前移动计数器（ `i` ）（或向后移动等）。