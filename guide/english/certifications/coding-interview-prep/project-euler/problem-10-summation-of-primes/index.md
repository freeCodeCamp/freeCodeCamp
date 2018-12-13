---
title: Summation of primes
---
## Problem 10: Summation of primes

### Method:
- In this challenge we need to find sum of all prime numbers up to `n`.
- Example:
  - If `n = 10` then prime numbers before it are `2, 3, 5, 7` and their sum is `17`.
- We've used Sieve of Eratosthenes algorithm to find prime numbers in the below solution.

### Solution:
```js
function primeSummation(n) {
  
  // Initializing the array and sum which hold all prime numbers and the total sum, respectively
  let nums = []
  let sum = 0;
  
  // Upperbound of `n`
  const upperBound = Math.ceil(Math.sqrt(n));
  
  // Making an array of `n` numbers
  for (let i = 0; i < n; i++){
    nums.push(i);   
  }
  nums[1] = 0;
  
  // Looping until the upperbound
  for (let i = 2; i <= upperBound; i++){
    
    // Skipping if the number is already 0
    if (nums[i] !== 0){
    
      // Explcitly marking all multiples of `i` 0 
      for (let j = i*i; j < n; j += i){
        if (nums[j] % i == 0) {
          nums[j] = 0;
        }
      }
    }
  }
  
  // Sum and return all values in the array up to `n`
  for (let i = 0; i < n; i++){
    sum += nums[i];
  }
  return sum;
}
```

- [Run Code](https://repl.it/@ezioda004/Project-Euler-Problem-10-Summation-of-primes)

### References:
- Sieve of Eratosthenes [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
