---
id: 5900f53a1000cf542c51004c
title: 'Problem 461: Almost Pi'
challengeType: 5
forumTopicId: 302136
dashedName: problem-461-almost-pi
---

# --description--

You are given the function `fn` for all non-negative integers k.

Remarkably, `fn(6, 200) + fn(75, 200) + fn(89, 200) + fn(226, 200)` = 3.141592… ≈ π.

In fact, it is the best approximation of π of the form `fn(a, 200) + fn(b, 200) + fn(c, 200) + fn(d, 200)`.

You are given the function `g`, which tells you the distance (or error) from pi using your `a`, `b`, `c`, `d`, and `n` values.

Find the correct `a`, `b`, `c`, and `d` values for any given `n` that minimizes the error returned from `g(a, b, c, d, n)`. Add together and return the squares of `a`, `b`, `c`, `d`.

You are given `almostPi(200)` = 62² + 75² + 89² + 226² = 64658.

# --hints--

`almostPi` should be a function.

```js
assert(typeof almostPi === 'function')
```

`almostPi` should return a number.

```js
assert(typeof almostPi(10000) === 'number')
```

`almostPi(200)` should return `64658`.

```js

assert.strictEqual(almostPi(200), 64658);
```

`almostPi(10000)` should return `159820276`.

```js
assert.strictEqual(almostPi(10000), 159820276);
```

# --seed--

## --seed-contents--

```js
const fn = (k, n) =>
  Math.exp(parseFloat(k)/parseFloat((n))) - 1;

const g = (a, b, c, d, n) =>
  Math.abs(fn(a,n) + fn(b,n) + fn(c,n) + fn(d,n) - Math.PI);

function almostPi(n) {
  
  return true;
}
```

# --solutions--

```js
// solution required
```
