---
id: 5900f5111000cf542c510023
title: '問題 420: 2x2 の正整数行列'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

正整数行列とは、要素がすべて正の整数である行列です。

一部の正整数行列中は、正整数行列の 2 乗として 2 通りに表すことができます。 次に例を示します。

$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix}=
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

対角和が N 未満であり、かつ、正整数行列の 2 乗として 2 通りに表せる 2x2 の正整数行列の個数を $F(N)$ とします。

$F(50) = 7$, $F(1000) = 1019$ であることを確認できます。

$F({10}^7)$ を求めなさい。

# --hints--

`positiveIntegerMatrix()` は `145159332` を返す必要があります。

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

# --seed--

## --seed-contents--

```js
function positiveIntegerMatrix() {

  return true;
}

positiveIntegerMatrix();
```

# --solutions--

```js
// solution required
```
