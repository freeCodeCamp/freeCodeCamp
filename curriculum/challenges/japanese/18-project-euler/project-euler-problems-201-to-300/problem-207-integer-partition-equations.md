---
id: 5900f43c1000cf542c50ff4e
title: '問題 207: 整数分割式'
challengeType: 1
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

一部の正の整数 $k$ について、$4^t = 2^t + k$ という整数の分割式が存在します。

ここで、$4^t$, $2^t$, $k$ はすべて正の整数であり、$t$ は実数です。

そのような分割の最初の 2 つは、$4^1 = 2^1 + 2$ と $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6$ です。

$t$ も整数であるような分割は「完全」な分割と呼ばれます。 任意の $m ≥ 1$ について、$k ≤ m$ のときに完全である分割の割合を $P(m)$ とします。

したがって、$P(6) = \frac{1}{2}$ です。

下表に、$P(m)$ の値をいくつか示します。

$$\begin{align}   & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\   & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\   & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\   & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\ & P(185) = \frac{3}{13} \end{align}$$

$P(m) &lt; \frac{1}{12\\,345}$ となる最小の $m$ を求めなさい。

# --hints--

`integerPartitionEquations()` は `44043947822` を返す必要があります。

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function integerPartitionEquations() {

  return true;
}

integerPartitionEquations();
```

# --solutions--

```js
// solution required
```
