---
title: TCO Tail Call Optimization
localeTitle: TCO尾调用优化
---
## 尾调用优化（TCO）

尾调用优化（ **TCO** ）是递归时堆栈溢出问题的解决方案。

### 问题

每次调用函数都会被推送到计算机内存中的堆栈中。当函数完成时，它将从堆栈中弹出。在递归中，函数调用自身，以便继续添加到堆栈，直到所有这些函数完成。当然，这个堆栈有一个限制。当调用的函数太多时，会向堆栈添加太多的调用。当堆栈已满并且调用了函数时，这会导致**堆栈溢出，**因为堆栈已满。递归函数将无法完成并将导致错误。

#### 例

以下是使用**不带** TCO的递归的JavaScript阶乘函数的示例：

```javascript
  function fact(x) { 
    if (x <= 1) { 
      return 1; 
    } else { 
      return x * fact(x-1); 
    } 
  } 
 
  console.log(fact(10)); // 3628800 
  console.log(fact(10000)); // RangeError: Maximum call stack size exceeded 
```

请注意，使用参数10000运行`fact`将导致**堆栈溢出** 。

### 使用TCO解决问题

要使用Tail Call Optimization来解决这个问题，函数调用自身的语句应该处于尾部位置。尾部位置是要在函数中执行的最后一个语句。因此，函数对自身的调用应该是在函数结束之前调用的最后一件事。

在前面的示例中，乘法运算在`return x * fact(x-1)`语句中最后执行，因此它不是函数的最终操作。因此，它不是尾调用优化的。为了使尾部调用优化，您需要调用自身函数的最后一个操作。

#### 例

下面是使用递归**与** TCO一个JavaScript（ES5）阶乘函数的一个例子。

```javascript
  function fact(n) { 
      return factTCO(n, 1); 
  } 
 
  function factTCO(x, acc) { 
      if (x <= 1) { 
          return acc; 
      } else { 
          return factTCO(x-1, x*acc); 
      } 
  } 
 
  console.log(fact(10)); // 3628800 
  console.log(fact(10000)); // Infinity - Number too large, but unlike the unoptimized factorial, this does not result in stack overflow. 
```

请注意，运行`fact` _在支持ES6_因为调用_浏览器中运行_时，在10000这个时间**不会导致堆栈溢出** `factTCO`是函数的最后一个操作。

### 为什么会这样

当编译器或解释器注意到自调用是函数的最后一个操作时，它会弹出当前函数并将自调用推送到堆栈。这样，堆栈的大小不会改变。因此，堆栈不会因功能而溢出。

### 笔记

#### 更多信息：

*   [什么是尾部调用optmization？](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization) （堆栈溢出）
*   [ECMAScript 6中的尾调优化](http://2ality.com/2015/06/tail-call-optimization.html) （2ality - Axel Rauschmayer博士的博客）