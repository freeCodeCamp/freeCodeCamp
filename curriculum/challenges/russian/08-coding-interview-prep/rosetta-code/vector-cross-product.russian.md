---
title: Vector cross product
id: 594810f028c0303b75339ad2
challengeType: 5
forumTopicId: 302342
localeTitle: Векторный перекрестный продукт
---

## Description
<section id='description'>
Вектор определяется как имеющий три измерения как представленный упорядоченным набором из трех чисел: (X, Y, Z). <p> Задача: </p><pre> <code>Write a function that takes two vectors (arrays) as input and computes their cross product.</code> </pre><p> Ваша функция должна возвращать значение <code>null</code> на недопустимые входы (т. Е. Векторы разной длины). </p><p></p>
</section>

## Instructions
<section id='instructions'>
Write a function that takes two vectors (arrays) as input and computes their cross product. Your function should return <code>null</code> on invalid inputs such as vectors of different lengths.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: dotProduct must be a function
    testString: assert.equal(typeof crossProduct, 'function');
  - text: dotProduct() must return null
    testString: assert.equal(crossProduct(), null);
  - text: crossProduct([1, 2, 3], [4, 5, 6]) must return [-3, 6, -3].
    testString: assert.deepEqual(res12, exp12);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function crossProduct(a, b) {
    // Good luck!
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const tv1 = [1, 2, 3];
const tv2 = [4, 5, 6];
const res12 = crossProduct(tv1, tv2);
const exp12 = [-3, 6, -3];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function crossProduct(a, b) {
  if (!a || !b) {
    return null;
  }

  // Check lengths
  if (a.length !== 3 || b.length !== 3) {
    return null;
  }

  return [
    (a[1] * b[2]) - (a[2] * b[1]),
    (a[2] * b[0]) - (a[0] * b[2]),
    (a[0] * b[1]) - (a[1] * b[0])
  ];
}
```

</section>
