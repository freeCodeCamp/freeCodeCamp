---
id: 5900f4381000cf542c50ff4a
title: '問題 203: 無平方二項係数'
challengeType: 1
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

二項係数 $\displaystyle\binom{n}{k}$ は下図のように三角形に並べることができます。これがパスカルの三角形です。

$$\begin{array}{ccccccccccccccc}    &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\    &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\    &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\    & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\ &   &   &   &    &    &    & \ldots \end{array}$$

パスカルの三角形の上 8 段に 12 個の相異なる数 (1, 2, 3, 4, 5, 6, 7, 10, 15, 20, 21, 35) が含まれていることが分かります。

いずれの素数の平方数でも割り切れない正の整数 n は、無平方数と呼ばれます。 パスカルの三角形の上 8 段にある 12 個の相異なる数は、4 と 20 を除きすべて素数です。 上 8 段に含まれる相異なる無平方数の和は 105 です。

パスカルの三角形の上 51 段に含まれる、相異なる無平方数の和を求めなさい。

# --hints--

`squarefreeBinomialCoefficients()` は `34029210557338` を返す必要があります。

```js
assert.strictEqual(squarefreeBinomialCoefficients(), 34029210557338);
```

# --seed--

## --seed-contents--

```js
function squarefreeBinomialCoefficients() {

  return true;
}

squarefreeBinomialCoefficients();
```

# --solutions--

```js
// solution required
```
