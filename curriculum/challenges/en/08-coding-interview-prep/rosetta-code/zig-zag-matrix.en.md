---
title: Zig-zag matrix
id: 594810f028c0303b75339ad8
challengeType: 5
---

## Description
<section id='description'>
A &nbsp; ''zig-zag'' &nbsp; array is a square arrangement of the first &nbsp;
$N^2$ &nbsp; integers, &nbsp; where the
numbers increase sequentially as you zig-zag along the array's &nbsp;
<a href="https://en.wiktionary.org/wiki/antidiagonal">anti-diagonals</a>.
For example, given &nbsp; '''5''', &nbsp; produce this array:
<pre>
 0  1  5  6 14
 2  4  7 13 15
 3  8 12 16 21
 9 11 17 20 22
10 18 19 23 24
</pre>
Write a function that takes the size of the zig-zag matrix, and returns the
corresponding matrix as two-dimensional array.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: ZigZagMatrix must be a function
  testString: 'assert.equal(typeof ZigZagMatrix, ''function'', ''ZigZagMatrix must be a function'');'
- text: ZigZagMatrix should return array
  testString: 'assert.equal(typeof ZigZagMatrix(1), ''object'', ''ZigZagMatrix should return array'');'
- text: ZigZagMatrix should return an array of nestes arrays
  testString: 'assert.equal(typeof ZigZagMatrix(1)[0], ''object'', ''ZigZagMatrix should return an array of nestes arrays'');'
- text: 'ZigZagMatrix(1) should return [[0]]'
  testString: 'assert.deepEqual(ZigZagMatrix(1), zm1, ''ZigZagMatrix(1) should return [[0]]'');'
- text: 'ZigZagMatrix(2) should return [[0, 1], [2, 3]]'
  testString: 'assert.deepEqual(ZigZagMatrix(2), zm2, ''ZigZagMatrix(2) should return [[0, 1], [2, 3]]'');'
- text: ZigZagMatrix(5) must return specified matrix
  testString: 'assert.deepEqual(ZigZagMatrix(5), zm5, ''ZigZagMatrix(5) must return specified matrix'');'

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
