---
title: Multiples of 3 and 5
---
## Problem 1: Multiples of 3 and 5

### Method:
- We can find if a number is divisble by another number with the help of `%` modulo operator.
- `num1 % num2` returns `0` if there's no remainder while doing `num1/num2`.
- Starting from `i = 3` because that's the first number that's divisble by 3 or 5, we loop through till the `number` provided.
- If the number is divisible either by 3 or 5, we add that to the variable `sum` and finally return it.

### Solution:
```js
function multiplesOf3and5(number) {
  let sum = 0, i = 3;
  while (i < number){
    if (i % 3 == 0 || i % 5 == 0) sum += i;
    i++;
  }
  return sum;
}
```
- [Run Code](https://repl.it/@ezioda004/Project-Euler-Problem-1-Multiples-of-3-and-5)


### Reference:
- [Modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())
