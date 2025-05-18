---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Sometimes, bugs occur when a function is called with its arguments in the wrong order. This is especially tricky when the arguments are of the same data type, like two numbers — your code won’t throw an error, but it will produce unexpected results.

For example, if a function is supposed to take a base and an exponent and raise the base to that exponent, reversing the two values will give the wrong answer.

Pay attention to the order of parameters when calling functions, especially when the types match.

# --instructions--

The function `raiseToPower` takes two numbers: a base and an exponent, and returns the base raised to that power.

However, the function is currently called with the arguments in the wrong order.

Fix the code so that the variable `power` correctly stores the value of 2 raised to the 3rd power (which is 8).

# --hints--

Your code should fix the value of `power` so that it equals 8.

```js
assert(power === 8);
```

Your code should call `raiseToPower` with the correct order of arguments: base first, then exponent.

```js
assert(__helpers.removeJSComments(code).match(/raiseToPower\s*\(\s*base\s*,\s*exp\s*\)/));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;

let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;

let power = raiseToPower(base, exp);
console.log(power);
```
