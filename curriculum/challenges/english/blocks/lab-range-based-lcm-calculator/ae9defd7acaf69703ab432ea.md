---
id: ae9defd7acaf69703ab432ea
title: Implement a Range-Based LCM Calculator
challengeType: 26
dashedName: implement-a-range-based-lcm-calculator
---

# --description--

In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories**

1. You should have a `smallestCommons` function that accepts an array of two numbers as an argument.
1. The `smallestCommons` function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
1. The function should handle input where the two numbers are not in numerical order.

# --hints--

You should have a `smallestCommons` function.

```js
assert.isFunction(smallestCommons);
```

`smallestCommons([1, 5])` should return a number.

```js
assert.isNumber(smallestCommons([1, 5]));
```

`smallestCommons([1, 5])` should return `60`.

```js
assert.strictEqual(smallestCommons([1, 5]), 60);
```

`smallestCommons([5, 1])` should return `60`.

```js
assert.strictEqual(smallestCommons([5, 1]), 60);
```

`smallestCommons([2, 10])` should return `2520`.

```js
assert.strictEqual(smallestCommons([2, 10]), 2520);
```

`smallestCommons([1, 13])` should return `360360`.

```js
assert.strictEqual(smallestCommons([1, 13]), 360360);
```

`smallestCommons([23, 18])` should return `6056820`.

```js
assert.strictEqual(smallestCommons([23, 18]), 6056820);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function smallestCommons(arr) {
  let [min, max] = arr.sort((a, b) => a - b);

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  let multiple = min;

  for (let i = min + 1; i <= max; i++) {
    multiple = lcm(multiple, i);
  }

  return multiple;
}
```
