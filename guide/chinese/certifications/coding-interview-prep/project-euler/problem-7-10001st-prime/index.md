---
title: 10001st prime
localeTitle: 第10001个素数
---
## 问题7：10001个素数

### 方法：

*   素数是一个除以1和自身的数字。
*   我们可以发现一个数字是素数，如果它不能被小于其自身的其他素数整除。

### 解：

```js
function nthPrime(n) { 
 
  //Primes array which will store all the prime numbers 
  const primes = [2]; 
 
  //Num is the number we want to check 
  let num = 3, isPrime = true; 
 
  //Looping until primes array is equal to n 
  while (primes.length < n){ 
 
    //All the primes numbers of a number is always <= its square root 
    let max = Math.ceil(Math.sqrt(num)); 
 
    for (let i = 0; primes[i] <= max; i++){ 
      if (num % primes[i] == 0) { 
 
        //Looping till we find the prime 
        isPrime = false; 
        break; 
      } 
    } 
 
    //if Prime found, push it to the array 
    if (isPrime) primes.push(num); 
    isPrime = true; 
 
    //An optimization technique, since we know of all even numbers only 2 is a prime number, we can skip the rest 
    num+=2; 
  } 
 
  //Returning the last number 
  return primes[primes.length-1]; 
 
 } 
```

\- [运行代码](https://repl.it/@ezioda004/Project-Euler-Problem-7-10001st-prime)

### 参考文献：

*   [维基百科](https://en.wikipedia.org/wiki/Prime_number)