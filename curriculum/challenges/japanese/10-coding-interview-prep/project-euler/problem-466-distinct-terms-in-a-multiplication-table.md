---
id: 5900f53e1000cf542c510051
title: '問題 466: 掛け算表の相異なる項'
challengeType: 1
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

$m×n$ の掛け算表の相異なる項の個数を $P(m,n)$ とします。

例えば、3×4 の掛け算表は次のようになります。

$$\begin{array}{c}   ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\   \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12 \end{array}$$

8 つの相異なる項 {1, 2, 3, 4, 6, 8, 9, 12} があるので、$P(3, 4) = 8$ です。

次が与えられます。

$$\begin{align}   & P(64, 64) = 1\\,263\\\\
  & P(12, 345) = 1\\,998 \text{ および} \\\\   & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302 \\\\
\end{align}$$

$P(64, {10}^{16})$ を求めなさい。

# --hints--

`multiplicationTable()` は `258381958195474750` を返す必要があります。

```js
assert.strictEqual(multiplicationTable(), 258381958195474750);
```

# --seed--

## --seed-contents--

```js
function multiplicationTable() {

  return true;
}

multiplicationTable();
```

# --solutions--

```js
// solution required
```
