---
id: 5900f4ae1000cf542c50ffbf
title: '问题320：可被一个巨大整数整除的阶乘'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

Let $N(i)$ be the smallest integer $n$ such that $n!$ is divisible by $(i!)^{1234567890}$

令$S(u) = \sum N(i)$，且$10 ≤ i ≤ u$。

$S(1000)=614\\,538\\,266\\,565\\,663$。

找出$S(1\\,000\\,000)\对{10}^{18}$取模后的结果。

# --hints--

`divisibleByHugeInteger()`应该返回`278157919195482660`。

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
