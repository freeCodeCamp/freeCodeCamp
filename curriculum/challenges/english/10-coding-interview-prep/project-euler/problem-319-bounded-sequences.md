---
id: 5900f4ab1000cf542c50ffbe
title: 'Problem 319: Bounded Sequences'
challengeType: 5
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

Let x1, x2,..., xn be a sequence of length n such that:

x1 = 2

for all 1 &lt; i ≤ n : xi-1 &lt; xi

for all i and j with 1 ≤ i, j ≤ n : (xi) j &lt; (xj + 1)i

There are only five such sequences of length 2, namely: {2,4}, {2,5}, {2,6}, {2,7} and {2,8}. There are 293 such sequences of length 5; three examples are given below: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Let t(n) denote the number of such sequences of length n. You are given that t(10) = 86195 and t(20) = 5227991891.

Find t(1010) and give your answer modulo 109.

# --hints--

`euler319()` should return 268457129.

```js
assert.strictEqual(euler319(), 268457129);
```

# --seed--

## --seed-contents--

```js
function euler319() {

  return true;
}

euler319();
```

# --solutions--

```js
// solution required
```
