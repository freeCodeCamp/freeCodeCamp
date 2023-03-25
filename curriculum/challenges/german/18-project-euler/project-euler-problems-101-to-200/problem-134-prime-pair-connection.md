---
id: 5900f3f21000cf542c50ff05
title: 'Problem 134: Prime pair connection'
challengeType: 1
forumTopicId: 301762
dashedName: problem-134-prime-pair-connection
---

# --description--

Consider the consecutive primes $p_1 = 19$ and $p_2 = 23$. It can be verified that 1219 is the smallest number such that the last digits are formed by $p_1$ whilst also being divisible by $p_2$.

In fact, with the exception of $p_1 = 3$ and $p_2 = 5$, for every pair of consecutive primes, $p_2 > p_1$, there exist values of $n$ for which the last digits are formed by $p_1$ and $n$ is divisible by $p_2$. Let $S$ be the smallest of these values of $n$.

Find $\sum{S}$ for every pair of consecutive primes with $5 ≤ p_1 ≤ 1000000$.

# --hints--

`primePairConnection()` should return `18613426663617120`.

```js
assert.strictEqual(primePairConnection(), 18613426663617120);
```

# --seed--

## --seed-contents--

```js
function primePairConnection() {

  return true;
}

primePairConnection();
```

# --solutions--

```js
// solution required
```
