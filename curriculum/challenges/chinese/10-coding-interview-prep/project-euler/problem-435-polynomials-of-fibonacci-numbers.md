---
id: 5900f5201000cf542c510032
title: 问题435：斐波那契数的多项式
challengeType: 5
videoUrl: ''
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

斐波纳契数{fn，n≥0}被递归定义为fn = fn-1 + fn-2，基本情况为f0 = 0和f1 = 1。

对于0≤i≤n，将多项式{Fn，n≥0}定义为Fn（x）= ∑fixi。

例如，F7（x）= x + x2 + 2x3 + 3x4 + 5x5 + 8x6 + 13x7，而F7（11）= 268357683。

令n =1015。求和\[∑0≤x≤100 Fn（x）] mod 1307674368000（= 15！）。

# --hints--

`euler435()`252541322550。

```js
assert.strictEqual(euler435(), 252541322550);
```

# --seed--

## --seed-contents--

```js
function euler435() {

  return true;
}

euler435();
```

# --solutions--

```js
// solution required
```
