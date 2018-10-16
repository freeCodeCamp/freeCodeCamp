---
title: Sum square difference
---
## Problem 6: Sum square difference

### Method:
- Sum of first n natural numbers can be calculated by using this formula:
  - ![sum of n numbers](https://wikimedia.org/api/rest_v1/media/math/render/svg/99476e25466549387c585cb4de44e90f6cbe4cf2)
  
- Sum of squares of n natural numbers can be calculated by using this formula:
  - ![sum of n squares](https://wikimedia.org/api/rest_v1/media/math/render/svg/ae043bef33d41161541238bdbf4feca9f5e179dd)
  
- We can calculate the values using the above formula and subtract them to get the result.

### Solution:
```js
function sumSquareDifference(n) {
  const sumOfN = (n*(n+1))/2;
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6;
  
  //** is exponentaial operator added in ES7, it's equivalent to Math.pow(num, 2)`
  return (sumOfN ** 2) - sumOfNSquare;
}
```
- [Run Code](https://repl.it/@ezioda004/Problem-6-Sum-square-difference)
### References:

- [Sum of n numbers - Wikipedia](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)
- [Sum of n square numbers - Wikipedia](https://en.wikipedia.org/wiki/Square_pyramidal_number)
