---
id: 5900f52e1000cf542c510041
title: '問題 450: 内サイクロイドと格子点'
challengeType: 1
forumTopicId: 302123
dashedName: problem-450-hypocycloid-and-lattice-points
---

# --description--

内サイクロイドとは、大きな円の内部で回転する小さな円上の点によって描かれる曲線のことです。 原点を中心とし、右端の点から始まる内サイクロイドのパラメトリック方程式を次に示します。

$$x(t) = (R - r) \cos(t) + r \cos(\frac{R - r}{r}t)$$

$$y(t) = (R - r) \sin(t) - r \sin(\frac{R - r}{r} t)$$

ここで、$R$ は大きな円の半径、$r$ は小さな円の半径です。

半径 $R$ と $r$ を持つ内サイクロイド上の整数座標の点であり、$\sin(t)$ と $\cos(t)$ が有理数となる $t$ の相当値が存在するような、相異なる点の集合を $C(R, r)$ とします。

$C(R, r)$ に含まれる点の $x$ 座標と $y$ 座標の絶対値の総和を $S(R, r) = \sum\_{(x,y) \in C(R, r)} |x| + |y|$ とします。

正の整数 $R$ と $r$ について、$R\leq N$ かつ $2r &lt; R$のとき、$S(R, r)$ の和を $T(N) = \sum_{R = 3}^N \sum_{r=1}^{\left\lfloor \frac{R - 1}{2} \right\rfloor} S(R, r)$ とします。

次が与えられます。

$$\begin{align}   C(3, 1) = & \\{(3, 0), (-1, 2), (-1,0), (-1,-2)\\} \\\\
  C(2500, 1000) = & \\{(2500, 0), (772, 2376), (772, -2376), (516, 1792), (516, -1792), (500, 0), (68, 504), \\\\ &(68, -504),(-1356, 1088), (-1356, -1088), (-1500, 1000), (-1500, -1000)\\} \end{align}$$

**Note:** (-625, 0) is not an element of $C(2500, 1000)$ because $\sin(t)$ is not a rational number for the corresponding values of $t$.

$S(3, 1) = (|3| + |0|) + (|-1| + |2|) + (|-1| + |0|) + (|-1| + |-2|) = 10$

$T(3) = 10$; $T(10) = 524$; $T(100) = 580\\,442$; $T({10}^3) = 583\\,108\\,600$

$T({10}^6)$ を求めなさい。

# --hints--

`hypocycloidAndLatticePoints()` は `583333163984220900` を返す必要があります。

```js
assert.strictEqual(hypocycloidAndLatticePoints(), 583333163984220900);
```

# --seed--

## --seed-contents--

```js
function hypocycloidAndLatticePoints() {

  return true;
}

hypocycloidAndLatticePoints();
```

# --solutions--

```js
// solution required
```
