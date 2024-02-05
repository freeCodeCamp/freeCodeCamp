---
id: 5900f4f81000cf542c51000b
title: '問題 396: 弱いグッドスタイン数列'
challengeType: 1
forumTopicId: 302061
dashedName: problem-396-weak-goodstein-sequence
---

# --description--

正の整数 $n$ について、$n$ 番目の弱いグッドスタイン数列 $\\{g1, g2, g3, \ldots\\}$ は次のように定義されます。

- $g_1 = n$
- $k > 1$ のとき、$g_k$ を得るには、$g_{k - 1}$ を基数 $k$ で表し、それを基数 $k + 1$ の数と解釈して、その結果から 1 を引きます。

この数列は $g_k$ が 0 になると終了します。

例えば、$6$ 番目の弱いグッドスタイン数列は $\\{6, 11, 17, 25, \ldots\\}$ です。

- $g_1 = 6$
- $6 = 110_2$, $110_3 = 12$, $12 - 1 = 11$ なので、$g_2 = 11$
- $11 = 102_3$, $102_4 = 18$, $18 - 1 = 17$ なので、$g_3 = 17$
- $17 = 101_4$, $101_5 = 26$, $26 - 1 = 25$ なので、$g_4 = 25$

以降もこのように続きます。

すべての弱いグッドスタイン数列が有限であることが分かっています。

$n$ 番目の弱いグッドスタイン数列に含まれる、0 以外の要素の個数を $G(n)$ とします。

$G(2) = 3$, $G(4) = 21$, $G(6) = 381$ であることを確認できます。

$1 ≤ n &lt; 8$ のとき、$\sum G(n) = 2517$ であることも確認できます。

$1 ≤ n &lt; 16$ のとき、$\sum G(n)$ の下位 9 桁を求めなさい。

# --hints--

`weakGoodsteinSequence()` は `173214653` を返す必要があります。

```js
assert.strictEqual(weakGoodsteinSequence(), 173214653);
```

# --seed--

## --seed-contents--

```js
function weakGoodsteinSequence() {

  return true;
}

weakGoodsteinSequence();
```

# --solutions--

```js
// solution required
```
