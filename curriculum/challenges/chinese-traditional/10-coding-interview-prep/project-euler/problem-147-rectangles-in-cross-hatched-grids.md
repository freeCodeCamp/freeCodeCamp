---
id: 5900f3ff1000cf542c50ff12
title: '問題 147：交叉對角線網格中的矩形'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

如圖所示，在 3 x 2 的交叉對角線網格中，共有 37 個不同的矩形可以放置於該網格內。

<img class="img-responsive center-block" alt="ways of situating different rectangles within cross-hatched 3x2 grid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

從長和寬的角度考慮，有 5 種小於 3 x 2 網格的矩形，即 1 x 1、2 x 1、3 x 1、1 x 2 和 2 x 2。 若畫出上述矩形的交叉對角線，則有不同的矩形可以位於這些更小的網格中，對應數量如下：

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

上述個數與 3 x 2 網格中的 37 相加，可得對於 3 x 2 及其更小的網格，共有 72 個不同的矩形可以放置其中。

請求出 47 x 43 及其更小的網格中，可以放置多少個不同的矩形？

# --hints--

`crossHatchedRectangles()` 應該返回 `846910284`。

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
