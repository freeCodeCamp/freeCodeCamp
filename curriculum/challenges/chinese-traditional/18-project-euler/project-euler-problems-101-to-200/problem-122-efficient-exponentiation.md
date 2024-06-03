---
id: 5900f3e61000cf542c50fef9
title: '問題 122：有效求冪'
challengeType: 1
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

The most naive way of computing $n^{15}$ requires fourteen multiplications:

$$n × n × \ldots × n = n^{15}$$

但是使用“二進制”方法，您可以通過六次乘法來計算它：

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\   & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\   & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15} \end{align}$$

然而，仍然可以只用五次乘法來計算它：

$$\begin{align}   & n × n = n^2\\\\
  & n^2 × n = n^3\\\\   & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\ & n^{12} × n^3 = n^{15} \end{align}$$

我們將定義 $m(k)$ 爲計算 $n^k$ 的最小乘法次數；例如 $m(15) = 5$。

對於 $1 ≤ k ≤ 200$，求 $\sum{m(k)}$。

# --hints--

`efficientExponentiation()` should return `1582`.

```js
assert.strictEqual(efficientExponentiation(), 1582);
```

# --seed--

## --seed-contents--

```js
function efficientExponentiation() {

  return true;
}

efficientExponentiation();
```

# --solutions--

```js
// solution required
```
