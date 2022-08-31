---
id: 5900f3c11000cf542c50fed4
title: '問題 85: 長方形を数え上げる'
challengeType: 1
forumTopicId: 302199
dashedName: problem-85-counting-rectangles
---

# --description--

3 x 2 の長方形格子をよく見ながら数えると、18 個の長方形が見つかります。

<img class="img-responsive center-block" alt="3 x 2 の長方形格子に含まれるさまざまな長方形の図" src="https://cdn-media-1.freecodecamp.org/project-euler/counting-rectangles.png" style="background-color: white; padding: 10px;" />

ちょうど `n` 個の長方形が含まれる長方形格子は存在しないかもしれませんが、最も近い解を持つ格子の面積を求めなさい。

# --hints--

`countingRectangles(18)` は数値を返す必要があります。

```js
assert(typeof countingRectangles(18) === 'number');
```

`countingRectangles(18)` は `6` を返す必要があります。

```js
assert.strictEqual(countingRectangles(18), 6);
```

`countingRectangles(250)` は `22` を返す必要があります。

```js
assert.strictEqual(countingRectangles(250), 22);
```

`countingRectangles(50000)` は `364` を返す必要があります。

```js
assert.strictEqual(countingRectangles(50000), 364);
```

`countingRectangles(1000000)` は `1632` を返す必要があります。

```js
assert.strictEqual(countingRectangles(1000000), 1632);
```

`countingRectangles(2000000)` は `2772` を返す必要があります。

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
