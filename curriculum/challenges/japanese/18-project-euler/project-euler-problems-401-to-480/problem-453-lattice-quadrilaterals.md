---
id: 5900f5311000cf542c510044
title: '問題 453: 格子四角形'
challengeType: 1
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

単純四角形とは、4 つの相異なる頂点を持ち、平角を持たず、かつ自己交差していない多角形のことです。

$0 ≤ x ≤ m$, $0 ≤ y ≤ m$ を満たす座標 ($x$, $y$) の格子点を頂点とする単純四角形の個数を、$Q(m, n)$ とします。

例えば、下図のとおり $Q(2, 2) = 94$ です。

<img class="img-responsive center-block" alt="0 &le; x &le; m, 0 &le; y &le; n を満たす座標 ($x$, $y$) の格子点を頂点とする 94 個の四角形" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;" />

$Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$, $Q(123, 45) = 70\\,542\\,215\\,894\\,646$ であることも確認できます。

$Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$ を求めなさい。

# --hints--

`latticeQuadrilaterals()` は `104354107` を返す必要があります。

```js
assert.strictEqual(latticeQuadrilaterals(), 104354107);
```

# --seed--

## --seed-contents--

```js
function latticeQuadrilaterals() {

  return true;
}

latticeQuadrilaterals();
```

# --solutions--

```js
// solution required
```
