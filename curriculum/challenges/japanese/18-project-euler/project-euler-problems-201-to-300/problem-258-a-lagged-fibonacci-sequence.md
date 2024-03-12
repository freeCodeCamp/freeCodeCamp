---
id: 5900f46e1000cf542c50ff81
title: '問題 258: ラグ付きフィボナッチ数列'
challengeType: 1
forumTopicId: 301906
dashedName: problem-258-a-lagged-fibonacci-sequence
---

# --description--

数列を次のように定義します。

- $0 ≤ k ≤ 1999$ のとき、$g_k = 1$
- $k ≥ 2000$ のとき、$g_k = g_{k - 2000} + g_{k - 1999}$

$k = {10}^{18} $ のとき、$g_k$ mod 20092010 を求めなさい。

# --hints--

`laggedFibonacciSequence()` は `12747994` を返す必要があります。

```js
assert.strictEqual(laggedFibonacciSequence(), 12747994);
```

# --seed--

## --seed-contents--

```js
function laggedFibonacciSequence() {

  return true;
}

laggedFibonacciSequence();
```

# --solutions--

```js
// solution required
```
