---
id: 5900f54b1000cf542c51005d
title: 'Problem 479: Roots on the Rise'
challengeType: 5
forumTopicId: 302156
dashedName: problem-479-roots-on-the-rise
---

# --description--

Let ak, bk, and ck represent the three solutions (real or complex numbers) to the expression 1/x = (k/x)2(k+x2) - kx.

For instance, for k = 5, we see that {a5, b5, c5} is approximately {5.727244, -0.363622+2.057397i, -0.363622-2.057397i}.

Let S(n) = Σ (ak+bk)p(bk+ck)p(ck+ak)p for all integers p, k such that 1 ≤ p, k ≤ n.

Interestingly, S(n) is always an integer. For example, S(4) = 51160.

Find S(106) modulo 1 000 000 007.

# --hints--

`euler479()` should return 191541795.

```js
assert.strictEqual(euler479(), 191541795);
```

# --seed--

## --seed-contents--

```js
function euler479() {

  return true;
}

euler479();
```

# --solutions--

```js
// solution required
```
