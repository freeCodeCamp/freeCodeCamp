---
id: 5900f5231000cf542c510034
title: 问题438：多项式方程解的整数部分
challengeType: 5
videoUrl: ''
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

对于整数的n元组t =（a1，...，an），let（x1，...，xn）是多项式方程xn + a1xn-1 + a2xn-2 + ... +的解。 an-1x + an = 0。

考虑以下两个条件：x1，...，xn都是真实的。如果x1，...，xn被排序，则⌊xi⌋= i，1≤i≤n。 （⌊·⌋：地板功能。）

在n = 4的情况下，有12个n元组的整数满足两个条件。我们将S（t）定义为t中整数绝对值的总和。对于n = 4，我们可以验证满足两个条件的所有n元组t的ΣS（t）= 2087。

找到ΣS（t）为n = 7。

# --hints--

`euler438()`应该返回2046409616809。

```js
assert.strictEqual(euler438(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function euler438() {

  return true;
}

euler438();
```

# --solutions--

```js
// solution required
```
