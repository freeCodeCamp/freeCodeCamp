---
id: 5900f4d51000cf542c50ffe8
title: '問題 361: トゥエ-モース数列の部分列'
challengeType: 1
forumTopicId: 302022
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

トゥエ-モース数列 $\\{T_n\\}$ は、以下を満たす 2 進数列です。

- $T_0 = 0$
- $T_{2n} = T_n$
- $T_{2n + 1} = 1 - T_n$

$\\{T_n\\}$ の最初のいくつかの項が次のように与えられます: $01101001\color{red}{10010}1101001011001101001\ldots$

各要素の 2 進表記が $\\{T_n\\}$ の部分列になるようなソートされた整数数列を、$\\{A_n\\}$ とします。 例えば 10 進数の 18 は、2 進数では 10010 と表現されます。 10010 は $\\{T_n\\}$ ($T_8$ から $T_{12}$) の中に現れるので、18 は $\\{A_n\\}$ の要素です。 10 進数の 14 は、2 進数では 1110 と表現されます。 1110 は $\\{T_n\\}$ の中に現れないので，14 は $\\{A_n\\}$ の要素ではありません。

$A_n$ の最初のいくつかの項が次のように与えられます。

$$\begin{array}{cr}   n   & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 7 &  8 &  9 & 10 & 11 & 12 & \ldots \\\\
  A_n & 0 & 1 & 2 & 3 & 4 & 5 & 6 & 9 & 10 & 11 & 12 & 13 & 18 & \ldots \end{array}$$

また、$A_{100} = 3251$ および $A_{1000} = 80\\,852\\,364\\,498$ であることも確認できます。

$\displaystyle\sum_{k = 1}^{18} A_{{10}^k}$ の下位 9 桁を求めなさい。

# --hints--

`subsequenceOfThueMorseSequence()` は `178476944` を返す必要があります。

```js
assert.strictEqual(subsequenceOfThueMorseSequence(), 178476944);
```

# --seed--

## --seed-contents--

```js
function subsequenceOfThueMorseSequence() {

  return true;
}

subsequenceOfThueMorseSequence();
```

# --solutions--

```js
// solution required
```
