---
title: For Loop
localeTitle: 对于循环
---
### 句法

```javascript
for ([initialization]); [condition]; [final-expression]) { 
   // statement 
 } 
```

javascript `for`语句由三个表达式和一个语句组成：

## 描述

*   初始化 - 在循环上第一次执行之前运行。此表达式通常用于创建计数器。这里创建的变量的范围是循环。一旦循环完成它的执行就会被破坏。
*   condition - 在每次迭代执行之前检查的表达式。如果省略，则此表达式的计算结果为true。如果计算结果为true，则执行循环语句。如果计算结果为false，则循环停止。
*   final-expression - 每次迭代后运行的表达式。通常用于增加计数器。但它也可以用来递减计数器。
*   statement - 要在循环中重复的代码

这三个表达式中的任何一个或语句都可以省略。 For循环通常用于计算一定数量的迭代以重复语句。在条件表达式求值为false之前，使用`break`语句退出循环。

## 常见的陷阱

**超过数组的边界**

当多次索引数组时，很容易超出数组的边界（例如，尝试引用3元素数组的第4个元素）。

```javascript
    // This will cause an error. 
    // The bounds of the array will be exceeded. 
    var arr = [ 1, 2, 3 ]; 
    for (var i = 0; i <= arr.length; i++) { 
       console.log(arr[i]); 
    } 
 
    output: 
    1 
    2 
    3 
    undefined 
```

有两种方法可以修复此代码。将条件设置为`i < arr.length`或`i <= arr.length - 1`

### 例子

迭代0-8的整数

```javascript
for (var i = 0; i < 9; i++) { 
   console.log(i); 
 } 
 
 output: 
 0 
 1 
 2 
 3 
 4 
 5 
 6 
 7 
 8 
```

在条件表达式为false之前中断循环

```javascript
for (var elephant = 1; elephant < 10; elephant+=2) { 
    if (elephant === 7) { 
        break; 
    } 
    console.info('elephant is ' + elephant); 
 } 
 
 output: 
 elephant is 1 
 elephant is 3 
 elephant is 5 
```

### 其他资源

*   [MDN - 用于陈述](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)