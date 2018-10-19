---
title: 10001st prime
localeTitle: 10001st prime
---
## Problema 7: prime 10001

### Método:

*   Um número primo é um número dividido por 1 e por ele mesmo.
*   Podemos achar que um número é primo se não for divisível por outros números primos menores do que ele.

### Solução:

```js
function nthPrime(n) { 
 
  //Primes array which will store all the prime numbers 
  const primes = [2]; 
 
  //Num is the number we want to check 
  let num = 3, isPrime = true; 
 
  //Looping until primes array is equal to n 
  while (primes.length < n){ 
 
    //All the primes numbers of a number is always <= it's square root 
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

\- [Executar código](https://repl.it/@ezioda004/Project-Euler-Problem-7-10001st-prime)

### Referências:

*   [Wikipedia](https://en.wikipedia.org/wiki/Prime_number)