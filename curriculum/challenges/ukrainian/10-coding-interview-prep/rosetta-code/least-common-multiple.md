---
id: 5a23c84252665b21eecc7edf
title: Найменше спільне кратне
challengeType: 1
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

Найменше спільне кратне 12 та 18 це 36, оскільки 12 - коефіцієнт (12 × 3 = 36), та 18 - коефіцієнт (18 × 2 = 36), і немає цілого додатного числа менше ніж 36, яке мало б обидва коефіцієнти. As a special case, if either $m$ or $n$ is zero, then the least common multiple is zero. One way to calculate the least common multiple is to iterate all the multiples of $m$, until you find one that is also a multiple of $n$. If you already have $gcd$ for <a href="https://rosettacode.org/wiki/Greatest_common_divisor" target="_blank" rel="noopener noreferrer nofollow">greatest common divisor</a>, then this formula calculates $lcm$.

$$ \\operatorname{lcm}(m, n) = \\frac{|m \\times n|}{\\operatorname{gcd}(m, n)} $$

# --instructions--

Compute the least common multiple of an array of integers. Given *m* and *n*, the least common multiple is the smallest positive integer that has both *m* and *n* as factors.

# --hints--

`LCM` має бути функцією.

```js
assert(typeof LCM == 'function');
```

`LCM([2, 4, 8])` має повертати число.

```js
assert(typeof LCM([2, 4, 8]) == 'number');
```

`LCM([2, 4, 8])` має повертати `8`.

```js
assert.equal(LCM([2, 4, 8]), 8);
```

`LCM([4, 8, 12])` має повертати `24`.

```js
assert.equal(LCM([4, 8, 12]), 24);
```

`LCM([3, 4, 5, 12, 40])` має повертати `120`.

```js
assert.equal(LCM([3, 4, 5, 12, 40]), 120);
```

`LCM([11, 33, 90])` має повертати `990`.

```js
assert.equal(LCM([11, 33, 90]), 990);
```

`LCM([-50, 25, -45, -18, 90, 447])` має повертати `67050`.

```js
assert.equal(LCM([-50, 25, -45, -18, 90, 447]), 67050);
```

# --seed--

## --seed-contents--

```js
function LCM(A) {

}
```

# --solutions--

```js
function LCM(A) {
  var n = A.length,
    a = Math.abs(A[0]);
  for (var i = 1; i < n; i++) {
    var b = Math.abs(A[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * A[i]) / (a + b);
  }
  return a;
}
```
