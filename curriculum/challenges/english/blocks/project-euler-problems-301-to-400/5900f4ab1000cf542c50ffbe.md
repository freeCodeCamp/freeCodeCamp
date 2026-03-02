---
id: 5900f4ab1000cf542c50ffbe
title: 'Problem 319: Bounded Sequences'
challengeType: 1
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

Let $x_1, x_2, \ldots, x_n$ be a sequence of length $n$ such that:

- $x_1 = 2$
- for all $1 &lt; i ≤ n : x_{i - 1} &lt; x_i$
- for all $i$ and $j$ with $1 ≤ i, j ≤ n : {(x_i)}^j &lt; {(x_j + 1)}^i$

There are only five such sequences of length 2, namely: {2,4}, {2,5}, {2,6}, {2,7} and {2,8}. There are 293 such sequences of length 5; three examples are given below: {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181}.

Let $t(n)$ denote the number of such sequences of length $n$. You are given that $t(10) = 86195$ and $t(20) = 5227991891$.

Find $t({10}^{10})$ and give your answer modulo $10^9$.

# --hints--

`boundedSequences()` should return `268457129`.

```js
assert.strictEqual(boundedSequences(), 268457129);
```

# --seed--

## --seed-contents--

```js
function boundedSequences() {

  return true;
}

boundedSequences();
```

# --solutions--

```js
// solution required
```
