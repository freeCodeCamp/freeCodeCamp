---
id: 5900f4d61000cf542c50ffe9
title: 问题362：无广义因子
challengeType: 5
videoUrl: ''
dashedName: problem-362-squarefree-factors
---

# --description--

考虑数字54. 54可以用7种不同的方式分解为大于1：54,2×27,3×18,6×9,3×3×6,2×3×9和2×的一个或多个因子3×3×3。如果我们要求所有因子都是无平方的，则只剩下两种方式：3×3×6和2×3×3×3。

让我们调用Fsf（n）n可以计算为一个或多个大于1的无平方因子的方式的数量，因此Fsf（54）= 2。

对于k = 2到n，令S（n）为ΣFsf（k）。

S（100）= 193。

找到S（10 000 000 000）。

# --hints--

`euler362()`应该返回457895958010。

```js
assert.strictEqual(euler362(), 457895958010);
```

# --seed--

## --seed-contents--

```js
function euler362() {

  return true;
}

euler362();
```

# --solutions--

```js
// solution required
```
