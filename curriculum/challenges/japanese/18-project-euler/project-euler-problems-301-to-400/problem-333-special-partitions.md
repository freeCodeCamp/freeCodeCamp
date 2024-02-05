---
id: 5900f4b91000cf542c50ffcc
title: '問題 333: 特殊な分割'
challengeType: 1
forumTopicId: 301991
dashedName: problem-333-special-partitions
---

# --description--

すべての正の整数は、すべての項を $2^i \times 3^j$ (ここで $i, j ≥ 0$) で表せるような形で分割することができます。

他の項の約数である項が一つもないような分割のみを考えます。 例えば、$17 = 2 + 6 + 9 = (2^1 \times 3^0 + 2^1 \times 3^1 + 2^0 \times 3^2)$ は、2 が 6 を割り切るので有効ではありません。 分割 $17 = 16 + 1 = (2^4 \times 3^0 + 2^0 \times 3^0)$ も、1 が 16 を割り切るので有効ではありません。 17 の場合、唯一の有効な分割は $8 + 9 = (2^3 \times 3^0 + 2^0 \times 3^2)$ です。

多くの整数には有効な分割が複数個あります。そのような最初の数は 11 であり、次の 2 つの分割があります。

$$\begin{align}   & 11 = 2 + 9 = (2^1 \times 3^0 + 2^0 \times 3^2) \\\\
  & 11 = 8 + 3 = (2^3 \times 3^0 + 2^0 \times 3^1) \end{align}$$

$n$ の有効な分割の数を $P(n)$ とします。 例えば、$P(11) = 2$ です。

$P(17)$ のような、有効な分割を 1 つ持つ素数の整数 $q$ のみについて考えます。

$P(q) = 1$ となる $q &lt;100$ の和は 233 です。

$P(q) = 1$ となる素数 $q &lt; 1\\,000\\,000$ の和を求めなさい。

# --hints--

`specialPartitions()` は `3053105` を返す必要があります。

```js
assert.strictEqual(specialPartitions(), 3053105);
```

# --seed--

## --seed-contents--

```js
function specialPartitions() {

  return true;
}

specialPartitions();
```

# --solutions--

```js
// solution required
```
