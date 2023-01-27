---
id: 5900f4c11000cf542c50ffd3
title: 'Problem 341: selbstbeschreibende Golomb-Folge'
challengeType: 1
forumTopicId: 302000
dashedName: problem-341-golombs-self-describing-sequence
---

# --description--

The Golomb's self-describing sequence ($G(n)$) is the only nondecreasing sequence of natural numbers such that $n$ appears exactly $G(n)$ times in the sequence. The values of $G(n)$ for the first few $n$ are

$$\begin{array}{c}   n    & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10 & 11 & 12 & 13 & 14 & 15 & \ldots \\\\
  G(n) & 1 & 2 & 2 & 3 & 3 & 4 & 4 & 4 & 5 & 5  &  5 &  6 &  6 &  6 &  6 & \ldots \end{array}$$

You are given that $G({10}^3) = 86$, $G({10}^6) = 6137$.

You are also given that $\sum G(n^3) = 153\\,506\\,976$ for $1 ≤ n &lt; {10}^3$.

Find $\sum G(n^3)$ for $1 ≤ n &lt; {10}^6$.

# --hints--

`golombsSequence()` should return `56098610614277016`.

```js
assert.strictEqual(golombsSequence(), 56098610614277016);
```

# --seed--

## --seed-contents--

```js
function golombsSequence() {

  return true;
}

golombsSequence();
```

# --solutions--

```js
// solution required
```
