---
id: 594810f028c0303b75339acd
title: 'Abundant, deficient and perfect number classifications'
challengeType: 1
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classifications
---

# --description--

These define three classifications of positive integers based on their proper divisors.

Let $P(n)$ be the sum of the proper divisors of `n` where proper divisors are all positive integers `n` other than `n` itself.

If `P(n) < n` then `n` is classed as `deficient`

If `P(n) === n` then `n` is classed as `perfect`

If `P(n) > n` then `n` is classed as `abundant`

**Example**: `6` has proper divisors of `1`, `2`, and `3`. `1 + 2 + 3 = 6`, so `6` is classed as a perfect number.

# --instructions--

Implement a function that calculates how many of the integers from `1` to `num` (inclusive) are in each of the three classes. Output the result as an array in the following format `[deficient, perfect, abundant]`.

# --hints--

`getDPA` should be a function.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` should return an array.

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` return array should have a length of `3`.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` should return `[3758, 3, 1239]`.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` should return `[7508, 4, 2488]`.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` should return `[15043, 4, 4953]`.

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
