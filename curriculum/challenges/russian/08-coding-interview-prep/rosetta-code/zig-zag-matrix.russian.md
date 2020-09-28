---
title: Zig-zag matrix
id: 594810f028c0303b75339ad8
challengeType: 5
forumTopicId: 302348
localeTitle: Зигзагообразная матрица
---

## Description
<section id='description'>
Массив «зиг-зага» квадратное расположение первого $ N ^ 2 $, где целых число увеличения последовательно , как вы зигзагообразный вдоль массива <a href="https://en.wiktionary.org/wiki/antidiagonal">анти-диагоналей</a> . Например, с учетом «5», создайте этот массив: <pre> 0 1 5 6 14
 2 4 7 13 15
 3 8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre> Напишите функцию, которая принимает размер матрицы зигзага, и возвращает соответствующую матрицу в виде двумерного массива.
</section>

## Instructions
<section id='instructions'>
Write a function that takes the size of the zig-zag matrix, and returns the corresponding matrix as two-dimensional array.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ZigZagMatrix must be a function
    testString: assert.equal(typeof ZigZagMatrix, 'function');
  - text: ZigZagMatrix should return array
    testString: assert.equal(typeof ZigZagMatrix(1), 'object');
  - text: ZigZagMatrix should return an array of nested arrays
    testString: assert.equal(typeof ZigZagMatrix(1)[0], 'object');
  - text: ZigZagMatrix(1) should return [[0]]
    testString: assert.deepEqual(ZigZagMatrix(1), zm1);
  - text: ZigZagMatrix(2) should return [[0, 1], [2, 3]]
    testString: assert.deepEqual(ZigZagMatrix(2), zm2);
  - text: ZigZagMatrix(5) must return specified matrix
    testString: assert.deepEqual(ZigZagMatrix(5), zm5);

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

### After Tests
<div id='js-teardown'>

```js
const zm1 = [[0]];
const zm2 = [[0, 1], [2, 3]];
const zm5 = [
  [0, 1, 5, 6, 14],
  [2, 4, 7, 13, 15],
  [3, 8, 12, 16, 21],
  [9, 11, 17, 20, 22],
  [10, 18, 19, 23, 24]
];

```

</div>

</section>

## Solution
<section id='solution'>

```js
function ZigZagMatrix(n) {
  const mtx = [];
  for (let i = 0; i < n; i++) {
    mtx[i] = [];
  }

  let i = 1;
  let j = 1;
  for (let e = 0; e < n * n; e++) {
    mtx[i - 1][j - 1] = e;
    if ((i + j) % 2 === 0) {
      // Even stripes
      if (j < n) j++;
      else i += 2;
      if (i > 1) i--;
    } else {
      // Odd stripes
      if (i < n) i++;
      else j += 2;
      if (j > 1) j--;
    }
  }
  return mtx;
}
```

</section>
