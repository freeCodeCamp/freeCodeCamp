---
id: 5900f53d1000cf542c51004f
title: '問題 464: メビウス関数と区間'
challengeType: 1
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

$μ(n)$ で表されるメビウス関数は次のように定義されます。

- $n$ が無平方数のとき、$μ(n) = (-1)^{ω(n)}$ (ここで、$ω(n)$ は $n$ の相異なる素因数)
- $n$ が無平方数でないとき、$μ(n) = 0$

区間 $[a, b]$ において $μ(n) = 1$ となる整数 $n$ の数を、$P(a, b)$ とします。

区間 $[a, b]$ において $μ(n) = -1$ となる整数 $n$ の数を、$N(a, b)$ とします。

例えば、$P(2, 10) = 2$, $N(2, 10) = 4$ です。

次の条件をすべて満たす整数の対 $(a, b)$ を $C(n)$ とします。

- $1 ≤ a ≤ b ≤ n$
- $99 \times N(a, b) ≤ 100 \times P(a, b)$
- $99 \times P(a, b) ≤ 100 \times N(a, b)$

例えば、$C(10) = 13$, $C(500) = 16\\,676$, $C(10\\,000) = 20\\,155\\,319$ です。

$C(20\\,000\\,000)$ を求めなさい。

# --hints--

`mobiusFunctionAndIntervals()` は `198775297232878` を返す必要があります。

```js
assert.strictEqual(mobiusFunctionAndIntervals(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function mobiusFunctionAndIntervals() {

  return true;
}

mobiusFunctionAndIntervals();
```

# --solutions--

```js
// solution required
```
