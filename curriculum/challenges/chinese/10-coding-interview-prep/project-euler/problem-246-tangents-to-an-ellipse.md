---
id: 5900f4621000cf542c50ff75
title: 问题246：切线到椭圆
challengeType: 5
videoUrl: ''
---

# --description--

椭圆的定义是：给定一个圆心c，其中心为M，半径为r，点G为d（G，M）

椭圆点的构造如下所示。

给定的是M（-2000,1500）和G（8000,1500）。给定也是具有中心M和半径15000的圆c。与G和c等距的点的轨迹形成椭圆e。从外部的点P开始，绘制两个切线t1和t2到椭圆。让t1和t2接触椭圆的点为R和S.

对于多少格点P，角度RPS是否大于45度？

# --hints--

`euler246()`应该返回810834388。

```js
assert.strictEqual(euler246(), 810834388);
```

# --solutions--

