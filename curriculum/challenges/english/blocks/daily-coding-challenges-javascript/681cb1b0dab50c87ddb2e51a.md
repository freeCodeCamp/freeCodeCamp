---
id: 681cb1b0dab50c87ddb2e51a
title: "JavaScript Challenge 9: Sum of Squares"
challengeType: 28
dashedName: javascript-challenge-9
---

# --description--

Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.

# --hints--

`sumOfSquares(5)` should return `55`.

```js
assert.equal(sumOfSquares(5), 55);
```

`sumOfSquares(10)` should return `385`.

```js
assert.equal(sumOfSquares(10), 385);
```

`sumOfSquares(25)` should return `5525`.

```js
assert.equal(sumOfSquares(25), 5525);
```

`sumOfSquares(500)` should return `41791750`.

```js
assert.equal(sumOfSquares(500), 41791750);
```

`sumOfSquares(1000)` should return `333833500`.

```js
assert.equal(sumOfSquares(1000), 333833500);
```

# --seed--

## --seed-contents--

```js
function sumOfSquares(n) {

  return n;
}
```

# --solutions--

```js
function sumOfSquares(n) {
  let total = 1;
  for(let i = 2; i <= n; i++) {
      total += i * i;
  }
  return total;
}
```
