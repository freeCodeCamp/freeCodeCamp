---
id: 5900f4621000cf542c50ff75
title: '問題 246: 楕円の接線'
challengeType: 1
forumTopicId: 301893
dashedName: problem-246-tangents-to-an-ellipse
---

# --description--

ある楕円が次のように定義されています。

中心点 $M$ と半径 $r$ を持つ円 $c$、および $d(G, M) < r$ となる点 $G$ が与えられるとき、$c$ と $G$ から等距離にある点の軌跡が楕円を描きます。

下図は、点が楕円を描く様子を示しています。

<img class="img-responsive center-block" alt="楕円の描画アニメーション" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-1.gif" style="background-color: white; padding: 10px;" />

点 $M(-2000, 1500)$ と $G(8000, 1500)$ が与えられます。

中心点 $M$ と半径 $15\\,000$ を持つ円 $c$ も与えられます。

$G$ と $c$ から等距離にある点の軌跡が楕円 $e$ を描きます。

$e$ の外側の点 $P$ から、楕円に対する 2 本の接線 $t_1$ と $t_2$ が描かれます。

$t_1$ と $t_2$ が楕円に接する点を $R$, $S$ とします。

<img class="img-responsive center-block" alt="中心点 M と半径 15000 の円の中で、楕円 e の外側に点 P がある。点 P から楕円まで 2 本の接線 t_1 と t_2 が引かれ、点 R と 点 S で楕円に接している" src="https://cdn.freecodecamp.org/curriculum/project-euler/tangents-to-an-ellipse-2.gif" style="background-color: white; padding: 10px;" />

角 $RPS$ が 45 度を超えるような格子点 $P$ はいくつありますか。

# --hints--

`tangentsToAnEllipse()` は `810834388` を返す必要があります。

```js
assert.strictEqual(tangentsToAnEllipse(), 810834388);
```

# --seed--

## --seed-contents--

```js
function tangentsToAnEllipse() {

  return true;
}

tangentsToAnEllipse();
```

# --solutions--

```js
// solution required
```
