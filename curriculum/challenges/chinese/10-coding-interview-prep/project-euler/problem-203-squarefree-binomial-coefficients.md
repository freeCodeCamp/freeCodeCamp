---
id: 5900f4381000cf542c50ff4a
title: 问题203：无平方二项系数
challengeType: 5
videoUrl: ''
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

二项式系数nCk可以以三角形排列，Pascal的三角形，如下所示：

111121133114641151010511615201561172135352171 .........

可以看出Pascal三角形的前八行包含十二个不同的数字：1,2,3,4,5,6,7,10,15,20,21和35。

如果没有素数的平方除n，则正整数n称为squarefree。在Pascal三角形的前八行中的十二个不同数字中，除了4和20之外的所有数字都是无方形的。前八行中不同的无平方数字的总和为105。

找到Pascal三角形的前51行中不同的无平方数字的总和。

# --hints--

`euler203()`应该返回34029210557338。

```js
assert.strictEqual(euler203(), 34029210557338);
```

# --seed--

## --seed-contents--

```js
function euler203() {

  return true;
}

euler203();
```

# --solutions--

```js
// solution required
```
