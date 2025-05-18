---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

When calling a function, the order of arguments matters. Imagine a function `sendEmail(to, subject)` — calling it as `sendEmail("Hello", "john@example.com")` would swap the subject and recipient, leading to confusion.

The same concept applies in programming. If you pass arguments in the wrong order, the result may be logically incorrect or completely break your program — especially if the argument types are similar.

This challenge will help you recognize and fix argument order mistakes in function calls.

# --instructions--

The function `raiseToPower(base, exponent)` should return `base` raised to the power of `exponent`.

Currently, it is being called incorrectly. Fix the function call so `power` equals 8, which is `2` raised to the 3rd power.

Be sure the values are passed in the correct order.

# --hints--

Your code should correctly set `power` to 8 using the variables `base` and `exp`.

```js
assert(power === 8);
You should call raiseToPower with base as the first argument and exp as the second.
assert(/raiseToPower\s*\(\s*base\s*,\s*exp\s*\)/.test(__helpers removeJSComments(code)));

--seed--
--seed-contents--

function raiseToPower(base, exponent) {
  return Math.pow(base, exponent);
}

let base = 2;
let exp = 3;

let power = raiseToPower(base, exp);

console.log(`${base}^${exp} =`, power); // should print: 2^3 = 8

--solutions--

function raiseToPower(base, exponent) {
  return Math.pow(base, exponent);
}

let base = 2;
let exp = 3;

let power = raiseToPower(base, exp);
console.log(`${base}^${exp} =`, power); // 2^3 = 8