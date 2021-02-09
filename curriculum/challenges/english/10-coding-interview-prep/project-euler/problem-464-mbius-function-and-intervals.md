---
id: 5900f53d1000cf542c51004f
title: 'Problem 464: Möbius function and intervals'
challengeType: 5
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

The Möbius function, denoted μ(n), is defined as:

μ(n) = (-1)ω(n) if n is squarefree (where ω(n) is the number of distinct prime factors of n)

μ(n) = 0 if n is not squarefree.

Let P(a,b) be the number of integers n in the interval \[a,b] such that μ(n) = 1. Let N(a,b) be the number of integers n in the interval \[a,b] such that μ(n) = -1. For example, P(2,10) = 2 and N(2,10) = 4.

Let C(n) be the number of integer pairs (a,b) such that: 1 ≤ a ≤ b ≤ n, 99·N(a,b) ≤ 100·P(a,b), and 99·P(a,b) ≤ 100·N(a,b).

For example, C(10) = 13, C(500) = 16676 and C(10 000) = 20155319.

Find C(20 000 000).

# --hints--

`euler464()` should return 198775297232878.

```js
assert.strictEqual(euler464(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function euler464() {

  return true;
}

euler464();
```

# --solutions--

```js
// solution required
```
