---
title: Vector cross product
id: 594810f028c0303b75339ad2
challengeType: 5
videoUrl: ''
localeTitle: Producto cruzado vector
---

## Description
<section id="description"> Un vector se define como que tiene tres dimensiones como se representa por una colección ordenada de tres números: (X, Y, Z). <p> Tarea: </p><pre> <code>Write a function that takes two vectors (arrays) as input and computes their cross product.</code> </pre><p> Su función debe devolver <code>null</code> en entradas no válidas (es decir, vectores de diferentes longitudes). </p><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: puntoEl producto debe ser una función
    testString: 'assert.equal(typeof crossProduct, "function", "dotProduct must be a function");'
  - text: dotProduct () debe devolver null
    testString: 'assert.equal(crossProduct(), null, "dotProduct() must return null");'
  - text: 'crossProduct ([1, 2, 3], [4, 5, 6]) debe devolver [-3, 6, -3].'
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
