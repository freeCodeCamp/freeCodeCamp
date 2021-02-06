---
id: 5900f4621000cf542c50ff74
title: 'Problem 245: Coresilience'
challengeType: 5
forumTopicId: 301892
dashedName: problem-245-coresilience
---

# --description--

We shall call a fraction that cannot be cancelled down a resilient fraction. Furthermore we shall define the resilience of a denominator, R(d), to be the ratio of its proper fractions that are resilient; for example, R(12) = 4⁄11.

The resilience of a number d > 1 is then φ(d)d − 1 , where φ is Euler's totient function. We further define the coresilience of a number n > 1 as C(n)= n − φ(n)n − 1. The coresilience of a prime p is C(p) = 1p − 1. Find the sum of all composite integers 1 &lt; n ≤ 2×1011, for which C(n) is a unit fraction.

# --hints--

`euler245()` should return 288084712410001.

```js
assert.strictEqual(euler245(), 288084712410001);
```

# --seed--

## --seed-contents--

```js
function euler245() {

  return true;
}

euler245();
```

# --solutions--

```js
// solution required
```
