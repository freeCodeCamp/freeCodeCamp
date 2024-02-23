---
id: 5900f4971000cf542c50ffaa
title: '問題 299: 3 つの相似三角形'
challengeType: 1
forumTopicId: 301951
dashedName: problem-299-three-similar-triangles
---

# --description--

整数座標を持つ、次の 4 つの点が選択されます。

$A(a, 0)$, $B(b, 0)$, $C(0, c)$, $D(0, d)$ ($0 &lt; a &lt; b$ かつ $0 &lt; c &lt; d$)

3 つの三角形 $ABP$, $CDP$, $BDP$ がすべて相似形になるように、同じく整数座標を持つ点 $P$ を線 $AC$ 上で選びます。

<img class="img-responsive center-block" alt="点 A, B, C, D, P で作られる 3 つの三角形 ABP, CDP, BDP" src="https://cdn.freecodecamp.org/curriculum/project-euler/three-similar-triangles.gif" style="background-color: white; padding: 10px;" />

$a = c$ のときのみ 3 つの三角形が相似形になり得るということは、容易に証明できます。

つまり、$a=c$ とすると、(整数座標を持つ) 点 $P$ が $AC$ 上に少なくとも 1 つ存在して 3 つの三角形 $ABP$, $CDP$, $BDP$ がすべて相似形になるような、三つ組数 ($a$, $b$, $d$) を探します。

例えば、$(a, b, d) = (2, 3, 4)$ の場合、点 $P(1, 1)$ が上の条件を満たすことを容易に確認できます。 注意点として、三つ組数 (2,3,4) と (2,4,3) は点 $P(1, 1)$ を共有しますが相異なる組とみなされます。

$b + d &lt; 100$ の場合、点 $P$ が存在するような相異なる三つ組数 ($a$, $b$, $d$) は 92 個存在します。

$b + d &lt; 100\\,000$ の場合、点 $P$ が存在するような相異なる三つ組数 ($a$, $b$, $d$) は 320471 個存在します。

$b + d &lt; 100\\,000\\,000$ の場合、点 $P$ が存在するような相異なる三つ組数 ($a$, $b$, $d$) はいくつ存在しますか。

# --hints--

`threeSimilarTriangles()` は `549936643` を返す必要があります。

```js
assert.strictEqual(threeSimilarTriangles(), 549936643);
```

# --seed--

## --seed-contents--

```js
function threeSimilarTriangles() {

  return true;
}

threeSimilarTriangles();
```

# --solutions--

```js
// solution required
```
