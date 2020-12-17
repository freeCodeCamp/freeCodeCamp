---
id: 5900f39e1000cf542c50feb1
title: 问题50：连续的总和
challengeType: 5
videoUrl: ''
---

# --description--

素数41可以写成六个连续素数的总和：41 = 2 + 3 + 5 + 7 + 11 + 13这是连续素数的最长和，它加到低于一百的素数。连续素数低于1000的连续素数加上一个素数，包含21个项，等于953.哪个素数低于一百万，可以写成最连续素数的总和？

# --hints--

`consecutivePrimeSum(1000)`应该返回953。

```js
assert.strictEqual(consecutivePrimeSum(1000), 953);
```

`consecutivePrimeSum(1000000)`应该返回997651。

```js
assert.strictEqual(consecutivePrimeSum(1000000), 997651);
```

# --solutions--

