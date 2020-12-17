---
id: 5900f4e41000cf542c50fff5
title: 问题375：最小子序列
challengeType: 5
videoUrl: ''
---

# --description--

设Sn是由以下伪随机数发生器产生的整数序列：S0 = 290797 Sn + 1 = Sn2 mod 50515093

设A（i，j）是i≤j的数字Si，Si + 1，...，Sj中的最小值。设M（N）=ΣA（i，j）为1≤i≤j≤N。我们可以验证M（10）= 432256955和M（10 000）= 3264567774119。

找到M（2 000 000 000）。

# --hints--

`euler375()`应该返回7435327983715286000。

```js
assert.strictEqual(euler375(), 7435327983715286000);
```

# --solutions--

