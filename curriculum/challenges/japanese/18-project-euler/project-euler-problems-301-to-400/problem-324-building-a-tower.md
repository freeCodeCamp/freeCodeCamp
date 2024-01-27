---
id: 5900f4b11000cf542c50ffc3
title: '問題 324: 塔を建設する'
challengeType: 1
forumTopicId: 301981
dashedName: problem-324-building-a-tower
---

# --description--

$3×3×n$ の塔を $2×1×1×1$ のブロックで埋める方法が何通りあるかを $f(n)$ で表します。 ブロックは自由に回転させることができますが、塔自体に回転、反転などを加えたものは区別してカウントされます。

次に例を示します ($q = 100\\,000\\,007$ の場合)。

$$\begin{align}   & f(2) = 229, \\\\
  & f(4) = 117\\,805, \\\\   & f(10)\bmod q = 96\\,149\\,360, \\\\
  & f({10}^3)\bmod q = 24\\,806\\,056, \\\\ & f({10}^6)\bmod q = 30\\,808\\,124. \end{align}$$

$f({10}^{10000})\bmod 100\\,000\\,007$ を求めなさい。

# --hints--

`buildingTower()` は `96972774` を返す必要があります。

```js
assert.strictEqual(buildingTower(), 96972774);
```

# --seed--

## --seed-contents--

```js
function buildingTower() {

  return true;
}

buildingTower();
```

# --solutions--

```js
// solution required
```
