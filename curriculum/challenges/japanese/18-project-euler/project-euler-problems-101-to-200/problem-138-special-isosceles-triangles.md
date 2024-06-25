---
id: 5900f3f61000cf542c50ff09
title: '問題 138: 特殊な二等辺三角形'
challengeType: 1
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

底辺の長さが $b = 16$、2 本の等辺の長さが $L = 17$ の二等辺三角形を考えます。

<img class="img-responsive center-block" alt="辺 L (2 本の等辺)、底辺 b、および、三角形の底辺から 2 本の辺 L の間の角までの長さ h を持つ二等辺三角形" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;" />

ピタゴラスの定理を使えば、三角形の高さは $h = \sqrt{{17}^2 − 8^2} = 15$ で、底辺の長さより 1 短いことが分かります。

$b = 272$, $L = 305$ のとき、$h = 273$ であり、高さが底辺の長さより 1 長くなります。これは、$h=b±1$ という性質を持つ 2 番目に小さい二等辺三角形です。

$h = b ± 1$ を満たし、$b$ と $L$ が正の整数であるような、12 個の最小の二等辺三角形に対する $\sum{L}$ を求めなさい。

# --hints--

`isoscelesTriangles()` は `1118049290473932` を返す必要があります。

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
