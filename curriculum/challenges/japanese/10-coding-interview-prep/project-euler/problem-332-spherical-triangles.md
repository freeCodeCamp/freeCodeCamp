---
id: 5900f4b91000cf542c50ffcb
title: '問題 332: 球面三角形'
challengeType: 1
forumTopicId: 301990
dashedName: problem-332-spherical-triangles
---

# --description--

球面三角形は、3 つの頂点で 2 本ずつ交差する 3 本の大円弧によって球面上に作られる図形です。

<img class="img-responsive center-block" alt="球面に形成された球面三角形" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;" />

中心 (0,0,0) と半径 $r$ を持つ球を $C(r)$ とします。

整数座標を持つ $C(r)$ の球面上にある点の集合を $Z(r)$ とします。

頂点 $Z(r)$ を持つ球面三角形の集合を $T(r)$ とします。 縮退した球面三角形 (同一の大円弧上の 3 点で形成されるもの) は $T(r)$ に含まれ<u>ません</u>。

$T(r)$ の中で最も小さい球面三角形について、その面積を $A(r)$ とします。

例えば、$A(14)$ を四捨五入して小数第 6 位まで求めると 3.294040 です。

$\displaystyle \sum_{r = 1}^{50} A(r)$ を求めなさい。 回答は、四捨五入して小数第 6 位まで示すこと。

# --hints--

`sphericalTriangles()` は `2717.751525` を返す必要があります。

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

# --seed--

## --seed-contents--

```js
function sphericalTriangles() {

  return true;
}

sphericalTriangles();
```

# --solutions--

```js
// solution required
```
