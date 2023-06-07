---
id: 5900f5141000cf542c510027
title: 'Problem 423: Consecutive die throws'
challengeType: 1
forumTopicId: 302093
dashedName: problem-423-consecutive-die-throws
---

# --description--

Let $n$ be a positive integer.

A 6-sided die is thrown $n$ times. Let $c$ be the number of pairs of consecutive throws that give the same value.

For example, if $n = 7$ and the values of the die throws are (1, 1, 5, 6, 6, 6, 3), then the following pairs of consecutive throws give the same value:

$$\begin{align}   & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\ & (1, 1, 5, 6, \underline{6}, \underline{6}, 3) \end{align}$$

Therefore, $c = 3$ for (1, 1, 5, 6, 6, 6, 3).

Define $C(n)$ as the number of outcomes of throwing a 6-sided die $n$ times such that $c$ does not exceed $π(n)$.<sup>1</sup>

For example, $C(3) = 216$, $C(4) = 1290$, $C(11) = 361\\,912\\,500$ and $C(24) = 4\\,727\\,547\\,363\\,281\\,250\\,000$.

Define $S(L)$ as $\sum C(n)$ for $1 ≤ n ≤ L$.

For example, $S(50)\bmod 1\\,000\\,000\\,007 = 832\\,833\\,871$.

Find $S(50\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

<sup>1</sup> $π$ denotes the prime-counting function, i.e. $π(n)$ is the number of primes $≤ n$.

# --hints--

`consecutiveDieThrows()` should return `653972374`.

```js
assert.strictEqual(consecutiveDieThrows(), 653972374);
```

# --seed--

## --seed-contents--

```js
function consecutiveDieThrows() {

  return true;
}

consecutiveDieThrows();
```

# --solutions--

```js
// solution required
```
