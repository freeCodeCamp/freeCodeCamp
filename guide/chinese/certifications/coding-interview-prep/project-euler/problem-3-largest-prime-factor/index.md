---
title: Largest prime factor
localeTitle: 最大的素因子
---
## 问题3：最大的素因子

### 方法：

*   为了找到一个数字的最大素数因子，我们从最小的素数因子2开始并用它来除数。
*   如果余数为0表示该数字可以被该素数整除，我们将数字除以相同的素数，直到该数字不再被该素数整除。
*   之后，我们将素因子增加1并重复此过程，直到数字变为1。

### 解：

```js
function largestPrimeFactor(number) { 
  let prime = 2, max = 1; 
  while (prime <= number){ 
    if (number % prime == 0) { 
      max = prime; 
      number = number/prime; 
    } 
    else prime++; //Only increment the prime number if the number isn't divisible by it 
  } 
  return max; 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Problem-3-Largest-prime-factor)

### 资源：

*   [维基百科](https://en.wikipedia.org/wiki/Prime_number)