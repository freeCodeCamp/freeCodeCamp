---
id: 5900f4be1000cf542c50ffd0
title: 'Problem 337: Totient Stairstep Sequences'
challengeType: 5
forumTopicId: 301995
dashedName: problem-337-totient-stairstep-sequences
---

# --description--

Let {a1, a2,..., an} be an integer sequence of length n such that:

a1 = 6

for all 1 ≤ i &lt; n : φ(ai) &lt; φ(ai+1) &lt; ai &lt; ai+11

Let S(N) be the number of such sequences with an ≤ N.

For example, S(10) = 4: {6}, {6, 8}, {6, 8, 9} and {6, 10}.

We can verify that S(100) = 482073668 and S(10 000) mod 108 = 73808307.

Find S(20 000 000) mod 108.

1 φ denotes Euler's totient function.

# --hints--

`euler337()` should return 85068035.

```js
assert.strictEqual(euler337(), 85068035);
```

# --seed--

## --seed-contents--

```js
function euler337() {

  return true;
}

euler337();
```

# --solutions--

```js
// solution required
```
