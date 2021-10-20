---
id: 5900f5021000cf542c510014
title: 'Problem 405: A rectangular tiling'
challengeType: 5
forumTopicId: 302073
dashedName: problem-405-a-rectangular-tiling
---

# --description--

We wish to tile a rectangle whose length is twice its width.

Let T(0) be the tiling consisting of a single rectangle.

For n > 0, let T(n) be obtained from T(n-1) by replacing all tiles in the following manner:

The following animation demonstrates the tilings T(n) for n from 0 to 5:

Let f(n) be the number of points where four tiles meet in T(n). For example, f(1) = 0, f(4) = 82 and f(109) mod 177 = 126897180.

Find f(10k) for k = 1018, give your answer modulo 177.

# --hints--

`euler405()` should return 237696125.

```js
assert.strictEqual(euler405(), 237696125);
```

# --seed--

## --seed-contents--

```js
function euler405() {

  return true;
}

euler405();
```

# --solutions--

```js
// solution required
```
