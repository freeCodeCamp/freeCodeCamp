---
id: 5900f4571000cf542c50ff6a
title: '問題 235: 算術幾何数列'
challengeType: 1
forumTopicId: 301879
dashedName: problem-235-an-arithmetic-geometric-sequence
---

# --description--

算術幾何数列 $u(k) = (900 - 3k)r^{k - 1}$ が与えられます。

$s(n) = \sum_{k=1 \ldots n} u(k)$ と定義します。

$s(5000) = -600\\,000\\,000\\,000$ となる $r$ の値を求めなさい。

回答は、四捨五入して小数第 12 位まで示すこと。

# --hints--

`arithmeticGeometricSequence()` は `1.002322108633` を返す必要があります。

```js
assert.strictEqual(arithmeticGeometricSequence(), 1.002322108633);
```

# --seed--

## --seed-contents--

```js
function arithmeticGeometricSequence() {

  return true;
}

arithmeticGeometricSequence();
```

# --solutions--

```js
// solution required
```
