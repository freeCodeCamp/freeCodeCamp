---
id: 5900f5461000cf542c510058
title: '問題 473: フィジタル進数'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

黄金比 $\varphi = \frac{1+\sqrt{5}}{2}$ を $\varphi$ とします。

驚くべきことに、すべての正の整数は $\varphi$ の累乗の和として表すことができます。たとえこの和の中で $\varphi$ のすべての累乗をたかだか 1 度しか使えないとしても、それが可能なのです。

しかも、この表し方は唯一のものではありません。

指数が連続するような累乗を使わないこと、および、その表し方が有限であることを条件にすれば、表し方を一意にできます。

例:

$2 = \varphi + \varphi^{-2}$, $3 = \varphi^{2} + \varphi^{-2}$

$\varphi$ の累乗の和を表すために、0 と 1 からなり、負の指数の開始点が小数点で示されている文字列を使用します。 この表記法を「フィジタル進数」と呼ぶことにします。

したがって、$1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$, $14 = 100100.001001_{\varphi}$ となります。 The strings representing 1, 2 and 14 in the phigital number base are palindromic, while the string representing 3 is not (the phigital point is not the middle character).

フィジタル進数で表すと回文数になる 1000 以下の正の整数の和は 4345 です。

フィジタル進数で表すと回文数になる $10^{10}$ 以下の正の整数の和を求めなさい。

# --hints--

`phigitalNumberBase()` は `35856681704365` を返す必要があります。

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
