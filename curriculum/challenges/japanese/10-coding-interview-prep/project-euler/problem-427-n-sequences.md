---
id: 5900f5181000cf542c51002a
title: '問題 427: n の数列'
challengeType: 1
forumTopicId: 302097
dashedName: problem-427-n-sequences
---

# --description--

整数の数列 $S = \\{s_i\\}$ が $n$ 個の要素を持ち、各要素 $s_i$ が $1 ≤ s_i ≤ n$ を満たすとき、これを $n$ の数列と呼びます。 したがって、全体で $n^n$ 個の相異なる $n$ の数列があります。

例えば、数列 $S = \\{1, 5, 5, 10, 7, 7, 7, 2, 3, 7\\}$ は 10 の数列の一例です。

任意の数列 $S$ について、同じ値が最も長く連続している、$S$ の部分列の長さを $L(S)$ とします。 例えば、上で与えられた数列 $S$ の場合、7 が 3 回連続で現れるので、$L(S) = 3$ です。

すべての $n$ の数列 $S$ について、$f(n) = \sum L(S)$ とします。

例: $f(3) = 45$, $f(7) = 1\\,403\\,689$, $f(11) = 481\\,496\\,895\\,121$

$f(7\\,500\\,000)\bmod 1\\,000\\,000\\,009$ を求めなさい。

# --hints--

`nSequences()` は `97138867` を返す必要があります。

```js
assert.strictEqual(nSequences(), 97138867);
```

# --seed--

## --seed-contents--

```js
function nSequences() {

  return true;
}

nSequences();
```

# --solutions--

```js
// solution required
```
