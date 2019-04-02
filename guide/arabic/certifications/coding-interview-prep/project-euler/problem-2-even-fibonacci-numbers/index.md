---
title: Even Fibonacci Numbers
localeTitle: حتى أرقام فيبوناتشي
---
## المشكلة الثانية: حتى أرقام فيبوناتشي

### طريقة:

*   تسلسل فيبوناتشي هو تسلسل حيث `fib(n) = fib(n-1) + fib(n-1)` .
    
*   في هذا التحدي يتعين علينا جمع كل الأرقام الزوجية حتى الفصل `nth` في التسلسل.
    
*   مثال على `fiboEvenSum(10)` :
    
*   التسلسل حتى الفصل العاشر هو: 1 و 2 و 3 و 5 و 8 و 13 و 21 و 34 و 55 و 89 و 144
    
*   مجموع كل الأرقام الزوجية في التسلسل أعلاه هو: 2 + 8 + 34 + 144 = 188
    

### حل:

#### الحل الأساسي - تكراري:

 `function fiboEvenSum(n) { 
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
` 

#### حل متقدم - متكرر:

 `// We use memoization technique to save ith fibonacci number to the fib array 
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
` 

*   [تشغيل الكود](https://repl.it/@ezioda004/Project-Euler-Problem-2-Even-Fibonacci-Numbers)

### المراجع:

*   [ويكيبيديا](https://en.wikipedia.org/wiki/Fibonacci_number)