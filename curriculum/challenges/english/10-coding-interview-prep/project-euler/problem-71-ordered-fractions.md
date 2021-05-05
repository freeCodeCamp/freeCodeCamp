---
id: 5900f3b31000cf542c50fec6
title: 'Problem 71: Ordered fractions'
challengeType: 5
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

Consider the fraction, `n`/`d`, where `n` and `d` are positive integers. If `n`&lt;`d` and HCF(`n`,`d`)=1, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for `d` ≤ 8 in ascending order of size, we get:

<div style='text-align: center;'>1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, <strong>2/5</strong>, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</div>

It can be seen that 2/5 is the fraction immediately to the left of 3/7.

By listing the set of reduced proper fractions for `d` ≤ `limit` in ascending order of size, find the numerator of the fraction immediately to the left of $\frac{3}{7}$.

# --hints--

`orderedFractions(8)` should return a number.

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` should return `2`.

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` should return `2`.

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` should return `4283`.

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` should return `214283`.

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` should return `428570`.

```js
assert.strictEqual(orderedFractions(1000000), 428570);
```

# --seed--

## --seed-contents--

```js
function orderedFractions(limit) {

  return true;
}

orderedFractions(8);
```

# --solutions--

```js
// solution required
```
