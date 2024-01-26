---
id: 5a23c84252665b21eecc7edf
title: Найменше спільне кратне
challengeType: 1
forumTopicId: 302301
dashedName: least-common-multiple
---

# --description--

The least common multiple of 12 and 18 is 36, because 12 is a factor (12 × 3 = 36), and 18 is a factor (18 × 2 = 36), and there is no positive integer less than 36 that has both factors. As a special case, if either $m$ or $n$ is zero, then the least common multiple is zero. One way to calculate the least common multiple is to iterate all the multiples of $m$, until you find one that is also a multiple of $n$. If you already have $gcd$ for <a href="https://rosettacode.org/wiki/Greatest_common_divisor" target="_blank" rel="noopener noreferrer nofollow">greatest common divisor</a>, then this formula calculates $lcm$.

$ \\operatorname{нск}(m, n) = \\frac{|m \\times n|}{\\operatorname{нсд}(m, n)} $$

# --instructions--

Обчисліть найменше спільне кратне масиву цілих чисел. З огляду на значення *m* та *n*, найменше спільне кратне — це найменше позитивне ціле число, яке має як *m*, так і *n* у якості множників.

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
