---
id: 5900f4621000cf542c50ff74
title: 问题245：Coresilience
challengeType: 5
videoUrl: ''
---

# --description--

我们将称一个无法取消弹性部分的分数。此外，我们将分母R（d）的弹性定义为具有弹性的适当分数的比率;例如，R（12）= 4/11。

数d> 1的弹性则为φ（d）d-1，其中φ是欧拉的函数。我们进一步定义了n> 1的核心，即C（n）= n - φ（n）n - 1.素数p的核心是C（p）= 1p - 1.找出所有复合整数的总和1 &lt;n≤2×1011，其中C（n）是单位分数。

# --hints--

`euler245()`应该返回288084712410001。

```js
assert.strictEqual(euler245(), 288084712410001);
```

# --solutions--

