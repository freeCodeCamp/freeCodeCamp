---
id: 5900f4521000cf542c50ff64
title: 问题229：使用正方形的四个表示
challengeType: 5
videoUrl: ''
dashedName: problem-229-four-representations-using-squares
---

# --description--

考虑数字3600.这是非常特别的，因为

3600 = 482 + 362 3600 = 202 + 2×402 3600 = 302 + 3×302 3600 = 452 + 7×152

类似地，我们发现88201 = 992 + 2802 = 2872 + 2×542 = 2832 + 3×522 = 1972 + 7×842。

在1747年，欧拉证明哪些数字可以表示为两个正方形的总和。我们感兴趣的是数字n，它承认以下四种类型的表示：

n = a12 + b12n = a22 + 2 b22n = a32 + 3 b32n = a72 + 7 b72，

其中ak和bk是正整数。

有75373这样的数字不超过107。

有多少这样的数字不超过2×109？

# --hints--

`euler229()`应该返回11325263。

```js
assert.strictEqual(euler229(), 11325263);
```

# --seed--

## --seed-contents--

```js
function euler229() {

  return true;
}

euler229();
```

# --solutions--

```js
// solution required
```
