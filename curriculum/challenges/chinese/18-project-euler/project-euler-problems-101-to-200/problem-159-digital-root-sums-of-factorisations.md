---
id: 5900f40c1000cf542c50ff1e
title: '问题159：因子的数字根和'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

A composite number can be factored many different ways.

例如，不包括乘以一，24可以用7种不同的方式考虑：

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

回顾一下，一个数字的数字根，以10为基数，是通过将该数字的数位相加，并重复这一过程，直到一个数字小于10，才能找到。 因此 467 的数字根是 8。

We shall call a Digital Root Sum (DRS) the sum of the digital roots of the individual factors of our number. 下面的图表展示了24的所有DRS值。

| Factorisation | 数字根和 |
| ------------- | ---- |
| 2x2x2x3       | 9    |
| 2x3x4         | 9    |
| 2x2x6         | 10   |
| 4x6           | 10   |
| 3x8           | 11   |
| 2x12          | 5    |
| 24            | 6    |

24的最大数字根和是11。 函数 $mdrs(n)$ 得出 $n$ 的最大数字根和。 则 $mdrs(24) = 11$。

计算 $\sum{mdrs(n)}$ 当 $1 &lt; n &lt; 1,000,000$。

# --hints--

`euler159()` 应该返回 `14489159`。

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
