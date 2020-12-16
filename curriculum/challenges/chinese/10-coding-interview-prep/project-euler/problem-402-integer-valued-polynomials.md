---
id: 5900f4ff1000cf542c510011
title: 问题402：整数值多项式
challengeType: 5
videoUrl: ''
---

# --description--

可以证明，对于每个整数n，多项式n4 + 4n3 + 2n2 + 5n是6的倍数。还可以显示6是满足该属性的最大整数。

将M（a，b，c）定义为最大m，使得n4 + an3 + bn2 + cn是所有整数n的m的倍数。例如，M（4,2,5）= 6。

此外，将S（N）定义为所有0 &lt;a，b，c≤N的M（a，b，c）之和。

我们可以验证S（10）= 1972和S（10000）= 2024258331114。

设Fk为斐波纳契数列：对于k≥2，F0 = 0，F1 = 1且Fk = Fk-1 + Fk-2。

求最高9位数为ΣS（Fk）为2≤k≤1234567890123。

# --hints--

`euler402()`应返回356019862。

```js
assert.strictEqual(euler402(), 356019862);
```

# --solutions--

