---
id: 5900f3d21000cf542c50fee4
title: '问题 101：最优多项式'
challengeType: 1
forumTopicId: 301725
dashedName: problem-101-optimum-polynomial
---

# --description--

If we are presented with the first k terms of a sequence it is impossible to say with certainty the value of the next term, as there are infinitely many polynomial functions that can model the sequence.

作为一个例子，让我们考虑立方数的序列。 这是由生成函数定义的，$u_n = n^3: 1, 8, 27, 64, 125, 216, \ldots$

假设我们只得到了这个序列的前两项。 根据“简单就是最好”的原则，我们应该假设线性关系并预测下一项为 15（共同差异 7）。 即使我们看到了前三项，根据同样的简单原则，也应该假设二次关系。

我们将定义 $OP(k, n)$ 为序列前 k 项的最优多项式生成函数的 $n^{th}$ 项。 应该清楚的是，$OP(k, n)$ 将准确地生成 $n ≤ k$ 的序列的项，并且可能第一个不正确的项（FIT）将是 $OP(k, k+1)$；在这种情况下，我们将称之为坏 OP（BOP）。

作为基础，如果我们只给出序列的第一项，那么假设恒常性是最明智的；也就是说，对于 $n ≥ 2，OP(1, n) = u_1$。

因此，我们获得了立方序列的以下 OP：

$$\begin{array}{ll}   OP(1, n) = 1          & 1, {\color{red}1}, 1, 1, \ldots     \\\\
  OP(2, n) = 7n−6       & 1, 8, {\color{red}{15}}, \ldots     \\\\   OP(3, n) = 6n^2−11n+6 & 1, 8, 27, {\color{red}{58}}, \ldots \\\\
  OP(4, n) = n^3        & 1, 8, 27, 64, 125, \ldots \end{array}$$

显然，当 k ≥ 4 时不存在 BOP。 通过考虑 BOP 生成的 FIT 的总和（在上面的 $\color{red}{red}$ 中表示），我们得到 1 + 15 + 58 = 74。 考虑以下十次多项式生成函数：

$$u_n = 1 − n + n^2 − n^3 + n^4 − n^5 + n^6 − n^7 + n^8 − n^9 + n^{10}$$

求 BOP 的 FIT 总和。

# --hints--

`optimumPolynomial()` 应该返回 `37076114526`。

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
