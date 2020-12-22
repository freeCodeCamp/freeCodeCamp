---
id: 5900f4be1000cf542c50ffd0
title: 问题337欧拉序列阶梯
challengeType: 5
videoUrl: ''
---

# --description--

令{a1，a2，...，an}为长度为n的整数序列，使得：a1 = 6，对于所有1≤i&lt;n：φ（ai）&lt;φ（ai + 1）&lt;ai &lt;ai + 11令S（N）为具有≤N的这种序列的数目。例如，S（10）= 4：{6}，{6,8}，{6,8,9}和{6,10}。我们可以验证S（100）= 482073668和S（10 000）mod 108 = 73808307。

找到S（20 000 000）mod 108。

1φ表示欧拉的函数。

# --hints--

`euler337()`应该返回85068035。

```js
assert.strictEqual(euler337(), 85068035);
```

# --solutions--

