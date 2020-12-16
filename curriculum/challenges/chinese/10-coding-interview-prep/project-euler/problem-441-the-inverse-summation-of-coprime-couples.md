---
id: 5900f5261000cf542c510038
title: 问题441：互质夫妇的反向总和
challengeType: 5
videoUrl: ''
---

# --description--

对于整数M，我们将R（M）定义为满足所有这些条件的所有整数对p和q的1 /（p·q）之和：

1≤p&lt;q≤Mp +q≥Mp和q是互质的。

我们还将S（N）定义为R（i）的总和为2≤i≤N。我们可以验证S（2）= R（2）= 1/2，S（10）≈6.9147和S（100） ）≈58.2962。

找到S（107）。将您的答案四舍五入到小数点后四位。

# --hints--

`euler441()`应返回5000088.8395。

```js
assert.strictEqual(euler441(), 5000088.8395);
```

# --solutions--

