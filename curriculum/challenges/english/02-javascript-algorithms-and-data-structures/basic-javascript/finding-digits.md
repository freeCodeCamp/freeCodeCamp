---
id: 661a70248a02a745810c70fa
title: Counting Digits
challengeType: 1
dashedName: finding-digits
---

# --description--

Write a program to take a number from the user and print the number of digits in the given number.

**Examples:**

If the input number is `7685`, the number of digits in the given number is `4`.

```js
countDigits(456) // Output: 3
```

# --instructions--

Write a JavaScript function called `countDigits` that takes a number as input and prints the number of digits in the given number.

use (`Math.abs()`) and `String` function
# --hints--

Ensure that you calculate the number of digits accurately without using a loop.


```js
assert(!code.match(/for\s*\(/));

```

# --seed--
## --seed-contents--

```js
function countDigits(number) {
   // Only change code below this line


   // Only change code above this line
}

countDigits(456);
```

# --solutions--

```js
function countDigits(number) {
   console.log(String(Math.abs(number)).length);
}
```
