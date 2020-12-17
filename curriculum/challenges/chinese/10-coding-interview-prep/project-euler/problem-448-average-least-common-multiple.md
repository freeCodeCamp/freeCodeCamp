---
id: 5900f52c1000cf542c51003f
title: 问题448：平均最小公倍数
challengeType: 5
videoUrl: ''
---

# --description--

函数lcm（a，b）表示a和b的最小公倍数。设A（n）为1≤i≤n的lcm（n，i）的平均值。例如：A（2）=（2 + 2）/ 2 = 2且A（10）=（10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10）/ 10 = 32。

令S（n）=ΣA（k）为1≤k≤n。 S（100）= 122726。

找到S（99999999019）mod 999999017。

# --hints--

`euler448()`应该返回106467648。

```js
assert.strictEqual(euler448(), 106467648);
```

# --solutions--

