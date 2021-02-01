---
id: 5900f5081000cf542c51001a
title: 问题412：Gnomon编号
challengeType: 5
videoUrl: ''
dashedName: problem-412-gnomon-numbering
---

# --description--

对于整数m，n（0≤n&lt;m），令L（m，n）为m×m网格，其中右上n×n网格被移除。

例如，L（5,3）看起来像这样：

我们希望用连续的整数1,2,3 ......对L（m，n）的每个单元进行编号，使得每个单元格中的数字小于它下面和左边的数字。

例如，这里有两个有效的L（5,3）编号：

设LC（m，n）为L（m，n）的有效编号。可以证实LC（3,0）= 42，LC（5,3）= 250250，LC（6,3）= 406029023400和LC（10,5）mod 76543217 = 61251715。

找到LC（10000,5000）mod 76543217。

# --hints--

`euler412()`应该返回38788800。

```js
assert.strictEqual(euler412(), 38788800);
```

# --seed--

## --seed-contents--

```js
function euler412() {

  return true;
}

euler412();
```

# --solutions--

```js
// solution required
```
