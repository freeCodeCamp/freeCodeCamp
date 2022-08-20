---
id: 5900f4ab1000cf542c50ffbd
title: '問題 318: 2011 個の 9'
challengeType: 1
forumTopicId: 301974
dashedName: problem-318-2011-nines
---

# --description--

実数 $\sqrt{2} + \sqrt{3}$ について考えます。

$\sqrt{2} + \sqrt{3}$ の偶数乗を計算すると、次のようになります。

$$\begin{align}   & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\   & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\ \end{align}$$

これらの累乗の分数部を見ると、先頭で連続している 9 の個数が非減少であるように見えます。 実際に、$n$ が大きいと ${(\sqrt{2} + \sqrt{3})}^{2n}$ の小数部が 1 に近付くということを証明できます。

正の整数 $p$ と $q$ ($p &lt; q$) があるとき、$n$ が大きいと ${(\sqrt{p} + \sqrt{q})}^{2n}$ の小数部 が 1 に近付くようなすべての実数 $\sqrt{p} + \sqrt{q}$ について考えます。

${(\sqrt{p} + \sqrt{q})}^{2n}$ の小数部の先頭で連続している 9 の個数を $C(p,q,n)$ とします。

$C(p,q,n) ≥ 2011$ を満たす $n$ の最小値を $N(p,q)$ とします。

$p + q ≤ 2011$ のとき、$\sum N(p,q)$ を求めなさい。

# --hints--

`twoThousandElevenNines()` は `709313889` を返す必要があります。

```js
assert.strictEqual(twoThousandElevenNines(), 709313889);
```

# --seed--

## --seed-contents--

```js
function twoThousandElevenNines() {

  return true;
}

twoThousandElevenNines();
```

# --solutions--

```js
// solution required
```
