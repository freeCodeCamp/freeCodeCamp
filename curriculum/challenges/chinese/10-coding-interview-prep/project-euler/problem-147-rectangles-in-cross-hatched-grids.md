---
id: 5900f3ff1000cf542c50ff12
title: '问题 147：交叉对角线网格中的矩形'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

如图所示，在 3 x 2 的交叉对角线网格中，共有 37 个不同的矩形可以放置于该网格内。

<img class="img-responsive center-block" alt="ways of situating different rectangles within cross-hatched 3x2 grid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

从长和宽的角度考虑，有 5 种小于 3 x 2 网格的矩形，即 1 x 1、2 x 1、3 x 1、1 x 2 和 2 x 2。 若画出上述矩形的交叉对角线，则有不同的矩形可以位于这些更小的网格中，对应数量如下：

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

上述个数与 3 x 2 网格中的 37 相加，可得对于 3 x 2 及其更小的网格，共有 72 个不同的矩形可以放置其中。

请求出 47 x 43 及其更小的网格中，可以放置多少个不同的矩形？

# --hints--

`crossHatchedRectangles()` 应该返回 `846910284`。

```js
assert.strictEqual(crossHatchedRectangles(), 846910284);
```

# --seed--

## --seed-contents--

```js
function crossHatchedRectangles() {

  return true;
}

crossHatchedRectangles();
```

# --solutions--

```js
// solution required
```
