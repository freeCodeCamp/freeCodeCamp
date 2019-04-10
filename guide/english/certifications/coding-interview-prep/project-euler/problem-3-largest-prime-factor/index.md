---
title: Largest prime factor
---
## Problem 3: Largest prime factor

### Method:
- To find the largest prime factor of a number, we start from the smallest prime factor 2 and divide the number with it.
- If the remainder is 0 that means the number is divisible by that prime number, we keep dividing the number by same prime number until that number is no more divisible by that prime number. 
- After that, we incrememnt the prime factor by 1 and repeat this process till the number becomes 1.


### Solution:
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
- [Run Code](https://repl.it/@ezioda004/Problem-3-Largest-prime-factor)
### Resources:

- [Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
