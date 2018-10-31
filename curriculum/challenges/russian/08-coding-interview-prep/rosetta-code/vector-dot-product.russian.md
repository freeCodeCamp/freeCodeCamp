---
title: Vector dot product
id: 594810f028c0303b75339ad3
challengeType: 5
videoUrl: ''
localeTitle: Векторный точечный продукт
---

## Description
<section id="description"><p> Вектор определяется как имеющий три измерения как представленный упорядоченным набором из трех чисел: (X, Y, Z). </p><p> Задача: </p><pre> <code>Write a function that takes any numbers of vectors (arrays) as input and computes their dot product.</code> </pre><p> Ваша функция должна возвращать значение <code>null</code> на недопустимые входы (т. Е. Векторы разной длины). </p><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: dotProduct должен быть функцией
    testString: 'assert.equal(typeof dotProduct, "function", "dotProduct must be a function");'
  - text: dotProduct () должен возвращать значение null
    testString: 'assert.equal(dotProduct(), null, "dotProduct() must return null");'
  - text: 'dotProduct ([[1], [1]]) должен возвращать 1.'
    testString: 'assert.equal(dotProduct([1], [1]), 1, "dotProduct([[1], [1]]) must return 1.");'
  - text: 'dotProduct ([[1], [1, 2]]) должен возвращать null.'
    testString: 'assert.equal(dotProduct([1], [1, 2]), null, "dotProduct([[1], [1, 2]]) must return null.");'
  - text: 'dotProduct ([1, 3, -5], [4, -2, -1]) должен вернуть 3.'
    testString: 'assert.equal(dotProduct([1, 3, -5], [4, -2, -1]), 3, "dotProduct([1, 3, -5], [4, -2, -1]) must return 3.");'
  - text: <code>dotProduct(...nVectors)</code> должен возвращать 156000
    testString: 'assert.equal(dotProduct([ 0, 1, 2, 3, 4 ], [ 0, 2, 4, 6, 8 ], [ 0, 3, 6, 9, 12 ], [ 0, 4, 8, 12, 16 ], [ 0, 5, 10, 15, 20 ]), 156000, "<code>dotProduct(...nVectors)</code> should return 156000");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function dotProduct() {
    // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
