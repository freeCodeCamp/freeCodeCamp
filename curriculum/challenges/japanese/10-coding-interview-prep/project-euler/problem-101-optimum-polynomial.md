---
id: 5900f3d21000cf542c50fee4
title: '問題 101: 最適な多項式'
challengeType: 1
forumTopicId: 301725
dashedName: problem-101-optimum-polynomial
---

# --description--

数列の先頭から k 個の項が提示されたときに、次の項の値を確実に知ることは不可能です。その数列をモデル化できる多項式関数が無限にあるからです。

例として、平方数の数列を考えます。 これは生成関数 $u_n = n^3: 1, 8, 27, 64, 125, 216, \ldots$ によって定義されます。

この数列の最初の 2 項だけが与えられたとします。 「シンプル・イズ・ベスト」の原則に基づき、線形関係があると想定して次の項が 15 であると予想します (公差 7)。 最初の 3 項が提示されたとしても、上と同じ原則により二次関係があると想定します。

ここでは、数列の先頭から第 k 項までに対する最適な多項式生成関数の第 $n$ 項を $OP(k, n)$ とします。 $n ≤ k$ のとき、$OP(k, n)$ がその数列の項を正確に生成することは明らかでしょう。そしておそらく、FIT (First Incorrect Term = 最初の不正な項) は $OP(k, k+1)$ でしょう。この場合、これを BOP (Bad OP = 不良 OP) と呼ぶことにします。

原則として、配列の最初の項のみが与えられた場合、それは定数であると仮定することが最も理にかなうと考えられます。すなわち、$n ≥ 2, OP(1, n) = u_1$ です。

したがって、立方数の数列について次の OP が得られます。

$$\begin{array}{ll}   OP(1, n) = 1          & 1, {\color{red}1}, 1, 1, \ldots     \\\\
  OP(2, n) = 7n−6       & 1, 8, {\color{red}{15}}, \ldots     \\\\   OP(3, n) = 6n^2−11n+6 & 1, 8, 27, {\color{red}{58}}, \ldots \\\\
  OP(4, n) = n^3        & 1, 8, 27, 64, 125, \ldots \end{array}$$

明らかに、k ≥ 4 に対して BOP は存在しません。 BOP によって生成された FIT の和 (上では $\color{red}{red}$ で示されています) は、1 + 15 + 58 = 74 となります。 次の 10 次多項式生成関数を考えます。

$$u_n = 1 − n + n^2 − n^3 + n^4 − n^5 + n^6 − n^7 + n^8 − n^9 + n^{10}$$

BOP の FIT の和を求めなさい。

# --hints--

`optimumPolynomial()` は `37076114526` を返す必要があります。

```js
assert.strictEqual(optimumPolynomial(), 37076114526);
```

# --seed--

## --seed-contents--

```js
function optimumPolynomial() {

  return true;
}

optimumPolynomial();
```

# --solutions--

```js
// solution required
```
