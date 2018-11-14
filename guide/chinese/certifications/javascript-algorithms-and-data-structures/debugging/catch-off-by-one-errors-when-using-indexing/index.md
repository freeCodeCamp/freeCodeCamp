---
title: Catch Off By One Errors When Using Indexing
localeTitle: 使用索引时捕获一个错误
---
## 使用索引时捕获一个错误

### 基本

由于JavaScript索引的工作方式`firstFive`有**五个元素，**但它们的索引从**0到4** ！

```javascript
console.log(len); // 5 
 console.log(firstFive[0]); // 1 
 /**/ 
 console.log(firstFive[4]); // 5 
 console.log(firstFive[5]); // undefined 
```

这应该足以让你掌握`firstFive`的限制。引导你注意循环。它有什么作用？您可以尝试调试它以找出答案！

### 调试

你得到这个代码：

```javascript
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

要调试这段代码，请使用`console.clear()` 。什么是最好的地方？答案就在`for`声明之前！

```javascript
  console.clear(); 
  for (let i = 1; i <= len; i++) { 
    console.log(firstFive[i]); 
  } 
```

控制台输出：

```text
  Console was cleared. 
  2 
  3 
  4 
  5 
  undefined 
```

### 分析

检查输出。在这些条件下，循环首先打印位于1 ...的元素，即2！它还尝试打印`undefined`索引为5的元素。

这可以被视为这一挑战的关键。保持`console.log()`和`console.clear()`存在。它们将帮助您了解代码的工作原理。

### 解

解决此问题的最直接方法是更改​​for（）条件。 让`i`从0开始。另外， **不**应该为i == 5执行循环。换句话说，当i == 5时， `i`和`len`之间的关系应该是`false` 。这可以通过使用`i < len`来实现（是5 <len？false，循环不会被执行！）。

```javascript
  for (let i = 0; i < len; i++) { 
```

**快乐的编码！** ：电脑：

### 资源

*   [对于FreeCodeCamp的陈述挑战](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops)
*   [适用于MDN Web文档的声明](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)