---
id: 661a6f10ce4c51441d61a568
title: Calculate Sum of a Range
challengeType: 1
dashedName: sum-of-range
---

# --description--
**Objective:** 

The objective of this challenge is to write a program that calculates the sum of numbers within a given range.

**Introduction:** 

Calculating the sum of numbers within a specified range is a common task in programming. This challenge focuses on writing a program that efficiently computes the sum of numbers between two integers M and N.

**Challenge:**

Write a program that takes two integers M and N as input and prints the sum of numbers in the range from M to N.

<h2>Hinglish</h2>

**Lakshya:**

Diye gaye range ke andar numbers ka yog ganana karna.

**Parichay: **

Kisi nirdharit range ke andar numbers ka yog ganana programming mein ek aam karya hai. Yeh challenge ek aise program par dhyan kendrit karta hai jo do integers M aur N ke beech ke numbers ka yog prabhavi tareeke se ganit karta hai.

**Challenge: **

Ek program likho jo do integers M aur N ko input ke roop mein leta hai aur M se lekar N tak ke range mein numbers ka yog print karta hai.

**Examples:**

If the input integers are `2` and `7`, the sum of numbers in the range from `2` to `7` is `27`.

```js
sumInRange(2, 7) // Output: 27
```

# --instructions--
Write a JavaScript function called `sumInRange` that takes two integers `M` and `N` as arguments and prints the sum of numbers in the range from `M` to `N`, inclusive.<br>

Click on this <a href= https://cs50.ai/chat>Link</a> to Go to CS50 AI 
And use this prompt.

1. Prompt 1: How would you like us to handle scenarios where M and N are equal?
2. Prompt 2: Do you have any preferences regarding how we handle cases where M is greater than N?

# --hints--
`sumInRange` should be a function.

```js
assert(typeof sumInRange === 'function');
```

`sumInRange(2,7)` should return `27`.

```js
assert(sumInRange(2,7)===27)
```

`sumInRange(-3,3)` should return `0`.

```js
assert(sumInRange(-3,3)===0)
```

# --seed--
## --seed-contents--

```js
function sumInRange(M, N) {
   let sum =0;
   // Only change code below this line
  
  
  
   // Only change code above this line
   return sum;
}
sumInRange(2,7);
```

# --solutions--

```js
function sumInRange(M, N) {
   let sum = 0;
   for (let i = M; i <= N; i++) {
       sum += i;
   }
   return sum;
}
```

