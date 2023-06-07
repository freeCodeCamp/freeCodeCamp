---
id: 5900f4241000cf542c50ff37
title: '問題 184: 原点を内包する三角形'
challengeType: 1
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

座標の原点を円心とする半径 $r$ の円に内包される、整数座標を持つ点 $(x,y)$ (すなわち $x^2 + y^2 &lt; r^2$) の集合 $I_r$ を考えます。

半径が 2 の場合、$I_2$ には 9 つの点 (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1), (1,-1) が含まれます。 原点を内包し、かつ、3 つの頂点がすべて $I_2$ に含まれるような三角形は 8 つあります。 そのうち 2 つを下図に示します。他の 6 つはこれらを回転すると得られます。

<img class="img-responsive center-block" alt="座標の原点を円心とする半径 2 の円の中に、9 つの点と、2 つの三角形 ((-1,0), (0,1), (1,-1) と (-1,1), (0,-1), (1,1)) がある" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;" />

半径が 3 の場合、すべての頂点が $I_3$ に含まれ、かつ原点を内包するような三角形は 360 個あり、$I_5$ では 10600 個あります。

3 つ頂点がすべて $I_{105}$ に含まれ、かつ原点を内包するような三角形はいくつありますか。

# --hints--

`trianglesContainingOrigin()` should return `1725323624056`.

```js
assert.strictEqual(trianglesContainingOrigin(), 1725323624056);
```

# --seed--

## --seed-contents--

```js
function trianglesContainingOrigin() {

  return true;
}

trianglesContainingOrigin();
```

# --solutions--

```js
// solution required
```
