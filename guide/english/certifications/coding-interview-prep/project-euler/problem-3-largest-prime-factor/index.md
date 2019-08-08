---
title: 'Problem 3: Largest prime factor'
---
# Problem 3: Largest prime factor

---
## Problem Explanation
- To find the largest prime factor of a number, we start from the smallest prime factor 2 and divide the number with it.
- If the remainder is 0 that means the number is divisible by that prime number, we keep dividing the number by same prime number until that number is no more divisible by that prime number. 
- After that, we incrememnt the prime factor by 1 and repeat this process till the number becomes 1.



---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function largestPrimeFactor(number) {
  let prime = 2,
    max = 1;
  while (prime <= number) {
    if (number % prime == 0) {
      max = prime;
      number = number / prime;
    } else prime++; //Only increment the prime number if the number isn't divisible by it
  }
  return max;
}
```

#### Relevant Links

- [Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
</details>
