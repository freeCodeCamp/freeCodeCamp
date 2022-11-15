---
id: 5900f4ee1000cf542c510000
title: '問題 385: 三角形の中の楕円'
challengeType: 1
forumTopicId: 302049
dashedName: problem-385-ellipses-inside-triangles
---

# --description--

平面上の任意の三角形 $T$ について、$T$ に完全に内包され、かつ面積が最大である一意の楕円が存在することが分かっています。

<img class="img-responsive center-block" alt="ellipse completely inside a triangle" src="https://cdn.freecodecamp.org/curriculum/project-euler/ellipses-inside-triangles.png" style="background-color: white; padding: 10px;" />

与えられた $n$ について、次の両方を満たす三角形 $T$ を考えます。

-   $T$ の頂点は、絶対値が $n$ 以下である整数座標を持つ。
-   $T$ 内で最大の面積を持つ楕円の焦点 <sup>1</sup> は $(\sqrt{13}, 0)$ および $(-\sqrt{13}, 0)$ である。

$A(n)$ を、このような三角形の面積の総和とします。

例えば $n = 8$ の場合、このような三角形は 2 つあります。 それらの頂点は (-4,-3), (-4,3), (8,0) と (4,3), (4,-3), (-8,0) であり、いずれも三角形の面積は 36 です。 したがって、$A(8) = 36 + 36 = 72$ となります。

$A(10) = 252$, $A(100) = 34\\,632$, $A(1000) = 3\\,529\\,008$ であることを確認できます。

$A(1\\,000\\,000\\,000)$ を求めなさい。

<sup>1</sup> 楕円の焦点とは、楕円の境界上にあるすべての点 $P$ について $AP + PB$ が一定になるような 2 点 ($A$ と $B$) を指します。

# --hints--

`ellipsesInsideTriangles()` は `3776957309612154000` を返す必要があります。

```js
assert.strictEqual(ellipsesInsideTriangles(), 3776957309612154000);
```

# --seed--

## --seed-contents--

```js
function ellipsesInsideTriangles() {

  return true;
}

ellipsesInsideTriangles();
```

# --solutions--

```js
// solution required
```
