---
title: Multiples of 3 and 5
localeTitle: 3和5的倍数
---
## 问题1：3和5的倍数

### 方法：

*   在`%` modulo运算符的帮助下，我们可以找到一个数字是否可以被另一个数字除。
*   如果在执行`num1/num2`没有余数，则`num1 % num2`返回`0` 。
*   从`i = 3`开始，因为这是第一个可分为3或5的数字，我们循环直到提供的`number` 。
*   如果数字可以被3或5整除，我们将其添加到变量`sum`并最终返回它。

### 解：

```js
function multiplesOf3and5(number) { 
  let sum = 0, i = 3; 
  while (i < number){ 
    if (i % 3 == 0 || i % 5 == 0) sum += i; 
    i++; 
  } 
  return sum; 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Project-Euler-Problem-1-Multiples-of-3-and-5)

### 参考：

*   [模数运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())