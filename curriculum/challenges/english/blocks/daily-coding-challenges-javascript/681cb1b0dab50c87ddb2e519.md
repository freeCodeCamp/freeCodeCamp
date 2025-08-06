---
id: 681cb1b0dab50c87ddb2e519
title: "JavaScript Challenge 8: Factorializer"
challengeType: 28
dashedName: javascript-challenge-8
---

# --description--

Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

- The factorial of zero is 1.

# --hints--

`factorial(0)` should return `1`.

```js
assert.equal(factorial(0), 1);
```

`factorial(5)` should return `120`.

```js
assert.equal(factorial(5), 120);
```

`factorial(20)` should return `2432902008176640000`.

```js
assert.equal(factorial(20), 2432902008176640000);
```

# --seed--

## --seed-contents--

```js
function factorial(n) {

  return n;
}
```

# --solutions--

```js
function factorial(n) {
  return n == 0 ? 1 : n * factorial(n - 1);
}
```
