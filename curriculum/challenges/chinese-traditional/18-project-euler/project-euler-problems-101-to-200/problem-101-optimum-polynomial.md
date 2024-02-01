---
id: 5900f3d21000cf542c50fee4
title: '問題 101：最優多項式'
challengeType: 1
forumTopicId: 301725
dashedName: problem-101-optimum-polynomial
---

# --description--

If we are presented with the first k terms of a sequence it is impossible to say with certainty the value of the next term, as there are infinitely many polynomial functions that can model the sequence.

作爲一個例子，讓我們考慮立方數的序列。 這是由生成函數定義的，$u_n = n^3: 1, 8, 27, 64, 125, 216, \ldots$

假設我們只得到了這個序列的前兩項。 根據“簡單就是最好”的原則，我們應該假設線性關係並預測下一項爲 15（共同差異 7）。 即使我們看到了前三項，根據同樣的簡單原則，也應該假設二次關係。

我們將定義 $OP(k, n)$ 爲序列前 k 項的最優多項式生成函數的 $n^{th}$ 項。 應該清楚的是，$OP(k, n)$ 將準確地生成 $n ≤ k$ 的序列的項，並且可能第一個不正確的項（FIT）將是 $OP(k, k+1)$；在這種情況下，我們將稱之爲壞 OP（BOP）。

作爲基礎，如果我們只給出序列的第一項，那麼假設恆常性是最明智的；也就是說，對於 $n ≥ 2，OP(1, n) = u_1$。

因此，我們獲得了立方序列的以下 OP：

$$\begin{array}{ll}   OP(1, n) = 1          & 1, {\color{red}1}, 1, 1, \ldots     \\\\
  OP(2, n) = 7n−6       & 1, 8, {\color{red}{15}}, \ldots     \\\\   OP(3, n) = 6n^2−11n+6 & 1, 8, 27, {\color{red}{58}}, \ldots \\\\
  OP(4, n) = n^3        & 1, 8, 27, 64, 125, \ldots \end{array}$$

顯然，當 k ≥ 4 時不存在 BOP。 通過考慮 BOP 生成的 FIT 的總和（在上面的 $\color{red}{red}$ 中表示），我們得到 1 + 15 + 58 = 74。 考慮以下十次多項式生成函數：

$$u_n = 1 − n + n^2 − n^3 + n^4 − n^5 + n^6 − n^7 + n^8 − n^9 + n^{10}$$

求 BOP 的 FIT 總和。

# --hints--

`optimumPolynomial()` 應該返回 `37076114526`。

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
