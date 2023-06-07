---
id: 5900f4ae1000cf542c50ffbf
title: 'Problem 320: Factorials divisible by a huge integer'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

Let $N(i)$ be the smallest integer $n$ such that $n!$ is divisible by $(i!)^{1234567890}$

Let $S(u) = \sum N(i)$ for $10 ≤ i ≤ u$.

$S(1000)=614\\,538\\,266\\,565\\,663$.

Find $S(1\\,000\\,000)\bmod {10}^{18}$.

# --hints--

`divisibleByHugeInteger()` should return `278157919195482660`.

```js
assert.strictEqual(divisibleByHugeInteger(), 278157919195482660);
```

# --seed--

## --seed-contents--

```js
function divisibleByHugeInteger() {

  return true;
}

divisibleByHugeInteger();
```

# --solutions--

```js
// solution required
```
