---
id: 5900f4381000cf542c50ff4a
title: '問題203：無平方二項係數'
challengeType: 1
forumTopicId: 301844
dashedName: problem-203-squarefree-binomial-coefficients
---

# --description--

The binomial coefficients $\displaystyle\binom{n}{k}$ can be arranged in triangular form, Pascal's triangle, like this:

$$\begin{array}{ccccccccccccccc}    &   &   &   &    &    &    &  1 &    &    &    &   &   &   &   \\\\
   &   &   &   &    &    &  1 &    & 1  &    &    &   &   &   &   \\\\    &   &   &   &    &  1 &    &  2 &    &  1 &    &   &   &   &   \\\\
   &   &   &   &  1 &    &  3 &    &  3 &    &  1 &   &   &   &   \\\\    &   &   & 1 &    &  4 &    &  6 &    &  4 &    & 1 &   &   &   \\\\
   &   & 1 &   &  5 &    & 10 &    & 10 &    &  5 &   & 1 &   &   \\\\    & 1 &   & 6 &    & 15 &    & 20 &    & 15 &    & 6 &   & 1 &   \\\\
 1 &   & 7 &   & 21 &    & 35 &    & 35 &    & 21 &   & 7 &   & 1 \\\\ &   &   &   &    &    &    & \ldots \end{array}$$

可以看出Pascal三角形的前八行包含十二個不同的數字：1,2,3,4,5,6,7,10,15,20,21和35。

如果沒有素數的平方除n，則正整數n稱爲squarefree。 在Pascal三角形的前八行中的十二個不同數字中，除了4和20之外的所有數字都是無方形的。 前八行中不同的無平方數字的總和爲105。

找到Pascal三角形的前51行中不同的無平方數字的總和。

# --hints--

`squarefreeBinomialCoefficients()` should return `34029210557338`.

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
