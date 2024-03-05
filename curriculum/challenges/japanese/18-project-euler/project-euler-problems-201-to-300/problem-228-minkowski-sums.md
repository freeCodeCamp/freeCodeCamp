---
id: 5900f4511000cf542c50ff63
title: '問題 228: ミンコフスキー和'
challengeType: 1
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

各頂点 $v_k (k = 1, 2, \ldots, n)$ が次の座標であるような正 $n$ 角形を $S_n$ とします。

$$\begin{align}   & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
  & y_k = sin(\frac{2k - 1}{n} × 180°) \end{align}$$

それぞれの $S_n$ は、周辺上と内部のすべての点からなる、塗りつぶされた図形として解釈されます。

2 つの図形 $S$ と $T$ のミンコフスキー和 $S + T$ は、$S$ のすべての点と $T$ のすべての点を加算した結果です。ここで、点の加算は座標形式で $(u, v) + (x, y) = (u + x, v + y)$ とします。

例えば、$S_3$ と $S_4$ の和は、下図でピンク色で示されている 6 辺の図形です。

<img class="img-responsive center-block" alt="S_3, S_4, S_3 + S_4 を示している画像" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;" />

$S_{1864} + S_{1865} + \ldots + S_{1909}$ には辺が何本ありますか。

# --hints--

`minkowskiSums()` は `86226` を返す必要があります。

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
