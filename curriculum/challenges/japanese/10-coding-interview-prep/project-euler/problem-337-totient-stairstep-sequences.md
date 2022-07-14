---
id: 5900f4be1000cf542c50ffd0
title: '問題 337: トーティエント階段型数列 (Stairstep Sequence)'
challengeType: 1
forumTopicId: 301995
dashedName: problem-337-totient-stairstep-sequences
---

# --description--

次の条件を満たす長さ $n$ の整数数列を $\\{a_1, a_2, \ldots, a_n\\}$ とします。

- $a_1 = 6$
- すべての $1 ≤ i &lt; n$ について、$φ(a_i) &lt; φ(a_{i + 1}) &lt; a_i &lt; a_{i + 1}$

$φ$ はオイラーのトーティエント関数を表します。

そのような数列のうち $a_n ≤ N$ を満たすものの数を $S(N)$ とします。

例: $S(10) = 4$: {6}, {6, 8}, {6, 8, 9}, {6, 10}

$S(100) = 482\\,073\\,668$, $S(10\\,000)\bmod {10}^8 = 73\\,808\\,307$ であることを確認できます。

$S(20\\,000\\,000)\bmod {10}^8$ を求めなさい。


# --hints--

`totientStairstepSequences()` は `85068035` を返す必要があります。

```js
assert.strictEqual(totientStairstepSequences(), 85068035);
```

# --seed--

## --seed-contents--

```js
function totientStairstepSequences() {

  return true;
}

totientStairstepSequences();
```

# --solutions--

```js
// solution required
```
