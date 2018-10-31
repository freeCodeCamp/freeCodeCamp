---
title: Vector cross product
id: 594810f028c0303b75339ad2
challengeType: 5
videoUrl: ''
localeTitle: Produto vetorial cruzado
---

## Description
<section id="description"> Um vetor é definido como tendo três dimensões como representadas por uma coleção ordenada de três números: (X, Y, Z). <p> Tarefa: </p><pre> <code>Write a function that takes two vectors (arrays) as input and computes their cross product.</code> </pre><p> Sua função deve retornar <code>null</code> em entradas inválidas (isto é, vetores de diferentes comprimentos). </p><p></p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: dotProduct deve ser uma função
    testString: 'assert.equal(typeof crossProduct, "function", "dotProduct must be a function");'
  - text: dotProduct () deve retornar null
    testString: 'assert.equal(crossProduct(), null, "dotProduct() must return null");'
  - text: 'crossProduct ([1, 2, 3], [4, 5, 6]) deve retornar [-3, 6, -3].'
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
