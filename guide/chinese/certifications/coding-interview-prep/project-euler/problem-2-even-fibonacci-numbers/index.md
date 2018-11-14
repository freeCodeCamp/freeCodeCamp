---
title: Even Fibonacci Numbers
localeTitle: 甚至斐波那契数字
---
## 问题2：甚至斐波纳契数

### 方法：

*   斐波那契序列是其中`fib(n) = fib(n-1) + fib(n-1)`的序列。
    
*   在这个挑战中，我们必须将序列中的所有偶数加到`nth`项。
    
*   `fiboEvenSum(10)` ：
    
*   到第10学期的顺序是： 1,2,3,5,8,13,21,34,55,89,144
    
*   上述序列中所有偶数的和为： 2 + 8 + 34 + 144 = 188
    

### 解：

#### 基本解决方案 - 迭代：

```js
function fiboEvenSum(n) { 
  let first = 1, second = 2, sum = 2, fibNum; // declaring and initializing variables 
  if (n <= 1) return sum; // edge case 
  for (let i = 2; i <= n; i++){  // looping till n 
    fibNum = first + second;    // getting the ith fibonacci number 
    first = second; 
    second = fibNum; 
    if (fibNum%2 == 0) sum+=fibNum;  // If even add to the sum variable 
  } 
  return sum; 
 } 
```

#### 高级解决方案 - 递归：

```js
// We use memoization technique to save ith fibonacci number to the fib array 
 function fiboEvenSum(n){ 
  const fib = [1, 2]; 
  let sumEven = fib[1]; 
  function fibonacci(n){ 
    if (n <= 1) return fib[n]; // base condition 
    else if (fib[n]) return fib[n]; // if the number exists in the array we cache it and return 
    else { 
      fib[n] = fibonacci(n-1) + fibonacci(n-2); // otherwise calculcate and save it to the array 
      if (fib[n]%2 == 0) sumEven+=fib[n];  //if the number is even, add it to the sumEven variable 
      return fib[n]; 
    } 
  } 
  fibonacci(n); // run the recursive function 
  return sumEven; 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Project-Euler-Problem-2-Even-Fibonacci-Numbers)

### 参考文献：

*   [维基百科](https://en.wikipedia.org/wiki/Fibonacci_number)