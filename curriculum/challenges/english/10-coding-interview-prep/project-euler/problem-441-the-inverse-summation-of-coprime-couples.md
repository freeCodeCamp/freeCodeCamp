---
id: 5900f5261000cf542c510038
title: 'Problem 441: The inverse summation of coprime couples'
challengeType: 5
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

For an integer M, we define R(M) as the sum of 1/(p·q) for all the integer pairs p and q which satisfy all of these conditions:

1 ≤ p &lt; q ≤ M p + q ≥ M p and q are coprime.

We also define S(N) as the sum of R(i) for 2 ≤ i ≤ N. We can verify that S(2) = R(2) = 1/2, S(10) ≈ 6.9147 and S(100) ≈ 58.2962.

Find S(107). Give your answer rounded to four decimal places.

# --hints--

`euler441()` should return 5000088.8395.

```js
assert.strictEqual(euler441(), 5000088.8395);
```

# --seed--

## --seed-contents--

```js
function euler441() {

  return true;
}

euler441();
```

# --solutions--

```js
// solution required
```
