---
id: 5900f4a81000cf542c50ffbb
title: '問題 316: 10 進展開の数字'
challengeType: 1
forumTopicId: 301972
dashedName: problem-316-numbers-in-decimal-expansions
---

# --description--

{0,1,2,3,4,5,6,7,8,9} から等しい確率で選択された不規則な数字からなる無限数列を、$p = p_1 p_2 p_3 \ldots$ とします。

$p$ は実数 $0.p_1 p_2 p_3 \ldots$ に対応するということが分かります。

また、区間 [0,1) から無作為に実数を選ぶことは、{0,1,2,3,4,5,6,7,8,9} から等しい確率で選択した不規則な数字からなる無限数列を選ぶことと同等であることも分かります。

$d$ 個の小数桁を持つ任意の正の整数 $n$ に対して、$p_k, p_{k + 1}, \dots p_{k + d - 1}$ が数字の順序も含めて $n$ の小数桁と同じになるような、最小の添え字を $k$ とします。

また、$k$ の期待値を $g(n)$ とします。$g(n)$ が常に有限であること、そして興味深いことに常に整数であることを証明できます。

例えば、$n = 535$ の場合、

$p = 31415926\mathbf{535}897\ldots$ のとき、$k = 9$ です。

$p = 35528714365004956000049084876408468\mathbf{535}4\ldots$ のとき、$k = 36$ です。

同様に、$g(535) = 1008$ であることが分かります。

$\displaystyle\sum_{n = 2}^{999} g\left(\left\lfloor\frac{{10}^6}{n}\right\rfloor\right) = 27280188$ が与えられるとき、$\displaystyle\sum_{n = 2}^{999\\,999} g\left(\left\lfloor\frac{{10}^{16}}{n}\right\rfloor\right)$ を求めなさい。

**注:** $\lfloor x\rfloor$ は床関数を表します。

# --hints--

`numbersInDecimalExpansion()` は `542934735751917760` を返す必要があります。

```js
assert.strictEqual(numbersInDecimalExpansion(), 542934735751917760);
```

# --seed--

## --seed-contents--

```js
function numbersInDecimalExpansion() {

  return true;
}

numbersInDecimalExpansion();
```

# --solutions--

```js
// solution required
```
