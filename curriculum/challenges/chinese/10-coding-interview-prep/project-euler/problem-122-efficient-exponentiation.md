---
id: 5900f3e61000cf542c50fef9
title: 问题122：有效取幂
challengeType: 5
videoUrl: ''
dashedName: problem-122-efficient-exponentiation
---

# --description--

最简单的计算n15的方法需要十四次乘法：n×n×...×n = n15但是使用“二进制”方法可以在六次乘法中计算它：n×n = n2n2×n2 = n4n4×n4 = n8n8 ×n4 = n12n12×n2 = n14n14×n = n15然而，只能在五次乘法中计算它：n×n = n2n2×n = n3n3×n3 = n6n6×n6 = n12n12×n3 = n15我们将定义m （k）是计算nk的最小乘法数;例如m（15）= 5.对于1≤k≤200，找到Σm（k）。

# --hints--

`euler122()`应返回1582。

```js
assert.strictEqual(euler122(), 1582);
```

# --seed--

## --seed-contents--

```js
function euler122() {

  return true;
}

euler122();
```

# --solutions--

```js
// solution required
```
