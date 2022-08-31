---
id: 5a23c84252665b21eecc8041
title: Sum of a series
challengeType: 1
forumTopicId: 302333
dashedName: sum-of-a-series
---

# --description--

Compute the **n**<sup>th</sup> term of a <em>series</em>, i.e. the sum of the **n** first terms of the corresponding <em>sequence</em>. Informally this value, or its limit when **n** tends to infinity, is also called the *sum of the series*, thus the title of this task. For this task, use: $S_n = \displaystyle\sum_{k=1}^n \frac{1}{k^2}$.

# --instructions--

Write a function that take $a$ and $b$ as parameters and returns the sum of $a^{th}$ to $b^{th}$ members of the sequence.

# --hints--

`sum` should be a function.

```js
assert(typeof sum == 'function');
```

`sum(1, 100)` should return a number.

```js
assert(typeof sum(1, 100) == 'number');
```

`sum(1, 100)` should return `1.6349839001848923`.

```js
assert.equal(sum(1, 100), 1.6349839001848923);
```

`sum(33, 46)` should return `0.009262256361481223`.

```js
assert.equal(sum(33, 46), 0.009262256361481223);
```

`sum(21, 213)` should return `0.044086990748706555`.

```js
assert.equal(sum(21, 213), 0.044086990748706555);
```

`sum(11, 111)` should return `0.08619778593108679`.

```js
assert.equal(sum(11, 111), 0.08619778593108679);
```

`sum(1, 10)` should return `1.5497677311665408`.

```js
assert.equal(sum(1, 10), 1.5497677311665408);
```

# --seed--

## --seed-contents--

```js
function sum(a, b) {

}
```

# --solutions--

```js
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x);
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```
