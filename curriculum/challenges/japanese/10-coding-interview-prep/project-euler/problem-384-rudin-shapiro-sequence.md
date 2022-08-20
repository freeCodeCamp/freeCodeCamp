---
id: 5900f4ed1000cf542c50fffe
title: '問題 384: ルーディン-シャピロ数列'
challengeType: 1
forumTopicId: 302048
dashedName: problem-384-rudin-shapiro-sequence
---

# --description--

$n$ の 2 進展開における隣接する 1 の対の個数を数列 $a(n)$ とします (1 の対は重複している場合があります)。

例: $a(5) = a({101}_2) = 0$, $a(6) = a({110}_2) = 1$, $a(7) = a({111}_2) = 2$

続いて、数列 $b(n) = {(-1)}^{a(n)}$ を定義します。 この数列はルーディン-シャピロ数列と呼ばれます。

$b(n)$ の総和数列 $s(n) = \displaystyle\sum_{i = 0}^{n} b(i)$ も考えます。

これらの数列の最初のいくつかの組み合わせは次のようになります。

$$\begin{array}{lr}   n    & 0 & 1 & 2 &  3 & 4 & 5 &  6 & 7 \\\\
  a(n) & 0 & 0 & 0 &  1 & 0 & 0 &  1 & 2 \\\\   b(n) & 1 & 1 & 1 & -1 & 1 & 1 & -1 & 1 \\\\
  s(n) & 1 & 2 & 3 &  2 & 3 & 4 &  3 & 4 \end{array}$$

数列 $s(n)$ は驚くべき性質を持っています。すべての要素が正の数であり、正の整数 $k$ がいずれもちょうど $k$ 回現れるという性質です。

$s(n)$ の中で $t$ が $c$ 回目に現れたときの $s(n)$ 内でのインデックス (位置) を、$g(t, c)$ と定義します。ここで、$1 ≤ c ≤ t$ です。

例: $g(3, 3) = 6$, $g(4, 2) = 7$, $g(54321, 12345) = 1\\,220\\,847\\,710$

$F(n)$ を、以下の式で定義されるフィボナッチ数列とします。

$$\begin{align}   & F(0) = F(1) = 1 \text{かつ} \\\\
  & n > 1 \text{のとき} F(n) = F(n - 1) + F(n - 2) \end{align}$$

$GF(t) = g(F(t), F(t - 1))$ と定義します。

$ 2 ≤ t ≤ 45$ のとき、$\sum GF(t)$ を求めなさい。

# --hints--

`rudinShapiroSequence()` は `3354706415856333000` を返す必要があります。

```js
assert.strictEqual(rudinShapiroSequence(), 3354706415856333000);
```

# --seed--

## --seed-contents--

```js
function rudinShapiroSequence() {

  return true;
}

rudinShapiroSequence();
```

# --solutions--

```js
// solution required
```
