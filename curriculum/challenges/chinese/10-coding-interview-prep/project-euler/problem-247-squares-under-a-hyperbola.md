---
id: 5900f4641000cf542c50ff76
title: 问题247：双曲线下的正方形
challengeType: 5
videoUrl: ''
dashedName: problem-247-squares-under-a-hyperbola
---

# --description--

考虑受1≤x且0≤y≤1/ x约束的区域。

设S1是可以适应曲线的最大正方形。设S2是适合其余区域的最大正方形，依此类推。设Sn的指数是表示Sn左边的方格数和Sn以下的方格数的对（左下）。

该图显示了一些用数字标记的方格。 S2左边有一个正方形，下面没有正方形，所以S2的索引是（1,0）。可以看出，S32的索引是（1,1），也是S50的索引。 50是Sn的指数为（1,1）的最大n。

Sn指数为（3,3）的最大n是多少？

# --hints--

`euler247()`应该返回782252。

```js
assert.strictEqual(euler247(), 782252);
```

# --seed--

## --seed-contents--

```js
function euler247() {

  return true;
}

euler247();
```

# --solutions--

```js
// solution required
```
