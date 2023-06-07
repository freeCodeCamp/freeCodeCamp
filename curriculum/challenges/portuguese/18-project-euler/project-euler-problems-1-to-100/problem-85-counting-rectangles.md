---
id: 5900f3c11000cf542c50fed4
title: 'Problema 85: Contagem de retângulos'
challengeType: 1
forumTopicId: 302199
dashedName: problem-85-counting-rectangles
---

# --description--

Se contarmos com cuidado, poderemos ver que uma grade retangular que mede 3 por 2 contém dezoito retângulos:

<img class="img-responsive center-block" alt="um diagrama de retângulos diferentes encontrados dentro de uma grade retangular de 3 por 2" src="https://cdn-media-1.freecodecamp.org/project-euler/counting-rectangles.png" style="background-color: white; padding: 10px;" />

Embora possa não existir uma grade retangular que contenha exatamente `n` retângulos, calcule a área da grade com a solução mais próxima.

# --hints--

`countingRectangles(18)` deve retornar um número.

```js
assert(typeof countingRectangles(18) === 'number');
```

`countingRectangles(18)` deve retornar `6`.

```js
assert.strictEqual(countingRectangles(18), 6);
```

`countingRectangles(250)` deve retornar `22`.

```js
assert.strictEqual(countingRectangles(250), 22);
```

`countingRectangles(50000)` deve retornar `364`.

```js
assert.strictEqual(countingRectangles(50000), 364);
```

`countingRectangles(1000000)` deve retornar `1632`.

```js
assert.strictEqual(countingRectangles(1000000), 1632);
```

`countingRectangles(2000000)` deve retornar `2772`.

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
