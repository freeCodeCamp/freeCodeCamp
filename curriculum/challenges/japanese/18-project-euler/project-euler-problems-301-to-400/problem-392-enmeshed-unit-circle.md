---
id: 5900f4f41000cf542c510007
title: '問題 392: 網にかかった単位円'
challengeType: 1
forumTopicId: 302057
dashedName: problem-392-enmeshed-unit-circle
---

# --description--

直線格子とは、格子線が必ずしも等間隔でない直交格子です。

そのような格子の例として、対数方眼紙が挙げられます。

ここでは、以下のプロパティを備えたデカルト座標系の直線格子について考えます。

- 格子線がデカルト座標系の軸と平行である。
- $N + 2$ 本の垂直格子線と $N + 2$ 本の水平格子線が引かれている。 したがって、長方形のマスが $(N + 1) \times (N + 1)$ 個存在する。
- 外側の 2 本の垂直格子線の式が $x = -1$ と $x = 1$ である。
- 外側の 2 本の水平格子線の式が $y = -1$ と $y = 1$ である。
- 格子のマスは、単位円と重なると赤色になり、それ以外の場合は黒色になる。

この問題では、赤色のマスの面積を最小にするには、残りの $N$ 本の内側の水平格子線と $N$ 本の内側の垂直格子線をどこに引けばよいかを求めます。

例: 下図は $N = 10$ のときの解を示しています。

<img class="img-responsive center-block" alt="N = 10 のときの解" src="https://cdn.freecodecamp.org/curriculum/project-euler/enmeshed-unit-circle.png" style="background-color: white; padding: 10px;" />

$N = 10$ のときに赤色のマスが占める面積を、四捨五入して小数第 10 位まで示すと 3.3469640797 になります。

$N = 400$ のときの位置を求めなさい。 赤色のマスが占める面積を、四捨五入して小数第 10 位まで示すこと。

# --hints--

`enmeshedUnitCircle()` は `3.1486734435` を返す必要があります。

```js
assert.strictEqual(enmeshedUnitCircle(), 3.1486734435);
```

# --seed--

## --seed-contents--

```js
function enmeshedUnitCircle() {

  return true;
}

enmeshedUnitCircle();
```

# --solutions--

```js
// solution required
```
