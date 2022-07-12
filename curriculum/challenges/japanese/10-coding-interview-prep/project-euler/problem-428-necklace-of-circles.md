---
id: 5900f5191000cf542c51002b
title: '問題 428: 円のネックレス'
challengeType: 1
forumTopicId: 302098
dashedName: problem-428-necklace-of-circles
---

# --description--

$a$, $b$, $c$ を正の数とします。

$|WX| = a$, $|XY| = b$, $|YZ| = c$, $|WZ| = a + b + c$ となる同一直線上の 4 点 を $W$, $X$, $Y$, $Z$ とします。

直径が $XY$ である円を $C_{\text{in}}$ とします。

直径が $WZ$ である円を $C_{\text{out}}$ とします。

$k (≥ 3)$ 個の相異なる円 $C_1, C_2, \ldots, C_k$ を、以下の条件をすべて満たすように配置できる場合、三つ組数 ($a$, $b$, $c$) は*ネックレス三つ組数*と呼ばれます。

- $C_i$ は、$1 ≤ i$, $j ≤ k$ かつ $i ≠ j$ のとき、いずれの $C_j$ とも内点を共有しない。
- $C_i$ は、$1 ≤ i ≤ k$ のとき、$C_{\text{in}}$ および $C_{\text{out}}$ の両方に接している。
- $C_i$ は、$1 ≤ i &lt; k$ のとき、$C_{i + 1}$ に接している。
- $C_k$ は $C_1$ に接している。

例えば、(5, 5, 5) と (4, 3, 21) はネックレス三つ組数です。しかし、(2, 2, 5) はそうではないことが分かっています。

<img class="img-responsive center-block" alt="ネックレス三つ組数の視覚的表現" src="https://cdn.freecodecamp.org/curriculum/project-euler/necklace-of-circles.png" style="background-color: white; padding: 10px;" />

$a$, $b$, $c$ が正の整数で、かつ $b ≤ n$ のときのネックレス三つ組数の個数を $T(n)$ とします。 例えば、$T(1) = 9$, $T(20) = 732$, $T(3\\,000) = 438\\,106$ です。

$T(1\\,000\\,000\\,000)$ を求めなさい。

# --hints--

`necklace(1000000000)` は `747215561862` を返す必要があります。

```js
assert.strictEqual(necklace(1000000000), 747215561862);
```

# --seed--

## --seed-contents--

```js
function necklace(n) {

  return true;
}

necklace(1000000000)
```

# --solutions--

```js
// solution required
```
