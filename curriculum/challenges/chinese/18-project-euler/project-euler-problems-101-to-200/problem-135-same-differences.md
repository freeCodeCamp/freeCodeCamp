---
id: 5900f3f31000cf542c50ff06
title: '问题 135：相同的差异'
challengeType: 1
forumTopicId: 301763
dashedName: problem-135-same-differences
---

# --description--

Given the positive integers, $x$, $y$, and $z$, are consecutive terms of an arithmetic progression, the least value of the positive integer, $n$, for which the equation, $x^2 − y^2 − z^2 = n$, has exactly two solutions is $n = 27$:

$$34^2 − 27^2 − 20^2 = 12^2 − 9^2 − 6^2 = 27$$

事实证明，$n = 1155$ 是恰好有十个解的最小值。

有多少 $n$ 小于 100 万的值恰好有 10 个不同的解？

# --hints--

`sameDifferences()` 应该返回 `4989`。

```js
assert.strictEqual(sameDifferences(), 4989);
```

# --seed--

## --seed-contents--

```js
function sameDifferences() {

  return true;
}

sameDifferences();
```

# --solutions--

```js
// solution required
```
