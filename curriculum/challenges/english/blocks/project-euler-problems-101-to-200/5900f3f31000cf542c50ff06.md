---
id: 5900f3f31000cf542c50ff06
title: 'Problem 135: Same differences'
challengeType: 1
forumTopicId: 301763
dashedName: problem-135-same-differences
---

# --description--

Given the positive integers, $x$, $y$, and $z$, are consecutive terms of an arithmetic progression, the least value of the positive integer, $n$, for which the equation, $x^2 − y^2 − z^2 = n$, has exactly two solutions is $n = 27$:

$$34^2 − 27^2 − 20^2 = 12^2 − 9^2 − 6^2 = 27$$

It turns out that $n = 1155$ is the least value which has exactly ten solutions.

How many values of $n$ less than one million have exactly ten distinct solutions?

# --hints--

`sameDifferences()` should return `4989`.

```js
assert.strictEqual(sameDifferences(), 4989);
```

# --seed--

## --seed-contents--

```js
function sameDifferences() {

  return true;
}

sameDifferences();
```

# --solutions--

```js
// solution required
```
