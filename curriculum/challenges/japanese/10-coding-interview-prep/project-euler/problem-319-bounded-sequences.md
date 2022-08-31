---
id: 5900f4ab1000cf542c50ffbe
title: '問題 319: 有界数列'
challengeType: 1
forumTopicId: 301975
dashedName: problem-319-bounded-sequences
---

# --description--

次の条件を満たす長さ $n$ の数列を $x_1, x_2, \ldots, x_n$ とします。

- $x_1 = 2$
- すべての $1 &lt; i ≤ n について、x_{i - 1} &lt; x_i$
- $1 ≤ i, j ≤ n を満たすすべての $i$, $j$ について、{(x_i)}^j &lt; {(x_j + 1)}^i$

これらを満たす長さ 2 の数列は、{2,4}, {2,5}, {2,6}, {2,7}, {2,8} の 5 つしか存在しません。 これらを満たす長さ 5 の数列は 293 個あり、そのうち 3 例は {2,5,11,25,55}, {2,6,14,36,88}, {2,8,22,64,181} です。

長さ $n$ のそのような数列を $t(n)$ とします。 $t(10) = 86195$ と $t(20) = 5227991891$ が与えられます。

$t({10}^{10})$ を求め、mod $10^9$ で答えなさい。

# --hints--

`boundedSequences()` は `268457129` を返す必要があります。

```js
assert.strictEqual(boundedSequences(), 268457129);
```

# --seed--

## --seed-contents--

```js
function boundedSequences() {

  return true;
}

boundedSequences();
```

# --solutions--

```js
// solution required
```
