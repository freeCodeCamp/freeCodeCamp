---
id: 5900f3c11000cf542c50fed4
title: 'Problem 85: Rechtecke zählen'
challengeType: 1
forumTopicId: 302199
dashedName: problem-85-counting-rectangles
---

# --description--

Durch sorgfältiges Zählen kann man feststellen, dass ein rechteckiges Gitter von 3 x 2 achtzehn Rechtecke enthält:

<img class="img-responsive center-block" alt="ein Diagramm der verschiedenen Rechtecke innerhalb eines 3 x 2-Rechteckgitters" src="https://cdn-media-1.freecodecamp.org/project-euler/counting-rectangles.png" style="background-color: white; padding: 10px;" />

Auch wenn es kein rechtwinkliges Gitter gibt, das genau `n` Rechtecke enthält, finde die Fläche des Gitters mit der nächstliegenden Lösung.

# --hints--

`countingRectangles(18)` sollte eine Zahl zurückgeben.

```js
assert(typeof countingRectangles(18) === 'number');
```

`countingRectangles(18)` sollte `6` zurückgeben.

```js
assert.strictEqual(countingRectangles(18), 6);
```

`countingRectangles(250)` sollte `22` zurückgeben.

```js
assert.strictEqual(countingRectangles(250), 22);
```

`countingRectangles(50000)` sollte `364` zurückgeben.

```js
assert.strictEqual(countingRectangles(50000), 364);
```

`countingRectangles(1000000)` sollte `1632` zurückgeben.

```js
assert.strictEqual(countingRectangles(1000000), 1632);
```

`countingRectangles(2000000)` sollte `2772` zurückgeben.

```js
assert.strictEqual(countingRectangles(2000000), 2772);
```

# --seed--

## --seed-contents--

```js
function countingRectangles(n) {

  return true;
}

countingRectangles(18);
```

# --solutions--

```js
function countingRectangles(n) {
  function numberOfRectangles(h, w) {
    return (h * (h + 1) * w * (w + 1)) / 4;
  }

  function rectangleArea(h, w) {
    return h * w;
  }

  let rectanglesCount = 1;
  let maxSide = 1;
  while (rectanglesCount < n) {
    maxSide++;
    rectanglesCount = numberOfRectangles(maxSide, 1);
  }

  let bestDiff = Math.abs(rectanglesCount - n);
  let bestSize = [maxSide, 1];

  let curHeight = maxSide - 1;
  let curWidth = 1;

  for (curWidth; curWidth < curHeight; curWidth++) {
    for (curHeight; curHeight > curWidth; curHeight--) {
      rectanglesCount = numberOfRectangles(curHeight, curWidth);
      const curDiff = Math.abs(rectanglesCount - n);
      if (curDiff < bestDiff) {
        bestDiff = curDiff;
        bestSize = [curHeight, curWidth];
      }

      if (rectanglesCount < n) {
        break;
      }
    }
  }
  return rectangleArea(...bestSize);
}
```
