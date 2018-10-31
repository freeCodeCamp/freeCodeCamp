---
title: Vector cross product
id: 594810f028c0303b75339ad2
challengeType: 5
videoUrl: ''
localeTitle: Векторный перекрестный продукт
---

## Description
<section id="description"> Вектор определяется как имеющий три измерения как представленный упорядоченным набором из трех чисел: (X, Y, Z). <p> Задача: </p><pre> <code>Write a function that takes two vectors (arrays) as input and computes their cross product.</code> </pre><p> Ваша функция должна возвращать значение <code>null</code> на недопустимые входы (т. Е. Векторы разной длины). </p><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: dotProduct должен быть функцией
    testString: 'assert.equal(typeof crossProduct, "function", "dotProduct must be a function");'
  - text: dotProduct () должен возвращать значение null
    testString: 'assert.equal(crossProduct(), null, "dotProduct() must return null");'
  - text: 'crossProduct ([1, 2, 3], [4, 5, 6]) должен вернуться [-3, 6, -3].'
    testString: 'assert.deepEqual(res12, exp12, "crossProduct([1, 2, 3], [4, 5, 6]) must return [-3, 6, -3].");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function crossProduct() {
    // Good luck!
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
