---
id: 5900f46d1000cf542c50ff7f
title: '問題 255: 丸め平方根'
challengeType: 1
forumTopicId: 301903
dashedName: problem-255-rounded-square-roots
---

# --description--

正の整数 $n$ の平方根を最も近い整数に丸めたものを、$n$ の丸め平方根 (rounded-square-root) と定義します。

$n$ の丸め平方根は、次の方法 (基本的に、整数演算に適応させたヘロン法) で求めることができます。

数 $n$ の桁数を $d$ とします。

$d$ が奇数の場合、$x_0 = 2 × {10}^{\frac{d - 1}{2}}$ とします。

$d$ が偶数の場合、$x_0 = 7 × {10}^{\frac{d - 2}{2}}$ とします。

下の式を繰り返します。

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

$x_{k + 1} = x_k$ になったら止めます。

例として、$n = 4321$ の丸め平方根を求めます。

$n$ は 4 桁あるので、$x_0 = 7 × {10}^{\frac{4-2}{2}} = 70$ です。

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

$x_2 = x_1$ なので、ここで止めます。 したがって、ほんの 2 回繰り返すだけで、4321 の丸め平方根が 66 であることが分かりました (実際の平方根は65.7343137…)。

この方法であれば、驚くほど少ない繰り返しで済みます。 例えば、5 桁の整数 ($10\\,000 ≤ n ≤ 99\\,999$) の丸め平方根を求めるために必要な繰り返しは平均 3.2102888889 回です (平均値は小数第 10 位に四捨五入)。

14 桁の数 (${10}^{13} ≤ n &lt; {10}^{14}$) の丸め平方根を得るには、上の方法を平均で何回繰り返す必要がありますか。 回答は、四捨五入して小数第 10 位まで示すこと。

**注:** 記号 $⌊x⌋$ は床井関数、$⌈x⌉$ は天関数を表します。

# --hints--

`roundedSquareRoots()` は `4.447401118` を返す必要があります。

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

# --seed--

## --seed-contents--

```js
function roundedSquareRoots() {

  return true;
}

roundedSquareRoots();
```

# --solutions--

```js
// solution required
```
