---
id: 5900f5061000cf542c510017
title: 问题409：Nim Extreme
challengeType: 5
videoUrl: ''
---

# --description--

设n是正整数。考虑nim位置：有n个非空桩。每堆的尺寸小于2n。没有两个桩具有相同的尺寸。设W（n）是满足上述条件的获胜nim位置的数量（如果第一个玩家具有获胜策略，则获胜的位置）。例如，W（1）= 1，W（2）= 6，W（3）= 168，W（5）= 19764360，W（100）mod 1 000 000 007 = 384777056。

求W（10 000 000）mod 1 000 000 007。

# --hints--

`euler409()`应该返回253223948。

```js
assert.strictEqual(euler409(), 253223948);
```

# --solutions--

