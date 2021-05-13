---
id: 5900f3bc1000cf542c50fecf
title: 'Problem 80: Square root digital expansion'
challengeType: 5
forumTopicId: 302194
dashedName: problem-80-square-root-digital-expansion
---

# --description--

It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.

The square root of two is `1.41421356237309504880...`, and the digital sum of the first one hundred decimal digits is `475`.

For the first `n` natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.

# --hints--

`sqrtDigitalExpansion(2)` should return a number.

```js
assert(typeof sqrtDigitalExpansion(2) === 'number');
```

`sqrtDigitalExpansion(2)` should return `475`.

```js
assert.strictEqual(sqrtDigitalExpansion(2), 475);
```

`sqrtDigitalExpansion(50)` should return `19543`.

```js
assert.strictEqual(sqrtDigitalExpansion(50), 19543);
```

`sqrtDigitalExpansion(100)` should return `40886`.

```js
assert.strictEqual(sqrtDigitalExpansion(100), 40886);
```

# --seed--

## --seed-contents--

```js
function sqrtDigitalExpansion(n) {

  return true;
}

sqrtDigitalExpansion(2);
```

# --solutions--

```js
// solution required
```
