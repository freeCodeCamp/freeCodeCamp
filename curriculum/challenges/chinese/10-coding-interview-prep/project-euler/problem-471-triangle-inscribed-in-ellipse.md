---
id: 5900f5431000cf542c510056
title: 问题471：以椭圆形刻的三角形
challengeType: 5
videoUrl: ''
---

# --description--

三角形ΔABC刻在椭圆中，方程为$ \\ frac {x ^ 2} {a ^ 2} + \\ frac {y ^ 2} {b ^ 2} = 1 $，0 &lt;2b &lt;a，a和b整数。设r（a，b）为内圆（2b，0）时A的圆周半径，A有坐标$ \\ left（\\ frac a 2，\\ frac {\\ sqrt 3} 2 b \\ right） $。例如，r（3,1）= 1/2，r（6,2）= 1，r（12,3）= 2。

设$ G（n）= \\ sum *{a = 3} ^ n \\ sum* {b = 1} ^ {\\ lfloor \\ frac {a - 1} 2 \\ rfloor} r（a，b）$给你G（ 10）= 20.59722222，G（100）= 19223.60980（舍入为10位有效数字）。找到G（1011）。以科学计数法给出答案四舍五入到10位有效数字。使用小写e分隔尾数和指数。对于G（10），答案应该是2.059722222e1。

# --hints--

`euler471()`应返回1.895093981e + 31。

```js
assert.strictEqual(euler471(), 1.895093981e31);
```

# --solutions--

