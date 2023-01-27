---
id: 5900f3ff1000cf542c50ff12
title: 'Problem 147: Rectangles in cross-hatched grids'
challengeType: 1
forumTopicId: 301776
dashedName: problem-147-rectangles-in-cross-hatched-grids
---

# --description--

In a 3x2 cross-hatched grid, a total of 37 different rectangles could be situated within that grid as indicated in the sketch.

<img class="img-responsive center-block" alt="ways of situating different rectangles within cross-hatched 3x2 grid" src="https://cdn.freecodecamp.org/curriculum/project-euler/rectangles-in-cross-hatched-grids.png" style="background-color: white; padding: 10px;">

There are 5 grids smaller than 3x2, vertical and horizontal dimensions being important, i.e. 1x1, 2x1, 3x1, 1x2 and 2x2. If each of them is cross-hatched, the following number of different rectangles could be situated within those smaller grids:

$$\begin{array}{|c|c|}
\hline
  1 \times 1 & 1  \\\\ \hline
  2 \times 1 & 4  \\\\ \hline
  3 \times 1 & 8  \\\\ \hline
  1 \times 2 & 4  \\\\ \hline
  2 \times 2 & 18 \\\\ \hline
\end{array}$$

Adding those to the 37 of the 3x2 grid, a total of 72 different rectangles could be situated within 3x2 and smaller grids.

How many different rectangles could be situated within 47x43 and smaller grids?

# --hints--

`crossHatchedRectangles()` should return `846910284`.

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
