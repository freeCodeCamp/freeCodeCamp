---
id: 5900f3e61000cf542c50fef9
title: 'Problem 122: Efficient exponentiation'
challengeType: 1
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

The most naive way of computing $n^{15}$ requires fourteen multiplications:

$$n × n × \ldots × n = n^{15}$$

But using a "binary" method you can compute it in six multiplications:

$$\begin{align}
  & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\
  & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\
  & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15}
\end{align}$$

However it is yet possible to compute it in only five multiplications:

$$\begin{align}
  & n × n = n^2\\\\
  & n^2 × n = n^3\\\\
  & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\
  & n^{12} × n^3 = n^{15}
\end{align}$$

We shall define $m(k)$ to be the minimum number of multiplications to compute $n^k$; for example $m(15) = 5$.

For $1 ≤ k ≤ 200$, find $\sum{m(k)}$.

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
