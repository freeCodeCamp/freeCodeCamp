---
id: 5900f4931000cf542c50ffa5
title: 'Problem 294: Sum of digits - experience #23'
challengeType: 1
forumTopicId: 301946
dashedName: problem-294-sum-of-digits---experience-23
---

# --description--

For a positive integer $k$, define $d(k)$ as the sum of the digits of $k$ in its usual decimal representation. Thus $d(42) = 4 + 2 = 6$.

For a positive integer $n$, define $S(n)$ as the number of positive integers $k &lt; {10}^n$ with the following properties:

- $k$ is divisible by 23 and,
- $d(k) = 23$.

You are given that $S(9) = 263\\,626$ and $S(42) = 6\\,377\\,168\\,878\\,570\\,056$.

Find $S({11}^{12})$ and give your answer $\bmod {10}^9$.

# --hints--

`experience23()` should return `789184709`.

```js
assert.strictEqual(experience23(), 789184709);
```

# --seed--

## --seed-contents--

```js
function experience23() {

  return true;
}

experience23();
```

# --solutions--

```js
// solution required
```
