---
id: 661bb2ec557e2c551a684538
title: Finding Last Digit
challengeType: 1
dashedName: finding-last-digit
---

# --description--

Find the ending digit of any number!

**Introduction**

In JavaScript, there's an operator (%) that can reveal the last digit of any number. Let's use it to find the last digit of a number.

# --instructions--

Write a program that uses the modulo operator (%) to find the last digit of that number. Finally, print the last digit.

Create a variable named `lastDigit`.

# --hints--

You should use `%` operator

```js
assert(code.match(/%/g));
```

Value of `lastDigit` should be `3`.

```js
assert(lastDigit === "3" || lastDigit === 3);
```


# --seed--
## --seed-contents--

```js
var number = 843;
//Only change code below this line

```

# --solutions--

```js

var number = 843;
var lastDigit = number%10;
console.log(lastDigit);
 
```
