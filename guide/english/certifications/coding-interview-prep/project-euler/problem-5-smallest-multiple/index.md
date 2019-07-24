---
title: Smallest multiple
---
# Problem 5: Smallest multiple

---
## Problem Explanation
- In this challenge we need to find the LCM of 1 to n numbers. 
- To find LCM of a number we use the following formula: 
  - ![lcm](https://wikimedia.org/api/rest_v1/media/math/render/svg/9453a93953efe119b7502c1827aeeb869ab121d6)
- To find GCD (Greatest Common Divisor) of two number we use Euclidean algorithm.
- Once we get LCM of two numbers, we can get LCM of the numbers from 1 to n.


---
## Solutions
<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
//LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult(n) {
  let maxLCM = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}
```  

#### Relevant Links
- [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- [LCM](https://en.wikipedia.org/wiki/Least_common_multiple)
</details>
