---
id: 5900f5271000cf542c51003a
title: 'Problem 443: GCD sequence'
challengeType: 5
forumTopicId: 302115
dashedName: problem-443-gcd-sequence
---

# --description--

Let g(n) be a sequence defined as follows: g(4) = 13, g(n) = g(n-1) + gcd(n, g(n-1)) for n > 4.

The first few values are:

n 4567891011121314151617181920... g(n) 1314161718272829303132333451545560...

<!-- TODO Use MathJax -->

You are given that g(1 000) = 2524 and g(1 000 000) = 2624152.

Find g(1015).

# --hints--

`euler443()` should return 2744233049300770.

```js
assert.strictEqual(euler443(), 2744233049300770);
```

# --seed--

## --seed-contents--

```js
function euler443() {

  return true;
}

euler443();
```

# --solutions--

```js
// solution required
```
