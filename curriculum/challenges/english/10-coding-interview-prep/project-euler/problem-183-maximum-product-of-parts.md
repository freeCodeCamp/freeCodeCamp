---
id: 5900f4231000cf542c50ff36
title: 'Problem 183: Maximum product of parts'
challengeType: 5
forumTopicId: 301819
dashedName: problem-183-maximum-product-of-parts
---

# --description--

Let N be a positive integer and let N be split into k equal parts, r = N/k, so that N = r + r + ... + r.

Let P be the product of these parts, P = r × r × ... × r = rk.

For example, if 11 is split into five equal parts, 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2, then P = 2.25 = 51.53632.

Let M(N) = Pmax for a given value of N.

It turns out that the maximum for N = 11 is found by splitting eleven into four equal parts which leads to Pmax = (11/4)4; that is, M(11) = 14641/256 = 57.19140625, which is a terminating decimal.

However, for N = 8 the maximum is achieved by splitting it into three equal parts, so M(8) = 512/27, which is a non-terminating decimal.

Let D(N) = N if M(N) is a non-terminating decimal and D(N) = -N if M(N) is a terminating decimal.

For example, ΣD(N) for 5 ≤ N ≤ 100 is 2438.

Find ΣD(N) for 5 ≤ N ≤ 10000.

# --hints--

`euler183()` should return 48861552.

```js
assert.strictEqual(euler183(), 48861552);
```

# --seed--

## --seed-contents--

```js
function euler183() {

  return true;
}

euler183();
```

# --solutions--

```js
// solution required
```
