---
title: Zig-zag matrix
id: 594810f028c0303b75339ad8
challengeType: 5
videoUrl: ''
localeTitle: Matriz zig-zag
---

## Description
<section id="description"> Um array &quot;zig-zag&quot; é um arranjo quadrado dos primeiros inteiros $ N ^ 2 $, onde os números aumentam sequencialmente conforme você zigue-zague ao longo das <a href="https://en.wiktionary.org/wiki/antidiagonal">anti-diagonais da matriz</a> . Por exemplo, dado &quot;&#39;5&quot;&#39;, produza este array: <pre> 0 1 5 6 14
 2 4 7 13 15
 3 8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre> Escreva uma função que tome o tamanho da matriz zig-zag e retorne a matriz correspondente como matriz bidimensional. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ZigZagMatrix deve ser uma função
    testString: 'assert.equal(typeof ZigZagMatrix, "function", "ZigZagMatrix must be a function");'
  - text: ZigZagMatrix deve retornar array
    testString: 'assert.equal(typeof ZigZagMatrix(1), "object", "ZigZagMatrix should return array");'
  - text: ZigZagMatrix deve retornar uma matriz de matrizes
    testString: 'assert.equal(typeof ZigZagMatrix(1)[0], "object", "ZigZagMatrix should return an array of nestes arrays");'
  - text: 'ZigZagMatrix (1) deve retornar [[0]]'
    testString: 'assert.deepEqual(ZigZagMatrix(1), zm1, "ZigZagMatrix(1) should return [[0]]");'
  - text: 'ZigZagMatrix (2) deve retornar [[0, 1], [2, 3]]'
    testString: 'assert.deepEqual(ZigZagMatrix(2), zm2, "ZigZagMatrix(2) should return [[0, 1], [2, 3]]");'
  - text: ZigZagMatrix (5) deve retornar a matriz especificada
    testString: 'assert.deepEqual(ZigZagMatrix(5), zm5, "ZigZagMatrix(5) must return specified matrix");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ZigZagMatrix(n) {
  // Good luck!
  return [[], []];
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
