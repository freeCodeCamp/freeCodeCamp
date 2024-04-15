---
id: 661a6e055483ba4385d58e4d
title: Sum of Odd Numbers
challengeType: 1
dashedName: sum-of-odds
---

# --description--

Imagine you're on an adventurous quest to unravel the mysteries of numbers! Today, your quest involves exploring the realm of odd numbers. Odd numbers are those that are not divisible by 2, leaving a remainder of 1. Your task is to calculate the sum of all the odd numbers up to a certain value chosen by you.

Write a program to print the sum of odd numbers up to N.

**Examples:**

If the input number is `20`, the sum of odd numbers up to `20` is `100`.

```js
sumOfOddNumbers(20) 
Output: 100
```

# --instructions--

Write a JavaScript function called `sumOfOddNumbers` that takes a number `N` as an argument and prints the sum of all the odd numbers up to `N`.

# --hints--

`sumOfOddNumbers` should be `a` function.

```js

assert(typeof sumOfOddNumbers === 'function');
```

You should use the modulus operator `%` to check for odd numbers.

```js

assert(code.match(/%/));

```

# --seed--
## --seed-contents--

```js

function sumOfOddNumbers(N) {
   // Only change code below this line


   // Only change code above this line
}

sumOfOddNumbers(20);
```

# --solutions--

```js
function sumOfOddNumbers(N) {
   let sum = 0;
   for (let i = 1; i <= N; i++) {
       if (i % 2 !== 0) {
           sum += i;
       }
   }
   console.log(sum);
}
```
