---
id: 5900f4e41000cf542c50fff5
title: '問題 375: 最小の部分列'
challengeType: 1
forumTopicId: 302037
dashedName: problem-375-minimum-of-subsequences
---

# --description--

以下に述べる疑似乱数生成器で作成した整数の数列を $S_n$ とします。

$$\begin{align}         S_0 & = 290\\,797 \\\\
  S_{n + 1} & = {S_n}^2\bmod 50\\,515\\,093 \end{align}$$

$i ≤ j$ に対する数 $S_i, S_{i + 1}, \ldots, S_j$ のうちの最小数を $A(i, j)$ とします。 $1 ≤ i ≤ j ≤ N$ のとき、$M(N) = \sum A(i, j)$ とします。

$M(10) = 432\\,256\\,955$, $M(10\\,000) = 3\\,264\\,567\\,774\\,774\\,119$ となることを確認できます。

$M(2\\,000\\,000\\,000)$ を求めなさい。

# --hints--

`minimumOfSubsequences()` は `7435327983715286000` を返す必要があります。

```js
assert.strictEqual(minimumOfSubsequences(), 7435327983715286000);
```

# --seed--

## --seed-contents--

```js
function minimumOfSubsequences() {

  return true;
}

minimumOfSubsequences();
```

# --solutions--

```js
// solution required
```
