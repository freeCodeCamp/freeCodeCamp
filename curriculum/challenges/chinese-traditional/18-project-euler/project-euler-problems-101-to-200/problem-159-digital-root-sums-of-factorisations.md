---
id: 5900f40c1000cf542c50ff1e
title: '問題159：因子的數字根和'
challengeType: 1
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

A composite number can be factored many different ways.

例如，不包括乘以一，24可以用7種不同的方式考慮：

$$\begin{align}   & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\   & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\   & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\ & 24 = 24 \end{align}$$

回顧一下，一個數字的數字根，以10爲基數，是通過將該數字的數位相加，並重復這一過程，直到一個數字小於10，才能找到。 因此 467 的數字根是 8。

We shall call a Digital Root Sum (DRS) the sum of the digital roots of the individual factors of our number. 下面的圖表展示了24的所有DRS值。

| Factorisation | 數字根和 |
| ------------- | ---- |
| 2x2x2x3       | 9    |
| 2x3x4         | 9    |
| 2x2x6         | 10   |
| 4x6           | 10   |
| 3x8           | 11   |
| 2x12          | 5    |
| 24            | 6    |

24的最大數字根和是11。 函數 $mdrs(n)$ 得出 $n$ 的最大數字根和。 則 $mdrs(24) = 11$。

計算 $\sum{mdrs(n)}$ 當 $1 &lt; n &lt; 1,000,000$。

# --hints--

`euler159()` 應該返回 `14489159`。

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
