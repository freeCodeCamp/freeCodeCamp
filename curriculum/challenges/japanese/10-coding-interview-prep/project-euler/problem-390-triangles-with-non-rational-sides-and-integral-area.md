---
id: 5900f4f21000cf542c510005
title: '問題 390: 非有理的な辺と整数の面積を持つ三角形'
challengeType: 1
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

辺長が $\sqrt{5}$, $\sqrt{65}$, $\sqrt{68} $ である三角形について考えます。 この三角形の面積が 9 であることが分かります。

$n$ を超えない整数の面積を持ち、3 辺が $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$, $\sqrt{b^2 + c^2}$ (ここで $b$ と $c$ は正の整数) である三角形について、それらすべての面積の和を $S(n)$ とします。

例に挙げた三角形では $b = 2$, $c = 8$ です。

$S({10}^6) = 18\\,018\\,206$ です。

$S({10}^{10})$ を求めなさい。

# --hints--

`nonRationalSidesAndIntegralArea()` は `2919133642971` を返す必要があります。

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

# --seed--

## --seed-contents--

```js
function nonRationalSidesAndIntegralArea() {

  return true;
}

nonRationalSidesAndIntegralArea();
```

# --solutions--

```js
// solution required
```
