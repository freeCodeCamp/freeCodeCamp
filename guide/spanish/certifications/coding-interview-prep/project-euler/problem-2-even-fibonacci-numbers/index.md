---
title: Even Fibonacci Numbers
localeTitle: Incluso los números de Fibonacci
---
## Problema 2: incluso los números de Fibonacci

### Método:

*   Una secuencia de fibonacci es una secuencia en la que `fib(n) = fib(n-1) + fib(n-1)` .
    
*   En este desafío, tenemos que sumar todos los números pares hasta el `nth` término en la secuencia.
    
*   Ejemplo para `fiboEvenSum(10)` :
    
*   La secuencia hasta el décimo término es: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
    
*   La suma de todos los números pares en la secuencia anterior es: 2 + 8 + 34 + 144 = 188
    

### Solución:

#### Solución Básica - Iterativa:

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

#### Solución Avanzada - Recursiva:

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

*   [Ejecutar código](https://repl.it/@ezioda004/Project-Euler-Problem-2-Even-Fibonacci-Numbers)

### Referencias:

*   [Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_number)