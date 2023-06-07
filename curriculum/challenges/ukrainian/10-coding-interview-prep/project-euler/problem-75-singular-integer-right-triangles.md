---
id: 5900f3b71000cf542c50feca
title: 'Завдання 75: Одиничні цілочисельні прямокутні трикутники'
challengeType: 1
forumTopicId: 302188
dashedName: problem-75-singular-integer-right-triangles
---

# --description--

Виявилось, що 12 см — це найменша довжина проводу, який можна зігнути так, щоб сформувати прямокутний трикутник лише одним способом, проте існує набагато більше прикладів.

<div style='margin-left: 4em;'>
  <strong>12 см:</strong> (3,4,5)<br>
  <strong>24 см:</strong> (6,8,10)<br>
  <strong>30 см:</strong> (5,12,13)<br>
  <strong>36 см:</strong> (9,12,15)<br>
  <strong>40 см:</strong> (8,15,17)<br>
  <strong>48 см:</strong> (12,16,20)<br><br>
</div>

На противагу, дріт певної довжини, наприклад, 20 см, не можна зігнути так, щоб сформувати цілий прямокутний трикутник; у той час як інша довжина дроту дозволяє зробити це більш, ніж в один спосіб. Наприклад, при використанні 120 см можливо сформувати рівно три різних правильних прямокутних трикутники.

<div style='margin-left: 4em;'>
  <strong>120 см:</strong> (30,40,50), (20,48,52), (24,45,51)<br><br>
</div>

Враховуючи, що L — це довжина дроту, то для скількох значень L ≤ `n` може бути сформований лише один, цілочисельний прямокутний трикутник?

# --hints--

`singularIntRightTriangles(48)` повинен повертатися як число.

```js
assert(typeof singularIntRightTriangles(48) === 'number');
```

`singularIntRightTriangles(48)` повинен повертатися як `6`.

```js
assert.strictEqual(singularIntRightTriangles(48), 6);
```

`singularIntRightTriangles(700000)` повинен повертатися як `75783`.

```js
assert.strictEqual(singularIntRightTriangles(700000), 75783);
```

`singularIntRightTriangles(1000000)` повинен повертатися як `107876`.

```js
assert.strictEqual(singularIntRightTriangles(1000000), 107876);
```

`singularIntRightTriangles(1500000)` повинен повертатися як `161667`.

```js
assert.strictEqual(singularIntRightTriangles(1500000), 161667);
```

# --seed--

## --seed-contents--

```js
function singularIntRightTriangles(n) {

  return true;
}

singularIntRightTriangles(48);
```

# --solutions--

```js
function singularIntRightTriangles(limit) {
  function euclidFormula(m, n) {
    return [m ** 2 - n ** 2, 2 * m * n, m ** 2 + n ** 2];
  }

  function gcd(numberA, numberB) {
    if (numberB === 0) {
      return numberA;
    }
    return gcd(numberB, numberA % numberB);
  }

  function notBothOdd(numberA, numberB) {
    return (numberA + numberB) % 2 === 1;
  }

  function areCoprime(numberA, numberB) {
    return gcd(numberA, numberB) === 1;
  }

  const trianglesWithPerimeter = new Array(limit + 1).fill(0);
  const mLimit = Math.sqrt(limit / 2);

  for (let m = 2; m < mLimit; m++) {
    for (let n = 1; n < m; n++) {
      if (notBothOdd(m, n) && areCoprime(m, n)) {
        const [sideA, sideB, sideC] = euclidFormula(m, n);
        const perimeter = sideA + sideB + sideC;
        let curPerimeter = perimeter;
        while (curPerimeter <= limit) {
          trianglesWithPerimeter[curPerimeter]++;
          curPerimeter += perimeter;
        }
      }
    }
  }
  return trianglesWithPerimeter.filter(trianglesCount => trianglesCount === 1)
    .length;
}
```
