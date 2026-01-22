---
id: a5229172f011153519423690
title: Build an Odd Fibonacci Sum Calculator
challengeType: 26
dashedName: build-an-odd-fibonacci-sum-calculator
---

# --description--

In this lab you will build an odd Fibonacci sum calculator that computes the sum of all odd Fibonacci numbers that are less than or equal to a given positive integer.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories**

1. You should have a `sumFibs` function that accepts a number as an argument.
1. The `sumFibs` function should return the sum of all odd Fibonacci numbers that are less than or equal to the given number.
1. The Fibonacci sequence starts with `0` and `1`, and each subsequent number is the sum of the two previous ones.
1. Only the odd Fibonacci numbers should be added to the sum.

# --hints--

You should have a `sumFibs` function.

```js
assert.isFunction(sumFibs);
```

`sumFibs(1)` should return a number.

```js
assert.isNumber(sumFibs(1));
```

`sumFibs(1000)` should return `1785`.

```js
assert.strictEqual(sumFibs(1000), 1785);
```

`sumFibs(4000000)` should return `4613732`.

```js
assert.strictEqual(sumFibs(4000000), 4613732);
```

`sumFibs(4)` should return `5`.

```js
assert.strictEqual(sumFibs(4), 5);
```

`sumFibs(75024)` should return `60696`.

```js
assert.strictEqual(sumFibs(75024), 60696);
```

`sumFibs(75025)` should return `135721`.

```js
assert.strictEqual(sumFibs(75025), 135721);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function sumFibs(num) {
  let a = 0, b = 1;
  let sum = 0;

  while (b <= num) {
    if (b % 2 !== 0) {
      sum += b;
    }
    [a, b] = [b, a + b];
  }

  return sum;
}
```
