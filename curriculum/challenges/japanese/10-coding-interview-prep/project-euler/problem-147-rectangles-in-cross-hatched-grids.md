---
id: 5900f3ff1000cf542c50ff12
title: '問題 147: 斜交平行格子内の長方形'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

下図に示すとおり、3 x 2 の斜交平行格子の場合、格子内に計 37 個の異なる長方形を配置できます。

<img class="img-responsive center-block" alt="ways of situating different rectangles within cross-hatched 3x2 grid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;" />

縦と横の寸法を考慮した場合、3 x 2 よりも小さい格子は 1x1, 2x1, 3x1, 1x2, 2x2 の 5 つです。 それぞれが斜交平行格子である場合、それらの小さな格子内に配置できる異なる長方形の数は次のとおりです。

$$\begin{array}{|c|c|} \hline 1 \times 1 & 1  \\\\ \hline 2 \times 1 & 4  \\\\ \hline 3 \times 1 & 8  \\\\ \hline 1 \times 2 & 4  \\\\ \hline 2 \times 2 & 18 \\\\ \hline \end{array}$$

これらを 3 x 2 の格子の 37 個に加えると、3 x 2 の格子とそれより小さい格子の中に計 72 個の異なる長方形を配置できます。

47 x 43 の格子とそれより小さい格子の中に、異なる長方形をいくつ配置できますか。

# --hints--

`crossHatchedRectangles()` は `846910284` を返す必要があります。

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
