---
title: Zig-zag matrix
id: 594810f028c0303b75339ad8
challengeType: 5
videoUrl: ''
localeTitle: Зигзагообразная матрица
---

## Description
<section id="description"> Массив «зиг-зага» квадратное расположение первого $ N ^ 2 $, где целых число увеличения последовательно , как вы зигзагообразный вдоль массива <a href="https://en.wiktionary.org/wiki/antidiagonal">анти-диагоналей</a> . Например, с учетом «5», создайте этот массив: <pre> 0 1 5 6 14
 2 4 7 13 15
 3 8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre> Напишите функцию, которая принимает размер матрицы зигзага, и возвращает соответствующую матрицу в виде двумерного массива. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ZigZagMatrix должна быть функцией
    testString: 'assert.equal(typeof ZigZagMatrix, "function", "ZigZagMatrix must be a function");'
  - text: ZigZagMatrix должен возвращать массив
    testString: 'assert.equal(typeof ZigZagMatrix(1), "object", "ZigZagMatrix should return array");'
  - text: ZigZagMatrix должен возвращать массив массивов гнезд
    testString: 'assert.equal(typeof ZigZagMatrix(1)[0], "object", "ZigZagMatrix should return an array of nestes arrays");'
  - text: 'ZigZagMatrix (1) должен возвращать [[0]]'
    testString: 'assert.deepEqual(ZigZagMatrix(1), zm1, "ZigZagMatrix(1) should return [[0]]");'
  - text: 'ZigZagMatrix (2) должен возвращать [[0, 1], [2, 3]]'
    testString: 'assert.deepEqual(ZigZagMatrix(2), zm2, "ZigZagMatrix(2) should return [[0, 1], [2, 3]]");'
  - text: ZigZagMatrix (5) должен возвращать заданную матрицу
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
