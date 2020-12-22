---
id: 5900f46b1000cf542c50ff7d
title: 问题254：数字因子的总和
challengeType: 5
videoUrl: ''
---

# --description--

将f（n）定义为n的数字的阶乘的总和。例如，f（342）= 3！ + 4！ + 2！ = 32。

将sf（n）定义为f（n）的数字之和。所以sf（342）= 3 + 2 = 5。

将g（i）定义为最小的正整数n，使得sf（n）= i。虽然sf（342）是5，但sf（25）也是5，并且可以证实g（5）是25。

将sg（i）定义为g（i）的数字之和。所以sg（5）= 2 + 5 = 7。

此外，可以证实g（20）是267并且1≤i≤20的Σsg（i）是156。

什么是Σsg（i）1≤i≤150？

# --hints--

`euler254()`应该返回8184523820510。

```js
assert.strictEqual(euler254(), 8184523820510);
```

# --solutions--

