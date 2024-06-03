---
id: 5900f3c11000cf542c50fed4
title: 'Завдання 85: підрахунок прямокутників'
challengeType: 1
forumTopicId: 302199
dashedName: problem-85-counting-rectangles
---

# --description--

Якщо уважно порахувати, можна побачити, що прямокутна сітка 3×2 містить вісімнадцять прямокутників:

<img class="img-responsive center-block" alt="діаграма різних прямокутників, знайдених у прямокутній сітці 3х2" src="https://cdn-media-1.freecodecamp.org/project-euler/counting-rectangles.png" style="background-color: white; padding: 10px;" />

Хоча не існує такої прямокутної сітки, яка містить `n` прямокутників, знайдіть площу сітки з приблизним розв’язком.

# --hints--

`countingRectangles(18)` має повернути число.

```js
assert(typeof countingRectangles(18) === 'number');
```

`countingRectangles(18)` має повернути `6`.

```js
assert.strictEqual(countingRectangles(18), 6);
```

`countingRectangles(250)` має повернути `22`.

```js
assert.strictEqual(countingRectangles(250), 22);
```

`countingRectangles(50000)` має повернути `364`.

```js
assert.strictEqual(countingRectangles(50000), 364);
```

`countingRectangles(1000000)` має повернути `1632`.

```js
assert.strictEqual(countingRectangles(1000000), 1632);
```

`countingRectangles(2000000)` має повернути `2772`.

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
