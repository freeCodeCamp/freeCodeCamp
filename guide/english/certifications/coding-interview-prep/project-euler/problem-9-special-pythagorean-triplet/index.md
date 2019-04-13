---
title: Special Pythagorean triplet
---
## Problem 9: Special Pythagorean triplet

### Method:
- In this challenge we need to find the pythagorean triple.
- We have the following information - `a < b < c`
- Based on this, we can make a loop starting from `a = 0` and `b = a` since `a < b` always.
- We also know that `a + b + c = n` and `a^2 + b^2 = c^2`, since we have `a`, `b` and `n`. We can find `c` and see if it satisfies the triplet theorem.

### Solution:
```js
function specialPythagoreanTriplet(n) {
  let sumOfabc = n;
  for (let a = 1; a < n; a++){
    for (let b = a; b < n; b++){
      let c = n - a- b;
      if (c > 0){
        if (c**2 == a**2 + b**2){
          return a*b*c;
        }
      }
    }
  } 
}

specialPythagoreanTriplet(1000);
```
- [Run Code](https://repl.it/@ezioda004/Project-Euler-Problem-9-Special-Pythagorean-triplet)

### References:
- [Wikipedia](https://en.wikipedia.org/wiki/Pythagorean_triple)
