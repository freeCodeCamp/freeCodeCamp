---
id: 5900f4411000cf542c50ff53
title: '問題 212: 直方体の総体積'
challengeType: 1
forumTopicId: 301854
dashedName: problem-212-combined-volume-of-cuboids
---

# --description--

パラメータ $\{ (x_0,y_0,z_0), (dx,dy,dz)\}$ で与えられ、座標軸に平行に配置された直方体は、$x_0 ≤ X ≤ x_0 + dx$, $y_0 ≤ Y ≤ y_0 + dy$, $z_0 ≤ Z ≤ z_0 + dz$ をすべて満たす点 ($X$, $Y$, $Z$) で構成されます。 この直方体の体積は積 $dx × dy × dz$ です。 直方体の集まりの総体積はそれらの結合体の体積であり、直方体の重なりがある場合は各直方体の体積の和より小さくなります。

$C_n$ が次のようなパラメータを持ち、座標軸に平行に置かれた直方体 5000 個の集まりを、$C_1, \ldots, C_{50000}$ とします。

$$\begin{align}   & x_0 = S_{6n - 5} \\; \text{mod} \\; 10000    \\\\
  & y_0 = S_{6n - 4} \\; \text{mod} \\; 10000    \\\\   & z_0 = S_{6n - 3} \\; \text{mod} \\; 10000    \\\\
  & dx = 1 + (S_{6n - 2} \\; \text{mod} \\; 399) \\\\   & dy = 1 + (S_{6n - 1} \\; \text{mod} \\; 399) \\\\
  & dz = 1 + (S_{6n} \\; \text{mod} \\; 399)     \\\\ \end{align}$$

ここで、$S_1, \ldots, S_{300000}$ は「ラグ付きフィボナッチ 法」により生成されます。

$1 ≤ k ≤ 55$ のとき、$S_k = [100003 - 200003k + 300007k^3] \\; (mod \\; 1000000)$

$56 ≤ k$ のとき、$S_k = [S_{k - 24} + S_{k - 55}] \\; (mod \\; 1000000)$

したがって、$C_1$ のパラメータは $\{(7,53,183), (94,369,56)\}$ となり、$C_2$ のパラメータは $\{(2383,3563,5079), (42,212,344)\}$ となり、以降も同様です。

最初の 100 個の直方体 $C_1, \ldots, C_{100}$ の総体積は 723581599 です。

50000 個のすべての直方体 $C_1, \ldots, C_{50000}$ の総体積を求めなさい。

# --hints--

`combinedValueOfCuboids()` は `328968937309` を返す必要があります。

```js
assert.strictEqual(combinedValueOfCuboids(), 328968937309);
```

# --seed--

## --seed-contents--

```js
function combinedValueOfCuboids() {

  return true;
}

combinedValueOfCuboids();
```

# --solutions--

```js
// solution required
```
