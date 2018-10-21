---
title: Learn how a Stack Works
localeTitle: 了解堆栈的工作原理
---
## 了解堆栈的工作原理

### 方法：

*   堆栈是一种抽象的数据结构。
*   他们遵循LIFO（后进先出）或FILO（先进先出）原则。
*   堆栈的插入和删除操作具有**O（1）**时间复杂度。
*   在Javascript中，数组可以被视为一个堆栈，因为`.push()`和`.pop()`方法的时间复杂度为**O（1）** 。
*   在这个挑战中，我们需要将`.pop()`和`.push()`放入堆栈中。

### 解：

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"]; 
 
 homeworkStack.pop(); 
 homeworkStack.push("CS50"); 
```

### 参考：

*   [维基百科](https://en.wikipedia.org/wiki/Stack_(abstract_data_type))
*   [Hackerrank的](https://www.youtube.com/watch?v=wjI1WNcIntg)视频