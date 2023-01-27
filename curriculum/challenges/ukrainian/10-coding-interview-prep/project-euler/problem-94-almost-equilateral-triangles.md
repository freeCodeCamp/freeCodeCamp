---
id: 5900f3ca1000cf542c50fedd
title: 'Завдання 94: Майже рівносторонні трикутники'
challengeType: 1
forumTopicId: 302211
dashedName: problem-94-almost-equilateral-triangles
---

# --description--

Відомо, що не існує рівностороннього трикутника з цілочисельними сторонами і площею. Однак майже рівносторонній трикутник 5-5-6 має площу 12 квадратних одиниць.

Визначимо <dfn>майже рівносторонній трикутник</dfn> як трикутник, у якого дві сторони рівні, а третя відрізняється не більше ніж на одну одиницю.

Знайдіть суму периметрів усіх майже рівносторонніх трикутників з цілочисельними сторонами і площею, периметри яких не перевищують `limit`.

# --hints--

`almostEquilateralTriangles(50)` має повернути число.

```js
assert(typeof almostEquilateralTriangles(50) === 'number');
```

`almostEquilateralTriangles(50)` має повернути `66`.

```js
assert.strictEqual(almostEquilateralTriangles(50), 66);
```

`almostEquilateralTriangles(10000)` має повернути `3688`.

```js
assert.strictEqual(almostEquilateralTriangles(10000), 3688);
```

`almostEquilateralTriangles(10000000)` має повернути `9973078`.

```js
assert.strictEqual(almostEquilateralTriangles(10000000), 9973078);
```

`almostEquilateralTriangles(1000000000)` має повернути `518408346`.

```js
assert.strictEqual(almostEquilateralTriangles(1000000000), 518408346);
```

# --seed--

## --seed-contents--

```js
function almostEquilateralTriangles(limit) {

  return true;
}

almostEquilateralTriangles(50);
```

# --solutions--

```js
function almostEquilateralTriangles(limit) {
  // Based on https://blog.dreamshire.com/project-euler-94-solution/
  let perimetersSum = 0;

  let sidesAB = 1;
  let sideC = 1;
  let perimeter = 0;
  let perimeterOffset = 1;

  while (perimeter <= limit) {
    [sidesAB, sideC] = [4 * sidesAB - sideC + 2 * perimeterOffset, sidesAB];
    perimeterOffset = -perimeterOffset;

    perimetersSum += perimeter;
    perimeter = 3 * sidesAB - perimeterOffset;
  }

  return perimetersSum;
}
```
